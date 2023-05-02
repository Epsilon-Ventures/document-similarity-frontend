import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SimilarityCard } from 'pages/main/components/atoms';
import { getFileQuestions } from 'services/upload-file';
import sortBySimScore from 'utils/question-response';

function FileResponse() {
  const { state } = useLocation();
  const [fileResponses] = useState(
    state?.fileResponse ? state.fileResponse : [],
  );
  const [inputQuestions, setInputQuestions] = useState<string[]>([]);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const data = await getFileQuestions();
        setInputQuestions(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    getQuestion();
  }, []);

  return (
    <div className="container grid grid-cols-5 gap-2">
      <div className="flex flex-col col-span-2 gap-2 p-2">
        <h3>Question</h3>
        <div className="flex flex-col gap-1">
          {inputQuestions.map((question, index) => (
            <p className="text-body-medium">{`${index + 1}. ${question}`}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col col-span-3 gap-3 p-2 h-[100vh] overflow-y-scroll ">
        {fileResponses.map((fileResponse) => (
          <div className="flex flex-col gap-[6px]">
            {sortBySimScore(fileResponse).map((response) => (
              <div>
                <SimilarityCard
                  question={response.question}
                  simScore={response.sim_score}
                  sem={response.sem}
                  year={response.year}
                  subject={response.subject}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileResponse;
