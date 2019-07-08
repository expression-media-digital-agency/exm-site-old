import React from 'react';
import { Router } from 'routes';

import { composeClasses } from '../../utils/generic';

import styles from './Button.scss';

export enum ButtonTypes {
  outline = 'outline',
  primary = 'primary',
}

export interface IButtonProps {
  className?: string;
  href?: string;
  htmlType?: string; // Type of button e.g. "submit", "reset", etc
  fullWidth?: boolean; // If the button should be full width
  loading?: boolean; // Loading indicator
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
  type?: ButtonTypes;
}

const Button: React.SFC<IButtonProps> = ({
  children
}) => {

  return (
    <button>{children}</button>
  );
};

export default Button;
