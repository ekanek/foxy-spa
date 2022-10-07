import styles from 'styles/Recommendation.module.scss';
import images from 'assets/images';
const ReviewContext = ({ rating = '' }) => {
  return (
    <div className={styles['review-context-container']}>
      <div className={styles['review-sub-container']}>
        <div className={styles['review-context-line']}>
          <div>
            <img alt="Star" src={images.match_star_image} height={15} width={15} />
          </div>
          <div className={styles['review-context-text']}>
            <span className={styles['bold-text']}>Very Good</span> Rating of {rating}
          </div>
        </div>
        <div className={styles['review-context-line']}>
          <div>
            <img alt="Play Button" src={images.match_play_image} height={15} width={15} />
          </div>
          <div className={styles['review-context-text']}>
            <span className={styles['bold-text']}>5 honest reviews</span> with Outstanding comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContext;
