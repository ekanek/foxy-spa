import React from 'react';
import styles from 'styles/ProductVariant.module.scss';
const ProductVariantItem = (props) => {
  const { image, productId, setProductId } = props;
  return (
    <div className={styles['variant-color-style']} onClick={() => setProductId(productId)}>
      <img height={35} width={35} style={{ borderRadius: 20 }} src={image} />
    </div>
  );
};

export default ProductVariantItem;
