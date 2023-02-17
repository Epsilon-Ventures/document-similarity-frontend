import { PropsWithChildren } from 'react';

type InputProps = {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
  id: string;
};

function Input({ children, type, id }: PropsWithChildren<InputProps>) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type || 'text'} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
