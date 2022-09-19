import AttributePills from 'components/UI/molecules/AttributePills';
import React from 'react';
import styles from 'styles/productPage.module.scss';
import ProductVariant from 'components/UI/molecules/ProductVariant';
import TopRating from 'components/UI/atoms/TopRating';
const ProductInfo = ({
  name = '',
  description = '',
  mrp = '',
  sp = '',
  discount = '',
  variant = [],
  setVariantId = '',
  variantId,
  rating = 0,
  displayName = '',
  brand,
}) => {
  return (
    <div className={styles['product-info']}>
      <span className={styles['product-info__name']}>{name}</span>
      <div className={styles['product-info__hero-description']}>{description}</div>
      <div className={styles['pricing']}>
        <span className={styles['pricing__sp']}>{'₹' + sp}</span>
        <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>

        <span className={styles['pricing__discount-percent']}>({discount})</span>
      </div>
      {/* <div className={styles['product-info__additional-message']}>
        SPLURGE30 applied. Final prices in bag
      </div> */}
      <ProductVariant
        displayName={displayName}
        variantData={variant[0].allowed_values}
        variantId={variantId}
        setVariantId={setVariantId}
      />
      <TopRating rating={rating} brand={brand} />
      <AttributePills />
    </div>
  );
};

export default ProductInfo;
