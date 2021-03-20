import React from 'react';

/**
 * Default button style
 */
const css = 'text-white font-bold m2'
const brand = 'bg-blue-800';
const secondary = 'bg-gray-500';
/**
 * All possible button sizes
 */
export enum ButtonSizes  {
  FULL = 'FULL',
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
};
/**
 * Lookup table
 */
const sizes = {
  FULL: 'w-full h-12 px-6 text-lg',
  LARGE: 'h-12 px-6 text-lg',
  MEDIUM: 'h-10 px-5',
  SMALL:  'h-8 px-4 text-sm',
}
/**
 * Button
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = ButtonSizes.MEDIUM,
  color = undefined,
  label,
  ...props
}) => {
  // button bg color setting
  const mode = primary ? brand : color ? color : secondary;
  return (
    <button
      type="button"
      className={[css, `${sizes[size]}`,  mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
/**
 * New button properties
 */
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Override default color
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSizes;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
