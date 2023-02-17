import { PropsWithChildren } from 'react';
import styles from './select.module.css';

type SelectProps = {
  id: string;
  defaultValue: string;
  optionList: string[];
};

function Select({
  children,
  id,
  defaultValue,
  optionList,
}: PropsWithChildren<SelectProps>) {
  const { select } = styles;

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-headline-small text-source-primary cursor-pointer"
      >
        {children}
      </label>
      <select
        name={id}
        id={id}
        className={`border-light-grey rounded-lg ${select} bg-white border-2 cursor-pointer text-title-medium`}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {optionList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
