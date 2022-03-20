import { MutableRefObject } from 'react';

export interface ViewerApi {
  addEventListener: (type: string, listener: () => void) => void;
  setSpeed: (speed: number) => void;
  start: () => void;
  stop: () => void;
}

export interface UseArtifactsViewerParams {
  frameRef: MutableRefObject<HTMLIFrameElement | null>;
  modelId: string;
}

export interface UseArtifactsViewerResponse {
  viewerApi: ViewerApi | null;
  isViewerReady: boolean;
}
