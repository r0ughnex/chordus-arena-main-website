import { CarouselOptions } from './types';

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
