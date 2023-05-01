import styles from './subject-year-info.module.css';

type SubjectYearInfoProps = {
  subject: string;
  year: string;
  sem: string;
};

function SubjectYearInfo({ subject, year, sem }: SubjectYearInfoProps) {
  const { card } = styles;

  return (
    <div className={`flex gap-3 text-body-large text-white ${card}`}>
      <div>
        <p>Subject: </p>
        <p>Year:</p>
      </div>
      <div>
        <p>{subject}</p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {year},{sem}
        </p>
      </div>
    </div>
  );
}

export default SubjectYearInfo;
