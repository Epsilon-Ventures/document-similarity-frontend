import { PayloadModel } from 'pages/models';
import styles from './textarea.module.css';

type TextAreaProps = {
  placeholder: string;
  setPayload: React.Dispatch<React.SetStateAction<PayloadModel>>;
};

function TextArea({ placeholder, setPayload }: TextAreaProps) {
  const { textarea } = styles;
  const payloadSubmitHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPayload((previous) => ({
      ...previous,
      question: e.target.value,
    }));
  };

  return (
    <textarea
      onChange={payloadSubmitHandler}
      className={`resize-none border-2 border-light-grey rounded-2xl ${textarea}`}
      placeholder={placeholder}
      rows={20}
    />
  );
}

export default TextArea;
