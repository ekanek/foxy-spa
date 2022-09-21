import images from 'assets/images';
import styles from 'styles/Molecules.module.scss';

export default function BuyNowAddToBag() {
  return (
    <div className={styles['buy-cta']}>
      <div className={styles['buy-cta__header']} />
      <div className={styles['buy-cta__flex']}>
        <div className={styles['buy-cta__add-to-bag']}>
          <img alt="Add To Bag Green Icon" src={images.addToBagGreen} width={20} />
          <span>Add to bag</span>
        </div>
        <div className={styles['buy-cta__buy-now']}>
          <img alt="Buy Now" src={images.zap} width={20} />
          <span>Buy Now</span>
        </div>
      </div>
    </div>
  );
}
