import classNames from 'classnames';
import { ReactNode } from 'react';

import { ButtonType } from './types';
import { getButtonClassName } from './utils';

export enum LinkTarget {
  Blank = '_blank',
}

export interface ButtonProps {
  href?: string;
  type?: ButtonType;
  target?: LinkTarget;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({
  href,
  type,
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
    className: classNames(getButtonClassName(type), className),
    onClick: !disabled ? onButtonClick : undefined,
    disabled,
  };

  return (
    <>
      {!href && <button {...buttonElemProps}>{children}</button>}

      {href && (
        <a
          {...buttonElemProps}
          href={!disabled ? href : undefined}
          target={!disabled ? target : undefined}
          rel={!disabled && target ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )}
    </>
  );
}

export default Button;
