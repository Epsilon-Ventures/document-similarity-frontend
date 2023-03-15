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
        console.log(error);
      }
    };

    getQuestion();
  }, []);

  return (
    <div className="container grid grid-cols-12 gap-2">
      <div className="flex flex-col gap-2 col-span-4 p-2">
        <h3>Question</h3>
        <div className="flex flex-col gap-1">
          {inputQuestions.map((question, index) => (
            <p className="text-body-medium">{`${index + 1}. ${question}`}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 col-span-5 p-2 h-[100vh] overflow-y-scroll ">
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
      <div className="col-span-3 p-2 flex flex-col gap-6">
        <h3>Analysis</h3>
        <p className="text-center text-headline-large">
          <span>Under</span>
          <br />
          <span>Construction</span>
        </p>
      </div>
    </div>
  );
}

export default FileResponse;
