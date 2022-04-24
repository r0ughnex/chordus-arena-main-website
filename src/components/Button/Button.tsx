import classNames from 'classnames';
import { ReactNode } from 'react';

import { ButtonSize, ButtonType, LinkTarget } from './types';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  href?: string;
  type?: ButtonType;
  size?: ButtonSize;
  target?: LinkTarget;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({
  href,
  type,
  size,
  target,
  disabled,
  className,
  children,
  onClick,
}: ButtonProps) {
  const onButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonElemProps = {
    className: classNames(getButtonClassName(type, size), className),
    onClick: !disabled ? onButtonClick : undefined,
    disabled,
  };

  return (
    <>
      {!href && (
        <button {...buttonElemProps}>
          <span>{children}</span>
        </button>
      )}

      {href && (
        <a
          {...buttonElemProps}
          href={!disabled ? href : undefined}
          target={!disabled ? target : undefined}
          rel={!disabled && target ? 'noopener noreferrer' : undefined}
        >
          <span>{children}</span>
        </a>
      )}
    </>
  );
}

export default Button;
