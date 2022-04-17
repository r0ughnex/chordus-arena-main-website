import { v4 as uuidv4 } from 'uuid';

import {
  ArtifactType,
  CarouselOptions,
  ElementType,
  ViewerData,
} from './types';

const imgPath = `${process.env.PUBLIC_URL}/images/artifact_thumbs`;

/**
 * The viewer options and default values were taken from:
 * https://sketchfab.com/developers/viewer/initialization
 */
export const viewerOptions = {
  dnt: 1,
  camera: 0,
  /**
   * @TODO: 'autospin' field should be set to '0' once,
   * 'Rotation' animation is added to all the artifacts.
   */
  autospin: 1,
  autostart: 0,
  dof_circle: 0,
  scrollwheel: 0,
  transparent: 1,
  double_click: 0,
  annotations_visible: 0,
  orbit_constraint_pan: 1,
  annotation_tooltip_visible: 0,
  prevent_user_light_rotation: 1,
  ui_controls: 0,
  ui_animations: 0,
  ui_fullscreen: 0,
  ui_annotations: 0,
  ui_general_controls: 0,
  ui_ar: 0,
  ui_hint: 0,
  ui_stop: 0,
  ui_start: 0,
  ui_sound: 0,
  ui_infos: 0,
  ui_loading: 0,
  ui_ar_help: 0,
  ui_ar_qrcode: 0,
  ui_inspector: 0,
  ui_watermark: 0,
};

// Custom viewer configuration.
export const viewerConfig = {
  viewerApiVersion: '1.12.0',
  spinAnimName: 'rotation',
  spinAnimSpeed: 0.5,
  initLoadDelay: 1250,
};

export const viewerData = {
  [ArtifactType.Hammer]: {
    [ElementType.Darkness]: { id: 'd557f1b1f57748d28afc2adbe7cc077e' },
  },

  [ArtifactType.Shield]: {
    [ElementType.Darkness]: { id: 'bc4bba1a9c6343128608a013114b8aeb' },
  },

  [ArtifactType.Sickle]: {
    [ElementType.Darkness]: { id: '699eb5837d28468abb6d4de3ba9a0b35' },
  },

  [ArtifactType.Axe]: {
    [ElementType.Darkness]: { id: '0a513467cff243838ed0fd378afbc434' },
  },

  [ArtifactType.Claw]: {
    [ElementType.Darkness]: { id: 'db0a1b529a8f429f8ccb22b671e5dd81' },
  },

  [ArtifactType.Dagger]: {
    [ElementType.Darkness]: { id: '70ad2af8b40848ff865d5e6ab130a507' },
  },
} as ViewerData;

/**
 * The below carousel options, props and default values were taken from:
 * https://github.com/express-labs/pure-react-carousel#carouselprovider-
 */
export const carouselOptions: CarouselOptions = {
  naturalSlideWidth: 405,
  naturalSlideHeight: 514,
  visibleSlidesDefault: 3,

  // Does not offset slide index.
  visibleSlidesMobile: 1,

  // Offsets slide index by '1'.
  visibleSlidesDesktop: 3,
};

/**
 * NOTE: Just repeating the array of carousel data 'N' no. of times,
 * so as to create the illusion of an infinitely scrolling carousel.
 */
export const carouselData = ((repeat = 1) =>
  Array.from({ length: repeat }, () => [
    {
      type: ArtifactType.Hammer,
      picture: `${imgPath}/hammer.png`,
    },

    {
      type: ArtifactType.Shield,
      picture: `${imgPath}/shield.png`,
    },

    {
      type: ArtifactType.Sickle,
      picture: `${imgPath}/sickle.png`,
    },

    {
      type: ArtifactType.Axe,
      picture: `${imgPath}/axe.png`,
    },

    {
      type: ArtifactType.Claw,
      picture: `${imgPath}/claw.png`,
    },

    {
      type: ArtifactType.Dagger,
      picture: `${imgPath}/dagger.png`,
    },
  ]).flat())(carouselOptions.visibleSlidesDefault * 2).map(data => {
  return { ...data, id: uuidv4() };
});
