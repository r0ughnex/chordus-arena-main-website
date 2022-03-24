import { MutableRefObject } from 'react';

export type ApiAnimUid = string;
export type ApiAnimName = string;
export type ApiAnimDurn = number;
export type ApiAnimation = [ApiAnimUid, ApiAnimName, ApiAnimDurn];

export interface ClientOptions {
  [x: string]: string | number | ((api: ViewerApi) => void);
}

export interface ViewerClient {
  init: (modelId: string, options: ClientOptions) => void;
}

export interface ViewerApi {
  stop: (callback?: () => void) => void;
  start: (callback?: () => void) => void;

  play: (callback?: () => void) => void;
  pause: (callback?: () => void) => void;

  getAnimations: (
    callback: (error: Error, animations: ApiAnimation[]) => void,
  ) => void;

  addEventListener: (type: string, callback: () => void) => void;
  setCurrentAnimationByUID: (uid: string) => void;
  setSpeed: (speed: number) => void;
}

export interface UseArtifactsViewerParams {
  frameRef: MutableRefObject<HTMLIFrameElement | null>;
  modelId: string;
}

export interface UseArtifactsViewerResponse {
  viewerApi: ViewerApi | null;
  isViewerReady: boolean;
}
