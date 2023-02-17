import ProgressBar from './progress-bar';
import styles from './similarity-card.module.css';

type SimilarityCardProps = {
  question: string;
  simScore: number;
};

function SimilarityCard({ question, simScore }: SimilarityCardProps) {
  const { similarity } = styles;

  return (
    <div className={`rounded-xl ${similarity}`}>
      <p className="text-body-medium text-white">{question}</p>
      <ProgressBar progress={(simScore * 100).toString()} />
    </div>
  );
}

export default SimilarityCard;
