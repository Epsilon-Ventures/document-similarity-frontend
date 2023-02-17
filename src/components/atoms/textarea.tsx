import styles from './textarea.module.css';

type TextAreaProps = {
  placeholder: string;
};

function TextArea({ placeholder }: TextAreaProps) {
  const { textarea } = styles;

  return (
    <textarea
      className={`resize-none border-2 border-light-grey rounded-2xl ${textarea}`}
      placeholder={placeholder}
      rows={25}
    />
  );
}

export default TextArea;
