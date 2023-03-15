import styles from './progress-bar.module.css';

type ProgressBarProps = {
  progress: string;
};

function ProgressBar({ progress }: ProgressBarProps) {
  const { margin } = styles;
  const progressValue = `${progress}%`;
  return (
    <div
      className="flex items-center gap-1 justify-between"
      style={{ transform: 'translateX(-1px)' }}
    >
      <div className="p-[3px] w-full rounded-full bg-light-grey">
        <div
          className=" h-[0.8rem] rounded-full bg-source-primary"
          style={{ width: progressValue }}
        />
      </div>
      <span className={`text-white text-body-large font-bold mr-1 ${margin}`}>
        {progressValue}
      </span>
    </div>
  );
}

export default ProgressBar;
