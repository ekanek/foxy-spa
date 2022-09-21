import styles from 'styles/ProductListCard.module.scss';
import Utilities from 'utils/Utility';
import ProductDescriptionContainer from 'components/UI/molecules/ProductDescriptionContainer';
import images from 'assets/images';
const ProductPersonalizedHorizontal = ({ image = '' }) => {
  const cardWidth = Utilities.getScreenWidth() - 58;
  return (
    <div className={styles['hero-rail-card-container']} style={{ width: cardWidth }}>
      <div className={styles['hero-rail-card-container__image']}>
        <img alt="Product Image" src={image} height={280} width={250} />
      </div>
      <ProductDescriptionContainer showPillsAndRating />
      <div className={styles['button-container']}>
        <div className={styles['buttons']}>
          <div className={styles['buttons-content']}>
            <img
              alt="Unlike Icon"
              src={images.unlikeImage}
              height={20}
              width={20}
              style={{ marginRight: 4 }}
            />
            <div className={`${styles['button-text']} ${styles['button-text-color']}`}>
              WishList
            </div>
          </div>
        </div>
        <div className={`${styles['buttons']} ${styles['black-color']}`}>
          <div className={styles['buttons-content']}>
            <img
              alt="Add To bag Green Icon"
              style={{ marginRight: 3 }}
              src={images.addToBagGreen}
              height={20}
              width={20}
            />
            <div className={styles['button-text']} style={{ marginLeft: 5 }}>
              Add To Bag
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPersonalizedHorizontal;
