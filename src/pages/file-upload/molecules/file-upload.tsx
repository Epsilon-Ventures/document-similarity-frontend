import { useState } from 'react';
import { Button } from 'components/atoms';
import { useNavigate } from 'react-router-dom';
import uploadFile from 'services/upload-file';
import styles from './file-upload.module.css';

function FileUpload() {
  const [file, setFile] = useState<File>(null);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const { shadow, paddingBlock } = styles;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setDisable(false);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisable(true);
    setFile(null);

    try {
      const fileResponse = await uploadFile(file);
      // eslint-disable-next-line no-console
      console.log('file response - ', fileResponse);
      navigate('/file-response', { state: { fileResponse } });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-4 mx-auto mt-6 items-center justify-center">
      <form
        onSubmit={submitHandler}
        className={`flex flex-col items-center w-[32%] gap-4 rounded-3xl ${shadow} ${paddingBlock}`}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-headline-medium">Upload Your question</h2>
          <span className="text-body-medium text-grey font-medium">
            File should be in .txt format
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <label
            htmlFor="file"
            className="border-source-primary rounded-full cursor-pointer text-body-large text-source-primary
          border-2 border-solid px-2 py-[.6rem]"
          >
            Choose File
            <input
              type="file"
              id="file"
              accept=".txt"
              onChange={fileChangeHandler}
              hidden
            />
          </label>
          <span className="text-body-medium text-dark-grey">{file?.name}</span>
        </div>
        <Button
          type="submit"
          className="px-3 rounded-full text-title-medium"
          disable={disable}
          title={disable ? 'Please select a file' : 'Upload file'}
        >
          Submit File
        </Button>
      </form>

      <Button
        className="bg-none border-source-primary border-2 px-3"
        // eslint-disable-next-line react/style-prop-object
        style={{ color: 'rgb(99 56 238)' }}
        onClick={() => navigate('/')}
      >
        Back
      </Button>
    </div>
  );
}

export default FileUpload;
