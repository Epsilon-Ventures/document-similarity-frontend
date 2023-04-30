import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h2>twoFIleResponse</h2>
      <h1>{fileResponses}</h1>
      <div className="file1">
        <h2>File1 Questions</h2>
        <div>
          {inputFiles
            ? inputFiles.file1?.map((question) => <p>{question}</p>)
            : ''}
        </div>
      </div>
      <div className="file1">
        <h2>File2 Questions</h2>
        <div>
          {inputFiles
            ? inputFiles.file2?.map((question) => <p>{question}</p>)
            : ''}
        </div>
      </div>
    </div>
  );
}

export default TwoFileResponse;
