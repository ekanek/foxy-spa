import AttributePills from 'components/UI/molecules/AttributePills';
import React from 'react';
import styles from 'styles/productPage.module.scss';

const ProductInfo = ({ name = '', description = '', mrp = '', sp = '', discount = '' }) => {
  return (
    <div className={styles['product-info']}>
      <span className={styles['product-info__name']}>{name}</span>
      <div className={styles['product-info__hero-description']}>{description}</div>
      <div className={styles['pricing']}>
        <span className={styles['pricing__sp']}>{'₹' + mrp}</span>
        <span className={styles['pricing__mrp']}>{'₹' + sp}</span>

        <span className={styles['pricing__discount-percent']}>{discount}</span>
      </div>
      <div className={styles['product-info__additional-message']}>
        SPLURGE30 applied. Final prices in bag
      </div>
      <AttributePills />
    </div>
  );
};

export default ProductInfo;
