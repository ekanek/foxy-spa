import { useNavigate } from 'react-router-dom';
import styles from './hero-rail.module.scss';
import ProductInfoContainer from 'components/UI/cards/product-info/ProductInfoContainer';
// import ReviewSection from 'components/UI/cards/hero-card/ReviewSection';
import AttributePills from 'components/UI/molecules/AttributePills';
import HeroButton from 'components/UI/cards/hero-card/HeroButton';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
import Utilities from 'utils/Utility';
// import images from 'assets/images';
const HeroRailCard = ({ list = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  const { image_url: image, slug = '', rating = 0 } = list;
  return (
    <div onClick={onClick} style={cardStyles} className={styles['hero-rail-card-container']}>
      <img
        className={styles['hero-rail-card-container__image']}
        alt="Product Image"
        src={image}
        style={imageStyle}
      />
      <div className={styles['lowerSection']} style={{ marginLeft: 7 }}>
        <ProductInfoContainer list={list} />
        {/* <div className={styles['hero-rail-card-container__gift-section']}>Free Gift</div> */}
        {/* <ReviewSection /> */}
        <div style={{ marginTop: 10 }}>
          <RatingStar rating={rating} />
        </div>

        <AttributePills />
        <HeroButton buttonWidth={(Utilities.getScreenWidth() - 58 - 36) / 2} />
      </div>
    </div>
  );
};

export default HeroRailCard;
const cardStyles = {
  height: 580,
  width: Utilities.getScreenWidth() - 58,
};
const imageStyle = {
  height: 270,
  width: Utilities.getScreenWidth() - 58,
};
