import React from 'react';
import styles from 'styles/productPage.module.less';

const ProductInfo = () => {
  return (
    <div className={styles['product-info']}>
      <p className={styles['product-info__name']}>
        Boho Botanist Green Tea &amp; Cactus Body Wash (350ml)
      </p>
      <div className={styles['product-info__hero-description']}>
        A rich mix of 8 botanical oils and plant-based extracts. Enriched with botanicals like Green
        Tea and Cactus, this body wash gives your skin much-needed hydration.
      </div>
      <div className={styles['pricing']}>
        <span className={styles['pricing__sp']}>₹300</span>
        <span className={styles['pricing__mrp']}>₹&nbsp;400</span>

        <span className={styles['pricing__discount-percent']}>(25% Off)</span>
      </div>
      <div className={styles['product-info__additional-message']}>
        SPLURGE30 applied. Final prices in bag
      </div>
    </div>
  );
};

export default ProductInfo;
