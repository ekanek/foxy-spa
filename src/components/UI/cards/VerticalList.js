import styles from 'styles/ProductListCard.module.scss';
import Utilities from 'utils/Utility';
// import images from 'assets/images';
import ProductDescriptionContainer from 'components/UI/molecules/ProductDescriptionContainer';
const VerticalList = ({ image = '' }) => {
  return (
    <div
      className={styles['vertical-list-card']}
      style={{
        marginLeft: Utilities.spacingBetweenItems,
        marginRight: Utilities.spacingBetweenItems,
        width: Utilities.getScreenWidth() - 24,
      }}>
      <div className={styles['vertical-list-card__image']}>
        <img alt="Product Image" src={image} height={116} width={116} />
      </div>
      <ProductDescriptionContainer showCartButton={true} />
    </div>
  );
};

export default VerticalList;
