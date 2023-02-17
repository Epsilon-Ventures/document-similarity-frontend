import Parameters from './parameters';
import QuestionInsertion from './question-insertion';
import SimilarityAnalysis from './similarity-analysis';

function QuestionSimilarity() {
  return (
    <section className="h-[calc(100vh-6.4rem)]">
      <div className="container grid grid-cols-4">
        <Parameters />
        <QuestionInsertion />
        <SimilarityAnalysis />
      </div>
    </section>
  );
}

export default QuestionSimilarity;
