import styles from './loading-spinner.module.css';

function LoadingSpinner() {
  const { spinner, cover } = styles;

  return (
    <div className="relative h-5 w-5">
      <div className={` h-full w-full rounded-full ${spinner}`} />
      <div
        className={`absolute h-[calc(100%-1.6rem)] w-[calc(100%-1.6rem)] rounded-full bg-white ${cover}`}
      />
    </div>
  );
}

export default LoadingSpinner;
