import { Button, Textarea } from 'components/atoms';
import { PayloadModel } from 'pages/models';
import styles from './index.module.css';

interface Props {
  setPayload: React.Dispatch<React.SetStateAction<PayloadModel>>;
}

function QuestionInsertion({ setPayload }: Props) {
  const { main, shadow } = styles;

  return (
    <div
      className={`flex flex-col gap-3 border-r-4 col-span-3 ${main} ${shadow}`}
    >
      <div className="headline flex justify-between items-center">
        <h1 className="text-source-primary text-headline-medium font-semibold ">
          Question Similarity Detection
        </h1>
        <Button className="bg-none text-black border-source-primary border-2 text-title-medium">
          Load Model
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Textarea setPayload={setPayload} placeholder="Enter question..." />
        <Button className="w-max px-3" type="submit">
          Check
        </Button>
      </div>
    </div>
  );
}

export default QuestionInsertion;
