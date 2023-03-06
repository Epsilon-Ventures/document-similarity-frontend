import { useState } from 'react';
import { ResponseModel, PayloadModel } from 'pages/models';
import Parameters from './parameters';
import QuestionInsertion from './question-insertion';
import SimilarityAnalysis from './similarity-analysis';

function QuestionSimilarity() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'localhost:8000';
  const [responseList, setResponseList] = useState<ResponseModel[]>([]);
  const [loading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState<PayloadModel>({
    question: '',
    subject: '',
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseList([]);

    try {
      const response = await fetch(`${BASE_URL}/api/database-connection/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const dataResponse = await response.json();
      setResponseList(dataResponse);
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <section className="h-[calc(100vh-6.4rem)]">
      <form onSubmit={submitHandler}>
        <div className="container grid grid-cols-8">
          <Parameters setPayload={setPayload} />
          <QuestionInsertion setPayload={setPayload} />
          <SimilarityAnalysis responseList={responseList} loading={loading} />
        </div>
      </form>
    </section>
  );
}

export default QuestionSimilarity;
