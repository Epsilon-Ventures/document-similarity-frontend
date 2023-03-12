import { PropsWithChildren } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: object;
  onClick?: () => void;
  disable?: boolean;
  title?: string;
};

function Button({
  children,
  type,
  className = '',
  style,
  onClick,
  disable,
  title,
}: PropsWithChildren<ButtonProps>) {
  const { button } = styles;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className={`${button} rounded-full border-0 cursor-pointer text-white font-semibold ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      disabled={disable}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
  style: {},
  onClick: () => {},
  disable: false,
  title: '',
};

export default Button;
