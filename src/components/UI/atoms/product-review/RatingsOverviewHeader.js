import images from 'assets/images';
import styles from 'styles/Atoms.module.scss';
export default function RatingsOverviewHeader({
  rating = 0,
  ratingsCount = 0,
  reviewsCount = 0,
  allReview = '',
}) {
  let text = '';
  if (ratingsCount !== 0 && reviewsCount !== 0) {
    text = `(${ratingsCount} ratings | ${reviewsCount} reviews)`;
  } else if (ratingsCount === 0) {
    text = ` ${reviewsCount} reviews`;
  } else if (reviewsCount === 0) {
    text = ` ${ratingsCount} ratings`;
  }
  let headerStyle = '';
  if (allReview) {
    headerStyle = 'rating-header-all-review';
  } else {
    headerStyle = 'ratings-header';
  }
  return (
    <div className={styles[headerStyle]}>
      <div className={styles['ratings-header__flex']}>
        <div className={styles['ratings-header__rating']}>{rating}</div>
        <div>{' / 5'}</div>
        <img
          alt="Filled Star"
          src={images.rating.filled_star}
          width={16}
          className={styles['ratings-header__img']}
        />
      </div>
      <div className={styles['ratings-header__flex-end']}>{text}</div>
    </div>
  );
}
