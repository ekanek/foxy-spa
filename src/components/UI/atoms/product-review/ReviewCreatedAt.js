import Utilities from 'utils/Utility';
import styles from 'styles/atoms/ProductReviewCards.module.scss';
const ReviewCreatedAt = ({ createdAt = '' }) => {
  const reviewCreatedAt = Utilities.getTimeAgo(createdAt);
  return (
    <div className={styles['review-card__subtext']}>
      <div>{reviewCreatedAt}</div>
    </div>
  );
};

export default ReviewCreatedAt;
