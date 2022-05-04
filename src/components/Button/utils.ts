import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from './types';

export function getButtonClassName(type?: ButtonType, size?: ButtonSize) {
  let className = '';

  switch (type) {
    case ButtonType.Alternate: {
      className = classNames(className, styles.ButtonAlternate);
      break;
    }

    case ButtonType.Secondary: {
      className = classNames(className, styles.ButtonSecondary);
      break;
    }

    default: {
      className = classNames(className, styles.ButtonPrimary);
      break;
    }
  }

  switch (size) {
    case ButtonSize.Small: {
      className = classNames(className, styles.ButtonSmall);
      break;
    }

    default: {
      className = classNames(className, styles.ButtonDefault);
      break;
    }
  }

  return className;
}
