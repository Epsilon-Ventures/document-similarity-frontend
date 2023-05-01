import React, { useState } from 'react';
import { Button } from 'components/atoms';
import { uploadTwoFile } from 'services/upload-file';
import { useNavigate } from 'react-router-dom';
import classes from './app.module.css';

interface TwoFile {
  file1: File;
  file2: File;
}

function TwoFileUpload() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<TwoFile>(null);
  const [similarityValue, setSimilarityValue] = useState<number>();

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => ({ ...prev, [e.target.id]: e.target.files[0] }));

      // setDisable(false);
      //   console.log(files);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    // setDisable(true);
    setFiles(null);
    try {
      const fileResponse = await uploadTwoFile(files);
      // eslint-disable-next-line no-console
      setSimilarityValue(fileResponse.overall_sim);
      navigate('/two-file-response', {
        state: { fileResponse },
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    // setDisable(false);
  };

  return (
    <div className={classes.section_twofile}>
      <form className={classes.container} onSubmit={submitHandler}>
        <div className={classes.heading_div}>
          <h2 className="text-headline-medium">Upload Your question</h2>
          <span className="text-body-medium text-grey font-medium">
            File should be in .txt format
          </span>
        </div>
        <div className={classes.file_name_div}>
          <label
            htmlFor="file1"
            className="border-source-primary rounded-full cursor-pointer text-body-large text-source-primary
              border-2 border-solid px-2 py-[.6rem]"
          >
            Choose File 1
            <input
              type="file"
              id="file1"
              accept=".txt"
              onChange={fileChangeHandler}
              hidden
            />
          </label>
          <span className="text-body-medium text-dark-grey">
            {files?.file1?.name}
          </span>
        </div>
        <div className={classes.file_name_div}>
          <label
            htmlFor="file2"
            className="border-source-primary rounded-full cursor-pointer text-body-large text-source-primary
              border-2 border-solid px-2 py-[.6rem]"
          >
            Choose File 2
            <input
              type="file"
              id="file2"
              accept=".txt"
              onChange={fileChangeHandler}
              hidden
            />
          </label>
          <span className="text-body-medium text-dark-grey">
            {files?.file2?.name}
          </span>
        </div>
        <Button type="submit">Submit File</Button>
      </form>

      {similarityValue ? <p>{similarityValue}</p> : ''}

      <Button
        className="bg-none px-3"
        // eslint-disable-next-line react/style-prop-object
        style={{ color: 'rgb(99 56 238)', border: '2px solid' }}
      >
        Back
      </Button>
    </div>
  );
}

export default TwoFileUpload;
