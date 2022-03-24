// @ts-ignore 'viewer-api' does not support TS.
import Sketchfab from '@sketchfab/viewer-api';
import { useEffect, useMemo, useRef, useState } from 'react';

import { viewerConfig, viewerOptions } from './data';
import {
  UseArtifactsViewerParams,
  UseArtifactsViewerResponse,
  ViewerApi,
  ViewerClient,
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
      const api = apiRef.current;

      if (id) {
        clearTimeout(id);
        timeoutIdRef.current = null;
      }

      if (api) {
        api.pause();
        apiRef.current = null;
      }
    };

    setIsReady(false);
    clearPrevTimeout();
    if (!modelId || !frameRef.current) {
      return;
    }

    // Load a specific version of 'viewer-api' to avoid breaking changes.
    const { spinAnimName, spinAnimSpeed, initLoadDelay, viewerApiVersion } =
      viewerConfig;

    const client = new Sketchfab(
      viewerApiVersion,
      frameRef.current,
    ) as ViewerClient;

    client.init(modelId, {
      ...viewerOptions,
      success: (api: ViewerApi) => {
        api.start(() => {
          api.addEventListener('viewerready', () => {
            api.getAnimations((error, animations) => {
              if (error) {
                return;
              }

              // Only extract and play the rotation, spin animations.
              const rotationAnim = animations.find(([, animName]) => {
                return animName?.toLowerCase() === spinAnimName;
              });

              const [animUid, animName] = rotationAnim || [];
              timeoutIdRef.current = window.setTimeout(() => {
                setIsReady(true);
                apiRef.current = api;
                if (animUid && animName) {
                  api.setSpeed(spinAnimSpeed);
                  api.setCurrentAnimationByUID(animUid);
                  api.play();
                }
              }, initLoadDelay);
            });
          });
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
