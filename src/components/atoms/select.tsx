/* eslint-disable @typescript-eslint/indent */
import {
  PaperMetaDataModel,
  PayloadModel,
  TopTwoQuestionModel,
} from 'pages/models';
import { PropsWithChildren } from 'react';
import styles from './select.module.css';

type SelectProps = {
  id: string;
  defaultValue: string;
  optionList: string[];
  required?: boolean;
  setPayload?: React.Dispatch<
    React.SetStateAction<
      PayloadModel | TopTwoQuestionModel | PaperMetaDataModel
    >
  >;
};

function Select({
  children,
  id,
  defaultValue,
  optionList,
  required,
  setPayload = () => {},
}: PropsWithChildren<SelectProps>) {
  const { select } = styles;
  const payloadSubmitHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayload((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

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
        onChange={payloadSubmitHandler}
        required={required}
      >
        <option value="">{defaultValue}</option>
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

Select.defaultProps = {
  setPayload: () => {},
  required: false,
};
