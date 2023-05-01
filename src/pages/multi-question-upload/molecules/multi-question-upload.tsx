import { Button, Select } from 'components/atoms';
import { useState } from 'react';
import { addQuestionToDatabase } from 'services/post-question';
import { MultiQuestionUploadProps, PaperMetaDataModel } from 'pages/models';
import { subject, year, sem } from 'data/data.json';
import styles from './multi-question-upload.module.css';

function MultiQuestionUpload() {
  const { input } = styles;
  const [formValues, setFormValues] = useState<MultiQuestionUploadProps[]>([
    {
      id: 0,
      question: '',
      mark: '',
    },
  ]);

  const [constPayload, setConstPayload] = useState<PaperMetaDataModel>({
    subject: '',
    year: '',
    sem: '',
  });

  const valueChangeHandler = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newFormValues = [...formValues];

    const updatedFormValues = newFormValues.map((formValue) => {
      if (formValue.id === index) {
        return {
          ...formValue,
          [e.target.name]: e.target.value,
        };
      }
      return formValue;
    });

    setFormValues(updatedFormValues);
  };

  const addFieldHandler = () => {
    setFormValues((prev) => [
      ...prev,
      { id: prev.length, question: '', mark: '' },
    ]);
  };

  const removeFieldHandler = (index: number) => {
    const newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addQuestionToDatabase({
        ...constPayload,
        payload: formValues,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mx-auto mt-3 items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-center"
      >
        <div className="flex flex-col gap-2">
          <Select
            id="subject"
            defaultValue="-- Select Subject --"
            optionList={subject}
            setPayload={setConstPayload}
            required
          >
            Subject
          </Select>

          <Select
            id="year"
            defaultValue="-- Select Year --"
            optionList={year}
            setPayload={setConstPayload}
            required
          >
            Subject
          </Select>

          <Select
            id="sem"
            defaultValue="-- Select Semester --"
            optionList={sem}
            setPayload={setConstPayload}
            required
          >
            Subject
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            {formValues.map((formValue, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="grid grid-cols-4 gap-2" key={index}>
                <label
                  htmlFor={`question-${index}`}
                  className="flex gap-1 items-center col-span-2"
                >
                  <span className="text-title-small">Question</span>
                  <input
                    type="text"
                    name="question"
                    id={`question-${index}`}
                    value={formValue.question}
                    onChange={(e) => valueChangeHandler(index, e)}
                    className={`w-full ${input} rounded-lg outline-light-grey text-title-medium`}
                  />
                </label>

                <label
                  htmlFor={`mark-${index}`}
                  className="flex gap-1 items-center"
                >
                  <span className="text-title-small">Mark</span>
                  <input
                    type="text"
                    name="mark"
                    id={`mark-${index}`}
                    value={formValue.mark}
                    onChange={(e) => valueChangeHandler(index, e)}
                    className={`w-full ${input} rounded-lg outline-light-grey text-title-medium`}
                  />
                </label>
                {index !== 0 && (
                  <Button
                    type="button"
                    onClick={() => removeFieldHandler(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-1 self-center">
            <Button type="button" onClick={addFieldHandler}>
              Add
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MultiQuestionUpload;
