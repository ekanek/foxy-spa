import React from 'react';
import styles from './product-rail.module.scss';
const ProductCardInfo = ({ list = {} }) => {
  const { discount = '', final_sp = 0, mrp = 0, name, brand = {} } = list;
  const { name: brandName = '' } = brand;
  return (
    <div className={styles['lower-container']}>
      <div className={styles['lower-sub-container']}>
        <div className={styles['shade-name']}>{brandName}</div>
        <div className={styles['product-info__name']}>{name}</div>
        <div className={styles['pricing']}>
          <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
          {final_sp < mrp && <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>}
          <span className={styles['pricing__discount-percent']}>{discount}</span>
        </div>
        <div className={styles['offer-text']}>Buy 2 Get 1 Free</div>
      </div>
    </div>
  );
};

export default ProductCardInfo;
