import styles from './styles.module.css';

type ZoomImageProps = {
  step: number
}

export const ZoomImage = ({ step }: ZoomImageProps) => {
  if (step > 5) {
    step = 5
  }

  return (
    <div className={styles.stepImageWrapper}>
      <img src={`/assets/images/demo/${step}.jpg`} alt="Step" />
    </div>
  );
}