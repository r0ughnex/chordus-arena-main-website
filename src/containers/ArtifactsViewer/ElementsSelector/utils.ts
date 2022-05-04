import { ElementType } from '../types';
import styles from './ElementsSelector.module.scss';

export function getSelectorElementClassName(elemType: ElementType) {
  switch (elemType) {
    case ElementType.Neutral: {
      return styles.SelectorElementNeutral;
    }

    case ElementType.Poison: {
      return styles.SelectorElementPoison;
    }

    case ElementType.Fire: {
      return styles.SelectorElementFire;
    }

    case ElementType.Frost: {
      return styles.SelectorElementFrost;
    }

    case ElementType.Light: {
      return styles.SelectorElementLight;
    }

    case ElementType.Darkness: {
      return styles.SelectorElementDarkness;
    }

    default: {
      return styles.SelectorElement;
    }
  }
}
