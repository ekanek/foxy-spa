import { useNavigate } from 'react-router-dom';
import styles from './hero-rail.module.scss';
import ProductInfoContainer from 'components/UI/cards/product-info/ProductInfoContainer';
import ReviewSection from 'components/UI/cards/hero-card/ReviewSection';
import AttributePills from 'components/UI/molecules/AttributePills';
import HeroButton from 'components/UI/cards/hero-card/HeroButton';
// import images from 'assets/images';
const HeroRailCard = ({ list = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  const { image_url: image, slug = '' } = list;
  return (
    <div onClick={onClick} className={styles['hero-rail-card-container']}>
      <img
        className={styles['hero-rail-card-container__image']}
        alt="Product Image"
        src={image}
        height={144}
        width={144}
      />
      <div className={styles['lowerSection']} style={{ marginLeft: 7 }}>
        <ProductInfoContainer list={list} />
        <div className={styles['hero-rail-card-container__gift-section']}>Free Gift</div>
        <ReviewSection />
        <AttributePills changePills />
        <HeroButton />
      </div>
    </div>
  );
};

export default HeroRailCard;
