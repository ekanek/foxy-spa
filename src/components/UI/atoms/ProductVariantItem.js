import styles from 'styles/ProductVariant.module.scss';
import images from 'assets/images';
const ProductVariantItem = (props) => {
  const { image, initialVariantId, setVariantId, variantId } = props;
  return (
    <div className={styles['variant-color-style']} onClick={() => setVariantId(initialVariantId)}>
      <img alt="variant Color" height={35} width={35} style={{ borderRadius: 20 }} src={image} />
      {initialVariantId === variantId ? (
        <img
          alt="black tick"
          className={styles['tick-style']}
          src={images.tick_image}
          height={10}
          width={10}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductVariantItem;
