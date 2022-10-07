import styles from 'styles/ProductVariant.module.scss';
import images from 'assets/images';
const ProductVariantItem = (props) => {
  const { image, initialVariantId, setVariantId, variantId, stockStatus } = props;
  return (
    <div className={styles['variant-color-style']} onClick={() => setVariantId(initialVariantId)}>
      <img
        alt="variant Color"
        height={35}
        width={35}
        className={styles['variant-image']}
        src={image}
      />
      {initialVariantId === variantId && (
        <div>
          <div className={styles['out-of-stock-img']}></div>
          <img
            alt="black tick"
            className={styles['tick-style']}
            src={images.tick_image}
            height={9}
            width={9}
          />
        </div>
      )}

      {stockStatus && <div className={styles['out-of-stock-slash']}></div>}
    </div>
  );
};

export default ProductVariantItem;
