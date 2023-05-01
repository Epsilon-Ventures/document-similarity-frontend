import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import classes from './top-two-question-response.module.css';

interface QuestionInterface {
  question: string[];
}

function TopTwoQuestionResponse() {
  const { state } = useLocation();
  const [fileResponses] = useState(
    state?.fileResponse ? state.fileResponse : '',
  );
  const [inputFiles, setInputFiles] = useState<QuestionInterface>(null);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:8000/api/top-two-file/',
        );
        setInputFiles(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    getQuestions();
  }, []);

  return (
    <div className={classes.top_two_question_section}>
      <div className={classes.container}>
        <h2 className="mb-2 text-source-primary">
          {state.selectSubject.toUpperCase()}
        </h2>
        <div className="flex flex-col gap-2">
          {/* eslint-disable-next-line operator-linebreak */}
          {inputFiles !== null &&
            fileResponses.map((responses, index) => (
              <div className={classes.question_card} key={nanoid()}>
                <h3 className={classes.my_question}>{inputFiles[index]}</h3>
                <div className={classes.response_question_card}>
                  {responses.map((response) => (
                    <div className="grid grid-cols-6 items-center gap-2 ">
                      <p className="col-span-5 leading-10 ">
                        {response.question}
                      </p>
                      <p className="justify-self-end text-[2rem] text-source-primary">
                        {response.sim_score}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopTwoQuestionResponse;
