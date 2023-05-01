import { LoadingSpinner } from 'components/atoms';
import { ResponseModel } from 'pages/models';
import sortBySimScore from 'utils/question-response';
import { SimilarityCard } from '../atoms';
import styles from './parameters.module.css';

interface Props {
  responseList: ResponseModel[];
  loading: boolean;
}

function SimilarityAnalysis({ responseList, loading }: Props) {
  const { parameters } = styles;

  return (
    <div className={`flex flex-col gap-3 ${parameters}`}>
      <h2>Similarity Analysis</h2>
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {sortBySimScore(responseList).map(
            // eslint-disable-next-line object-curly-newline
            ({ question, sim_score: simScore, id, subject, year, sem }) => (
              <SimilarityCard
                key={id}
                question={question}
                simScore={simScore}
                subject={subject}
                year={year}
                sem={sem}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default SimilarityAnalysis;
