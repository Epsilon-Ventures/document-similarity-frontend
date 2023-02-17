import { Button, Textarea } from 'components/atoms';
import styles from './index.module.css';

function QuestionInsertion() {
  const { main, shadow } = styles;

  return (
    <div
      className={`flex flex-col gap-3 border-r-4 col-span-2 ${main} ${shadow}`}
    >
      <div className="headline flex justify-between items-center">
        <h1 className="text-source-primary text-headline-medium font-semibold ">
          Question Similarity Detection
        </h1>
        <Button className="bg-none text-black border-source-primary border-2 text-title-medium">
          Load Model
        </Button>
      </div>
      <form className="flex flex-col gap-2">
        <Textarea placeholder="Enter question..." />
        <Button className="w-max px-3" type="submit">
          Check
        </Button>
      </form>
    </div>
  );
}

export default QuestionInsertion;
