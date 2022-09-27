import AverageRating from 'components/UI/atoms/product-review/AverageRating';
import styles from 'styles/ProductListCard.module.scss';
import ProductColorVariants from 'components/UI/cards/grid-card/product-color-variants/ProductColorVariants';
// import images from 'assets/images';
function ProductTopContent({ rating = '', variantsCount = '', variantsShadeImages = [] }) {
  return (
    <div className={styles['top-header']}>
      <ProductColorVariants
        variantsCount={variantsCount}
        variantsShadeImages={variantsShadeImages}
      />
      <div style={{ marginRight: 10 }}>
        <AverageRating ratings={rating} />
      </div>
    </div>
  );
}

export default ProductTopContent;
