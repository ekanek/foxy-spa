import AttributePills from 'components/UI/molecules/AttributePills';
import React from 'react';
import styles from 'styles/productPage.module.scss';
import ProductVariant from 'components/UI/molecules/ProductVariant';
const ProductInfo = ({
  name = '',
  description = '',
  mrp = '',
  sp = '',
  discount = '',
  variant = [],
  setProductId = '',
}) => {
  console.log(variant[0].allowed_values, 'product_info');
  return (
    <div className={styles['product-info']}>
      <span className={styles['product-info__name']}>{name}</span>
      <div className={styles['product-info__hero-description']}>{description}</div>
      <div className={styles['pricing']}>
        <span className={styles['pricing__sp']}>{'₹' + mrp}</span>
        <span className={styles['pricing__mrp']}>{'₹' + sp}</span>

        <span className={styles['pricing__discount-percent']}>{discount}</span>
      </div>
      {/* <div className={styles['product-info__additional-message']}>
        SPLURGE30 applied. Final prices in bag
      </div> */}
      <ProductVariant variantData={variant[0].allowed_values} setProductId={setProductId} />
      <AttributePills />
    </div>
  );
};

export default ProductInfo;
