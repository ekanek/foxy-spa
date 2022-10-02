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
  console.log(Utilities.getScreenHeight());
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
        <HeroButton />
      </div>
    </div>
  );
};

export default HeroRailCard;
const cardStyles = {
  height: Utilities.getScreenHeight() - 180,
  width: Utilities.getScreenWidth() - 58,
};
const imageStyle = {
  height: Utilities.getScreenHeight() - 450,
  width: Utilities.getScreenWidth() - 58,
};
