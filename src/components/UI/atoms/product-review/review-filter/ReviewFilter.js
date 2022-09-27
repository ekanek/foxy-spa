import styles from 'styles/atoms/ProductReviewCards.module.scss';
import images from 'assets/images';
import FilterRatingStar from 'components/UI/atoms/product-review/review-filter/FilterRatingStar';
const ReviewFilter = () => {
  return (
    <div className={styles['filter-container']}>
      <div className={styles['sorting-list']}>
        <div className={styles['sorting-list__default']}>
          <img src={images.sortIcon} height={10} width={10} />
          <span className={styles['sorting-list__option-text']}>Most Helpful</span>
          <img src={images.redArrow} height={6} width={8} style={{ marginTop: 2 }} />
        </div>
      </div>
      <div className={styles['filter-list']}>
        <div className={styles['filter-list__verified']}>
          <span>Verified Only</span>
        </div>
        {[...Array(5)].map((e, i) => <FilterRatingStar key={i} value={i} />).reverse()}
      </div>
    </div>
  );
};

export default ReviewFilter;
