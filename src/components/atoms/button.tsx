import { PropsWithChildren } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

function Button({
  children,
  type,
  className = '',
}: PropsWithChildren<ButtonProps>) {
  const { button } = styles;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className={`${button} rounded-full border-0 cursor-pointer text-white font-semibold ${className}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
