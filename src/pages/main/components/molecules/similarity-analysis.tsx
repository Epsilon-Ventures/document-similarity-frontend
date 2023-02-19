import { ResponseModel } from 'pages/models';
import { SimilarityCard } from '../atoms';
import styles from './parameters.module.css';

interface Props {
  responseList: ResponseModel[];
}

function SimilarityAnalysis({ responseList }: Props) {
  const { parameters } = styles;

  return (
    <div className={`flex flex-col gap-3 ${parameters}`}>
      <h2>Similarity Analysis</h2>
      <div className="flex flex-col gap-1">
        {responseList.map(({ question, sim_score: simScore, id }) => (
          <SimilarityCard
            key={id.toString()}
            question={question}
            simScore={simScore}
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarityAnalysis;
