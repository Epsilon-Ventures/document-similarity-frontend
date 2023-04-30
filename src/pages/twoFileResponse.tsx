import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import classes from './app.module.css';

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
  return (
    <div className={classes.section_two_file_response}>
      <div className={classes.two_file_container}>
        <div className={classes.file_question_container}>
          <h2>File1 Questions</h2>
          <div>
            {inputFiles
              ? inputFiles.file1?.map((question) => (
                <p className={classes.question_value}>{question}</p>
              ))
              : ''}
          </div>
        </div>

        <div className={classes.similarity_box}>
          <h2>Similarity Response</h2>
          <h1>{`${(fileResponses * 100).toFixed(2)}%`}</h1>
        </div>
        <div className={classes.file_question_container}>
          <h2>File2 Questions</h2>
          <div>
            {inputFiles
              ? inputFiles.file2?.map((question) => (
                <p className={classes.question_value}>{question}</p>
              ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFileResponse;
