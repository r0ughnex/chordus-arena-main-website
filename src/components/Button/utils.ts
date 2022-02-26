import styles from './Button.module.scss';
import { ButtonType } from './types';

export function getButtonClassName(type?: ButtonType) {
  switch (type) {
    case ButtonType.Secondary: {
      return styles.ButtonSecondary;
    }

    default: {
      return styles.ButtonPrimary;
    }
  }
}
