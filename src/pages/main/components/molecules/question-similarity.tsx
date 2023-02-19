import { useState } from 'react';
import { ResponseModel } from 'pages/models';
import Parameters from './parameters';
import QuestionInsertion from './question-insertion';
import SimilarityAnalysis from './similarity-analysis';

function QuestionSimilarity() {
  const [responseList, setResponseList] = useState<ResponseModel[]>([]);

  return (
    <section className="h-[calc(100vh-6.4rem)]">
      <div className="container grid grid-cols-4">
        <Parameters />
        <QuestionInsertion setResponseList={setResponseList} />
        <SimilarityAnalysis responseList={responseList} />
      </div>
    </section>
  );
}

export default QuestionSimilarity;
