import styles from './textarea.module.css';

type TextAreaProps = {
  placeholder: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
};

function TextArea({ placeholder, setQuestion }: TextAreaProps) {
  const { textarea } = styles;

  return (
    <textarea
      onChange={(e) => setQuestion(e.target.value)}
      className={`resize-none border-2 border-light-grey rounded-2xl ${textarea}`}
      placeholder={placeholder}
      rows={25}
    />
  );
}

export default TextArea;
