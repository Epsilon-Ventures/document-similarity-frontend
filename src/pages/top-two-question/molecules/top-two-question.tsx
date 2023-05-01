import { useState } from 'react';
import { Button, Select } from 'components/atoms';
import { subject } from 'data/data.json';
import { useNavigate } from 'react-router-dom';
import { checkTwoFile } from 'services/upload-file';
import { TopTwoQuestionModel } from 'pages/models';
import styles from './top-two-question.module.css';

function TopTwoQuestion() {
  const navigate = useNavigate();
  const { shadow, paddingBlock } = styles;

  const [payload, setPayload] = useState<TopTwoQuestionModel>(
    null as TopTwoQuestionModel,
  );

  const fileChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement & HTMLInputElement>,
  ) => {
    if (e.target.files) {
      setPayload((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setPayload((prev) => ({ ...prev, subject: e.target.value }));
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    // setDisable(true);
    setPayload(null);

    try {
      const fileResponse = await checkTwoFile(payload);
      navigate('/top-two-question-response', {
        state: { fileResponse, selectSubject: payload.subject },
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    // setDisable(false);
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
        <Select
          id="subject"
          defaultValue="-- Select Subject --"
          optionList={subject}
          setPayload={setPayload}
        >
          Subject
        </Select>
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
          <span className="text-body-medium text-dark-grey">
            {payload?.file?.name}
          </span>
        </div>
        <Button
          type="submit"
          className="px-3 rounded-full text-title-medium"
          // disable={disable}
          // title={disable ? 'Please select a file' : 'Upload file'}
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

export default TopTwoQuestion;
