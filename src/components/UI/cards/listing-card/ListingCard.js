import { useNavigate } from 'react-router-dom';
import styles from './listing-card.module.scss';
import CardInfo from 'components/UI/cards/vertical-rail-card/card-info/CardInfo';
import images from 'assets/images';
import Utilities from 'utils/Utility';

const ListingCard = ({ list = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  const { image_url: image, slug = '' } = list;
  const leftMargin = Utilities.spacingBetweenItems;
  const rightMargin = Utilities.spacingBetweenItems;
  const width = Utilities.getScreenWidth() - 10;
  return (
    <div
      style={{
        marginLeft: leftMargin,
        marginRight: rightMargin,
        width: width,
      }}
      className={styles['card-container']}
      onClick={onClick}>
      <div className={styles['card-container__image-container']}>
        <img className={styles['card-container__image']} src={image} />
      </div>

      <div className={styles['card-container__right-content']}>
        <CardInfo list={list} />
      </div>
      <div className={styles['card-container__addToBag']}>
        <img alt="Add To Bag" src={images.addToBag} height={39} width={39} />
      </div>
    </div>
  );
};

export default ListingCard;
