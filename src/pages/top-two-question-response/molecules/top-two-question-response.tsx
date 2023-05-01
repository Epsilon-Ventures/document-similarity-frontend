import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import styles from './top-two-question-response.module.css';

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
    <div className={`${styles.file_question_container}`}>
      <h2>{state.selectSubject}</h2>
      <div className="flex flex-col gap-2">
        {/* eslint-disable-next-line operator-linebreak */}
        {inputFiles !== null &&
          fileResponses.map((responses, index) => (
            <div key={nanoid()}>
              <h3>{inputFiles[index]}</h3>
              <div className="flex flex-col gap-1">
                {responses.map((response) => (
                  <div className="grid grid-cols-6">
                    <p>{response.question}</p>
                    <p>{response.sim_score}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TopTwoQuestionResponse;
