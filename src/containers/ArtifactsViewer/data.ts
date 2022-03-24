/**
 * The viewer options and default values were taken from:
 * https://sketchfab.com/developers/viewer/initialization
 */
export const viewerOptions = {
  dnt: 1,
  camera: 0,
  autospin: 0,
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

export enum ArtifactType {
  Shield = 'shield',
}

export enum ElementType {
  Neutral = 'neutral',
  Poison = 'poison',
  Fire = 'fire',
  Frost = 'frost',
  Light = 'light',
  Darkness = 'darkness',
}

export const viewerData = {
  [ArtifactType.Shield]: {
    [ElementType.Neutral]: {
      id: 'a8a42d153b284543824efdd45ad05056',
    },

    [ElementType.Poison]: {
      id: '06c3ff2c4f3344c284490cb4f0ba90ac',
    },

    [ElementType.Fire]: {
      id: '8e33790459984f6498a6e82eb855e289',
    },

    [ElementType.Frost]: {
      id: 'f133a8619e66473d9d18577dfb46cec0',
    },

    [ElementType.Light]: {
      id: 'e7e47e56bff9490ab6ac27ecb9c00aa7',
    },

    [ElementType.Darkness]: {
      id: 'bc4bba1a9c6343128608a013114b8aeb',
    },
  },
};

export const artifactsShield = Object.values(
  viewerData[ArtifactType.Shield],
).map(({ id }) => id);
