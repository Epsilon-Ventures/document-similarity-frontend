import { Button, Textarea } from 'components/atoms';
import { useState } from 'react';
import { ResponseModel } from 'pages/models';
import styles from './index.module.css';

interface Props {
  setResponseList: React.Dispatch<React.SetStateAction<ResponseModel[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function QuestionInsertion({ setResponseList, setIsLoading }: Props) {
  const [question, setQuestion] = useState<string>('');

  const { main, shadow } = styles;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseList([]);

    try {
      const response = await fetch(
        'http://localhost:8000/api/database-connection/',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ question }),
        },
      );
      const dataResponse = await response.json();
      setResponseList(dataResponse);
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

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
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <Textarea setQuestion={setQuestion} placeholder="Enter question..." />
        <Button className="w-max px-3" type="submit">
          Check
        </Button>
      </form>
    </div>
  );
}

export default QuestionInsertion;
