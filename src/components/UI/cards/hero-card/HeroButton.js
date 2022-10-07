import styles from './hero-rail.module.scss';
import images from 'assets/images';
const HeroButton = ({ buttonWidth = '' }) => {
  return (
    <div className={styles['button-container']}>
      <div className={styles['button-container__buttons']} style={{ width: buttonWidth }}>
        <div className={styles['button-container__wishlist-content']}>
          <img
            alt="Unlike Icon"
            src={images.unlikeImage}
            height={14}
            width={16}
            style={{ marginRight: 4 }}
          />
          <div
            className={`${styles['button-container__wishlistButton']} ${styles['button-text-color']}`}>
            WishList
          </div>
        </div>
      </div>

      <div
        className={`${styles['button-container__buttons']} ${styles['black-color']}`}
        style={{ width: buttonWidth }}>
        <div className={styles['button-container__addToBag-content']}>
          <img alt="Add To bag Green Icon" src={images.addToBagWhite} height={16} width={14} />
          <div className={styles['button-container__addToBag']} style={{ marginLeft: 5 }}>
            Add To Bag
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroButton;
