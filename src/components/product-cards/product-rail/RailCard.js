import styles from './product-rail.module.scss';
import ProductCardInfo from 'components/product-cards/product-rail/ProductCardInfo';
import images from 'assets/images';
const RailCard = ({ image = '' }) => {
  console.log(image);
  return (
    <div className={styles['card-container']}>
      <div className={styles['content']}>
        <img className={styles['card-container__img']} src={image} />
        <ProductCardInfo />
      </div>
      <div className={styles['add-to-bag']}>
        <img alt="Add To Bag" src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default RailCard;
