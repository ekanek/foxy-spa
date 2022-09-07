import React from 'react';
import styles from 'styles/ProductVariant.module.scss';
import ProductVariantItem from 'components/UI/atoms/ProductVariantItem';
const ProductVariant = (props) => {
  const { variantData = [], setProductId = '' } = props;
  return (
    <div className={styles['variant_container']}>
      <div className={styles['top-row']}>
        <div className={styles['shade-text']}>
          Shade :{' '}
          <span
            style={{
              color: '#173143',
              fontWeight: 450,
              fontSize: 14,
              display: 'inline-block',
            }}>
            Shade RM15
          </span>
        </div>
        <div className={styles['view-all-text']}>View All</div>
      </div>
      <div className={styles['variant_color_container']}>
        <div className={styles['color-container']}>
          {variantData.slice(0, 13).map((item) => (
            <ProductVariantItem
              key={item.id}
              image={item.image_url}
              setProductId={setProductId}
              productId={item.id}
            />
          ))}
        </div>
        {variantData.length > 13 ? (
          <div className={styles['other-shades']}>
            <div className={styles['other-shades-text']}>+{variantData.length - 13}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductVariant;