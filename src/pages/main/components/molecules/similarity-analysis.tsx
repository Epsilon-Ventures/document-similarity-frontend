import { SimilarityCard } from '../atoms';
import { questions } from '../../../../data.json';
import styles from './parameters.module.css';

function SimilarityAnalysis() {
  const { parameters } = styles;
  return (
    <div className={`flex flex-col gap-3 ${parameters}`}>
      <h2>Similarity Analysis</h2>
      <div className="flex flex-col gap-1">
        {questions.map(({ question, simScore }) => (
          <SimilarityCard
            key={question}
            question={question}
            simScore={+simScore}
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarityAnalysis;
