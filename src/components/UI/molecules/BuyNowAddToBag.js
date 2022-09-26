import images from 'assets/images';
import styles from 'styles/Molecules.module.scss';

const stylesButton = {
  padding: 8,
  marginBottom: 2,
};
const notifyButton = {
  padding: 6,
  fontSize: 18,
};
export default function BuyNowAddToBag({ stockedStatus = '' }) {
  return (
    <div className={styles['buy-cta']}>
      {!stockedStatus && (
        <div>
          <div className={styles['buy-cta__header']} />
          <div className={styles['buy-cta__flex']}>
            <div className={styles['buy-cta__add-to-bag']}>
              <img alt="Add To Bag Green Icon" src={images.addToBagGreen} width={20} height={20} />
              <span style={stylesButton}>Add to bag</span>
            </div>
            <div className={styles['buy-cta__buy-now']}>
              <img alt="Buy Now" src={images.zap} width={20} height={20} />
              <span style={stylesButton}>Buy Now</span>
            </div>
          </div>
        </div>
      )}
      {stockedStatus && (
        <div>
          <div className={styles['buy-cta__header']} />
          <div className={styles['buy-cta__flex']}>
            <div className={styles['buy-cta__buy-now']}>
              <span style={notifyButton}>Notify when available</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
