// @ts-ignore 'viewer-api' does not support TS.
import Sketchfab from '@sketchfab/viewer-api';
import { useEffect, useMemo, useRef, useState } from 'react';

import { viewerOptions } from './data';
import {
  UseArtifactsViewerParams,
  UseArtifactsViewerResponse,
  ViewerApi,
} from './types';

export function useArtifactsViewer({
  frameRef,
  modelId,
}: UseArtifactsViewerParams): UseArtifactsViewerResponse {
  const timeoutIdRef = useRef<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const apiRef = useRef<ViewerApi | null>(null);

  useEffect(() => {
    const clearPrevTimeout = () => {
      const id = timeoutIdRef.current;

      if (id) {
        clearTimeout(id);
        timeoutIdRef.current = null;
      }
    };

    clearPrevTimeout();
    setIsReady(false);
    if (!modelId || !frameRef.current) {
      return;
    }

    // NOTE: Always load a specific version of 'viewer-api'.
    const client = new Sketchfab('1.12.0', frameRef.current);

    client.init(modelId, {
      ...viewerOptions,
      success: (api: ViewerApi) => {
        api.start();
        api.addEventListener('viewerready', () => {
          api.setSpeed(0.5);

          timeoutIdRef.current = window.setTimeout(() => {
            apiRef.current = api;
            setIsReady(true);
          }, 1250);
        });
      },
    });
  }, [modelId, frameRef]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const viewerApi = useMemo(() => apiRef.current, [isReady]);

  // Memoize the hook's response object.
  const memoizedResponse = useMemo(() => {
    return { viewerApi, isViewerReady: isReady };
  }, [viewerApi, isReady]);

  return memoizedResponse;
}
