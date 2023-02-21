import { useState } from 'react';
import { ResponseModel } from 'pages/models';
import Parameters from './parameters';
import QuestionInsertion from './question-insertion';
import SimilarityAnalysis from './similarity-analysis';

function QuestionSimilarity() {
  const [responseList, setResponseList] = useState<ResponseModel[]>([]);
  const [loading, setIsLoading] = useState(false);

  return (
    <section className="h-[calc(100vh-6.4rem)]">
      <div className="container grid grid-cols-8">
        <Parameters />
        <QuestionInsertion
          setResponseList={setResponseList}
          setIsLoading={setIsLoading}
        />
        <SimilarityAnalysis responseList={responseList} loading={loading} />
      </div>
    </section>
  );
}

export default QuestionSimilarity;
