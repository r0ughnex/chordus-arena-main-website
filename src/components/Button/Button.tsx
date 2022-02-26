import classNames from 'classnames';
import { ReactNode } from 'react';

import { ButtonType } from './types';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({ type, disabled, className, children, onClick }: ButtonProps) {
  const onButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onButtonClick : undefined}
      className={classNames(getButtonClassName(type), className)}
    >
      {children}
    </button>
  );
}

export default Button;
