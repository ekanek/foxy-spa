import AverageRating from 'components/UI/atoms/product-review/AverageRating';
import styles from 'styles/ProductListCard.module.scss';
// import images from 'assets/images';
function ProductTopContent({ rating = '' }) {
  return (
    <div className={styles['top-header']}>
      <div className={styles['variant-data-container']}>
        <div className={styles['variant-data']}>
          <div className={styles['variant-color']}></div>
          <div className={styles['variant-name']}>Buff Nude 05</div>
        </div>
      </div>
      <div style={{ marginRight: 10 }}>
        <AverageRating ratings={rating} />
      </div>
    </div>
  );
}

export default ProductTopContent;
