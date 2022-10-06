import { useNavigate } from 'react-router-dom';
import styles from './product-rail.module.scss';
import ProductCardInfo from 'components/product-cards/product-rail/ProductCardInfo';
import images from 'assets/images';
const RailCard = ({ list = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  const { image_url: image, slug = '' } = list;
  return (
    <div style={{ marginLeft: 4 }} onClick={onClick} className={styles['card-container']}>
      <div className={styles['content']}>
        <img className={styles['card-container__img']} src={image} />
        <ProductCardInfo list={list} />
      </div>
      <div className={styles['add-to-bag']}>
        <img alt="Add To Bag" src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default RailCard;
