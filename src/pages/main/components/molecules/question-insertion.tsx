import { Button, Select, Textarea } from 'components/atoms';
import { PayloadModel } from 'pages/models';
import { useNavigate } from 'react-router-dom';
import { subject } from 'data/data.json';
import styles from './index.module.css';

interface Props {
  setPayload: React.Dispatch<React.SetStateAction<PayloadModel>>;
}

function QuestionInsertion({ setPayload }: Props) {
  const navigate = useNavigate();
  const { main, shadow } = styles;

  return (
    <div className={`flex flex-col gap-3 border-r-4 ${main} ${shadow}`}>
      <div className="headline flex justify-between items-center">
        <h1 className="text-source-primary text-headline-medium font-semibold ">
          Question Similarity Detection
        </h1>

        <Button
          className="bg-none text-title-medium"
          // eslint-disable-next-line react/style-prop-object
          style={{ color: 'rgb(99 56 238)', border: '2px solid' }}
          onClick={() => navigate('/file-upload')}
        >
          Upload Files
        </Button>
      </div>
      <Select
        id="subject"
        defaultValue="-- Select Subject --"
        optionList={subject}
        setPayload={setPayload}
      >
        Subject
      </Select>
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
