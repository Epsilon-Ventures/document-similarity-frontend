/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import classes from './twoFileResponse.module.css';

interface TwoFile {
  file1: string[];
  file2: string[];
}
function TwoFileResponse() {
  const { state } = useLocation();
  const [fileResponses] = useState(
    state?.fileResponse ? state.fileResponse : '',
  );
  const [inputFiles, setInputFiles] = useState<TwoFile>(null);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:8000/api/two-file-upload/',
        );
        setInputFiles(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    getQuestions();
  }, []);

  const similarPercent = (similarity: number) => (similarity * 100).toFixed(2);

  return (
    <div className="flex flex-col gap-2">
      <div className={classes.section_two_file_response}>
        <div className={classes.two_file_container}>
          <div className="grid grid-cols-7 gap-2">
            <div className={`${classes.file_question_container} col-span-3`}>
              <h2>File1 Questions</h2>
              <div>
                {inputFiles
                  ? inputFiles.file1?.map((question, index) => (
                      <p key={index} className={classes.question_value}>
                        {question}
                      </p>
                    ))
                  : ''}
              </div>
            </div>

            <div className={classes.similarity_box}>
              <h2>Similarity Response</h2>
              <h1>{`${(fileResponses.overall_sim * 100).toFixed(2)}%`}</h1>
            </div>

            <div className={`${classes.file_question_container} col-span-3`}>
              <h2>File2 Questions</h2>
              <div>
                {inputFiles
                  ? inputFiles.file2?.map((question, index) => (
                      <p key={index} className={classes.question_value}>
                        {question}
                      </p>
                    ))
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.two_file_container}>
        <div
          className={`text-title-medium flex flex-col ${classes.file_question_container}`}
        >
          <div
            className={`grid grid-cols-5 gap-3 mb-1 py-2 font-semibold text-body-large ${classes.border}`}
          >
            <h2 className="col-span-2">Paper 1 Question</h2>
            <h2 className="col-span-2">Most Similar in Paper 2</h2>
            <h2>Similarity Score</h2>
          </div>
          {fileResponses.paper1_sim.map(
            ({ question, similar_question, similarity }, index: number) => (
              <div
                className={`grid grid-cols-5 gap-3 py-1 ${classes.border}`}
                key={index}
              >
                <p className="col-span-2 leading-10">{question}</p>
                <p className="col-span-2 leading-10">{similar_question}</p>
                <p className="justify-self-center">
                  {`${similarPercent(similarity)}%`}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default TwoFileResponse;
