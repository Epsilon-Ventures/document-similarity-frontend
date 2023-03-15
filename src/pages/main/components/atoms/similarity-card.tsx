import { SubjectYearInfo } from 'components/atoms';
import ProgressBar from './progress-bar';
import styles from './similarity-card.module.css';

type SimilarityCardProps = {
  question: string;
  simScore: number;
  subject: string;
  year: string;
  sem: string;
};

function SimilarityCard({
  question,
  simScore,
  subject,
  year,
  sem,
}: SimilarityCardProps) {
  const { similarity } = styles;

  return (
    <div className={`rounded-xl ${similarity} flex flex-col gap-2`}>
      <div>
        <p className="text-body-large text-white">{question}</p>
        <ProgressBar progress={(simScore * 100).toFixed().toString()} />
      </div>
      <SubjectYearInfo subject={subject} year={year} sem={sem} />
    </div>
  );
}

export default SimilarityCard;
