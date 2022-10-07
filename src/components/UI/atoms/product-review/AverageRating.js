import styles from 'styles/atoms/ProductReviewCards.module.scss';
import images from 'assets/images';
const AverageRating = ({ ratings = '?' }) => {
  let ratingStyle = '';
  if (ratings === 1) {
    ratingStyle = 'rating1';
  } else if (ratings <= 2 && ratings > 1) {
    ratingStyle = 'rating2';
  } else if (ratings <= 3 && ratings > 2) {
    ratingStyle = 'rating3';
  } else if (ratings <= 4 && ratings > 3) {
    ratingStyle = 'rating4';
  } else if (ratings <= 5 && ratings > 4) {
    ratingStyle = 'rating5';
  } else {
    ratingStyle = 'noRating';
  }

  return (
    <div className={`${styles['review-card__customer-rating']} ${styles[ratingStyle]}`}>
      <span className={styles['review-card__star']}>{ratings}</span>
      <img alt="Review Card" src={images.white_star} width={8} height={8} />
    </div>
  );
};

export default AverageRating;
