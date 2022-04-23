import { CarouselProviderProps } from 'pure-react-carousel';
import { MutableRefObject } from 'react';

export enum ArtifactType {
  Axe = 'axe',
  Claw = 'claw',
  Dagger = 'dagger',
  Hammer = 'hammer',
  Shield = 'shield',
  Sickle = 'sickle',
  Sword = 'sword',
}

export enum ElementType {
  Neutral = 'neutral',
  Poison = 'poison',
  Fire = 'fire',
  Frost = 'frost',
  Light = 'light',
  Darkness = 'darkness',
}

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

export type ViewerData = {
  [x in ArtifactType]: { [y in ElementType]: { id: string } };
};

export type ArtifactData = {
  [x in ArtifactType]: { description: string };
};

export type ElementData = {
  [x in ElementType]: { description: string };
};

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

export type CarouselOptions = Omit<
  CarouselProviderProps,
  'children' | 'totalSlides'
> & {
  visibleSlidesMobile: number;
  visibleSlidesDesktop: number;
  visibleSlidesDefault: number;
};
