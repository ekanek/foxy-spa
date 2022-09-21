import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
function ProductTopContent({ rating = '' }) {
  return (
    <div className={styles['top-header']}>
      <div className={styles['variant-data-container']}>
        <div className={styles['variant-data']}>
          <div className={styles['variant-color']}></div>
          <div className={styles['variant-name']}>Buff Nude 05</div>
        </div>
      </div>
      <div className={styles['customer-rating']}>
        {/* <span>3.8</span> */}
        <div style={{ fontWeight: 700 }}>{rating}</div>
        <img
          alt="White Star"
          src={images.white_star}
          width={11}
          height={10}
          className={styles['image']}
        />
      </div>
    </div>
  );
}

export default ProductTopContent;
