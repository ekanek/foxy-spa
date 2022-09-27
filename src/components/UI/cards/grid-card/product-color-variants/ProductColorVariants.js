import styles from 'styles/ProductListCard.module.scss';

const variantShade = {
  height: 12,
  width: 13,
  borderRadius: 7,
  borderWidth: 0.7,
  borderStyle: 'solid',
  borderColor: '#ffffff',
  marginBottom: 10,
};
const variantShadeTemp = {
  height: 12,
  width: 13,
  borderRadius: 7,
  borderWidth: 0.7,
  borderStyle: 'solid',
  marginLeft: -7,
  marginBottom: 10,
  borderColor: '#ffffff',
};
const variantCountStyle = {
  fontSize: 10,
  marginLeft: 1,
  marginBottom: 5,
  fontFamily: 'Roboto-Regular',
  color: '#9d9d9d',
};
function ProductColor(image, index) {
  let variantColorStyle = '';
  if (index === 0) {
    variantColorStyle = variantShade;
  } else if (index > 0) {
    variantColorStyle = variantShadeTemp;
  }
  return (
    <div key={index}>
      <img src={image} style={variantColorStyle} />
    </div>
  );
}
const VariantCount = (props) => {
  const { variantsCount } = props;
  return <div style={variantCountStyle}>{variantsCount}</div>;
};
const VariantShades = (props) => {
  const { variantsShadeImages } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginRight: 4,
      }}>
      {variantsShadeImages.map((image, index) => ProductColor(image, index))}
    </div>
  );
};
const ProductColorVariants = (props) => {
  const { variantsCount = '', variantsShadeImages = [] } = props;
  console.log(variantsCount, variantsShadeImages);
  return (
    <div className={styles['variant-data-container']}>
      <div className={styles['variant-data']}>
        <VariantShades variantsShadeImages={variantsShadeImages} />
        <VariantCount variantsCount={variantsCount} />
      </div>
    </div>
  );
};

export default ProductColorVariants;
