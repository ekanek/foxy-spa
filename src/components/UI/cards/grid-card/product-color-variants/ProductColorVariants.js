import styles from 'styles/ProductListCard.module.scss';

const variantShadeStyle = {
  height: 12,
  width: 12,
  borderRadius: 7,
  borderWidth: 0.7,
  borderStyle: 'solid',
  marginLeft: -6,
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
        flexDirection: 'row-reverse',
        marginRight: 4,
      }}>
      {variantsShadeImages.map((image, index) => (
        <div key={index}>
          <img src={image} style={variantShadeStyle} />
        </div>
      ))}
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