import { useState } from 'react';
import { ResponseModel, PayloadModel } from 'pages/models';
import { postQuestionForSimilarity } from 'services/post-question';
import QuestionInsertion from './question-insertion';
import SimilarityAnalysis from './similarity-analysis';

function QuestionSimilarity() {
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
      const dataResponse = await postQuestionForSimilarity(payload);
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
        <div className="container grid grid-cols-2">
          <QuestionInsertion setPayload={setPayload} />
          <SimilarityAnalysis responseList={responseList} loading={loading} />
        </div>
      </form>
    </section>
  );
}

export default QuestionSimilarity;
