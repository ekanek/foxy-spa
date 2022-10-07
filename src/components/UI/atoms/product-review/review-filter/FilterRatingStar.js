import styles from 'styles/atoms/ProductReviewCards.module.scss';
import images from 'assets/images';
const FilterRatingStar = ({ value }) => {
  console.log(value);
  return (
    <div className={styles['filter-option-rating-star']}>
      <div className={styles['filter-option-rating-star__rating-pill']}>
        <span className={styles['filter-option-rating-star__rating-value']}>{value + 1}</span>
        <img
          className={styles['filter-option-rating-star__img']}
          src={images.white_star}
          height={8}
          width={8}
        />
      </div>
    </div>
  );
};

export default FilterRatingStar;
