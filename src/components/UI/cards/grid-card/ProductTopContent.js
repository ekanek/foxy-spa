import AverageRating from 'components/UI/atoms/product-review/AverageRating';
import styles from 'styles/ProductListCard.module.scss';
import ProductColorVariants from 'components/UI/cards/grid-card/product-color-variants/ProductColorVariants';
// import images from 'assets/images';
function ProductTopContent({
  rating = '',
  variantsCount = '',
  variantsShadeImages = [],
  variantImage = '',
  variantName = '',
}) {
  return (
    <div className={styles['top-header']}>
      {variantsCount || variantName ? (
        <ProductColorVariants
          variantsCount={variantsCount}
          variantsShadeImages={variantsShadeImages}
          variantImage={variantImage}
          variantName={variantName}
        />
      ) : (
        <div></div>
      )}
      <div style={variantsCount ? { marginRight: 10 } : { marginRight: 10, marginTop: 10 }}>
        <AverageRating ratings={rating} />
      </div>
    </div>
  );
}

export default ProductTopContent;
