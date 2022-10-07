import styles from './hero-rail.module.scss';
import images from 'assets/images';
const ReviewSection = () => {
  return (
    <div className={styles['review']}>
      <div className={styles['review-container']}>
        <img
          className={styles['review-container__icon']}
          src={images.greyLike}
          height={12}
          width={11}
          alt=" unlike icon"
        />
        <div className={styles['review-container__reviewText']}>
          {' '}
          3 ingredients good for your dry skin
        </div>
      </div>
      <div className={styles['review-container']}>
        <img
          className={styles['review-container__icon']}
          src={images.greyLike}
          height={12}
          width={11}
          alt=" unlike icon"
        />
        <div className={styles['review-container__reviewText']}>
          {' '}
          #2 rated bodywash for your Acne concern
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
