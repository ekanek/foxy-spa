import React from 'react';
import styles from './product-rail.module.scss';
const ProductCardInfo = () => {
  return (
    <div className={styles['lower-container']}>
      <div className={styles['lower-sub-container']}>
        <div className={styles['shade-name']}>BOAT</div>
        <div className={styles['product-info__name']}>
          Special Edition Speakers With Neon Lights
        </div>
        <div className={styles['pricing']}>
          <span className={styles['pricing__sp']}>₹1900</span>
          <span className={styles['pricing__mrp']}>₹2000</span>
          <span className={styles['pricing__discount-percent']}>5% off</span>
        </div>
        <div className={styles['offer-text']}>Buy 2 Get 1 Free</div>
      </div>
    </div>
  );
};

export default ProductCardInfo;
