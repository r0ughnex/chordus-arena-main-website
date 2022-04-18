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
    [ElementType.Neutral]: { id: 'b54078efaa2f466f8d9182a7fa429d6e' },
    [ElementType.Poison]: { id: '73656bd3e6774b0fa8cc17821d6ec5ee' },
    [ElementType.Fire]: { id: '7921620f1a774766b33b8f54011b99a2' },
    [ElementType.Frost]: { id: 'fb48251bc2fe419db1c96abb6df8f486' },
    [ElementType.Light]: { id: 'aaabf6209f4c487aa9250e0b3ac79edc' },
    [ElementType.Darkness]: { id: 'bc4bba1a9c6343128608a013114b8aeb' },
  },

  [ArtifactType.Shield]: {
    [ElementType.Neutral]: { id: 'a8a42d153b284543824efdd45ad05056' },
    [ElementType.Poison]: { id: '06c3ff2c4f3344c284490cb4f0ba90ac' },
    [ElementType.Fire]: { id: '8e33790459984f6498a6e82eb855e289' },
    [ElementType.Frost]: { id: 'f133a8619e66473d9d18577dfb46cec0' },
    [ElementType.Light]: { id: 'e7e47e56bff9490ab6ac27ecb9c00aa7' },
    [ElementType.Darkness]: { id: 'bc4bba1a9c6343128608a013114b8aeb' },
  },

  [ArtifactType.Sickle]: {
    [ElementType.Neutral]: { id: '93db67c9c16d47a08cb357c3ad9687a5' },
    [ElementType.Poison]: { id: '2f41c98ad72949fda26db2ee15e193a4' },
    [ElementType.Fire]: { id: '4e1544c03d1e4c2a9c6d094e169403ee' },
    [ElementType.Frost]: { id: 'aac4c62c66d5420b900c24c9a336c533' },
    [ElementType.Light]: { id: '92272fb2bdc24b15bc687a7b933b5319' },
    [ElementType.Darkness]: { id: '699eb5837d28468abb6d4de3ba9a0b35' },
  },

  [ArtifactType.Axe]: {
    [ElementType.Neutral]: { id: '09a782bd9caf409e84b6c37be8e783a8' },
    [ElementType.Poison]: { id: 'd648aa23e6af4b56bc41d176a4626c2b' },
    [ElementType.Fire]: { id: '2eac37decef345638a613dc74a7f28e6' },
    [ElementType.Frost]: { id: '80f2503d8b6946618bd47bf5333a7eb9' },
    [ElementType.Light]: { id: '4862bebe17ff4cd99d2bcdb822a54d37' },
    [ElementType.Darkness]: { id: '0a513467cff243838ed0fd378afbc434' },
  },

  [ArtifactType.Claw]: {
    [ElementType.Neutral]: { id: '1b9f3f29e80543c4a16664bfbeb7c84f' },
    [ElementType.Poison]: { id: '5c583652a31645278e8cb4ac16e9dcfb' },
    [ElementType.Fire]: { id: 'e13bac7131af42adb98ca94758345eae' },
    [ElementType.Frost]: { id: '62d962b0740d43b5bcb9ca3741f4bc23' },
    [ElementType.Light]: { id: '224380fdf8ab4b668d75a1e90d31473b' },
    [ElementType.Darkness]: { id: 'db0a1b529a8f429f8ccb22b671e5dd81' },
  },

  [ArtifactType.Dagger]: {
    [ElementType.Neutral]: { id: '6ad74a2adebb46be9d9a0ba205b0e510' },
    [ElementType.Poison]: { id: '3ab51cbfb4ba436d8144025947ac6de6' },
    [ElementType.Fire]: { id: 'e90b0f546ea54970b1984b907f748b28' },
    [ElementType.Frost]: { id: 'af2b7a95f8d44a808d888aaa2791284f' },
    [ElementType.Light]: { id: 'a9076b1f3c6646498f6970be57b5c955' },
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
