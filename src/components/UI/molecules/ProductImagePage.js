import { useLocation, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'styles/Carousel.module.scss';
import images from 'assets/images';
const ProductImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} width={400} height={400} />
    </div>
  );
};
const ProductImageShort = ({ imageUrl }) => {
  return (
    <div>
      <div>
        <img className={styles['image-slide-track']} src={imageUrl} height={90} width={90} />
      </div>
    </div>
  );
};
const LeftArrowImage = () => {
  return (
    <div className={styles['left-arrow']}>
      <img height={28} width={20} src={images.arrow_Left} />
    </div>
  );
};
const RightArrowImage = () => {
  return (
    <div className={styles['right-arrow']}>
      <img height={28} width={20} src={images.arrow_Left} />
    </div>
  );
};
const Header = ({ name = '' }) => {
  const navigate = useNavigate();
  return (
    <div className={styles['custom-header']}>
      <div className={styles['custom-header-text']}>{name}</div>
      <div className={styles['custom-header-cross']} onClick={() => navigate('/')}>
        <img height={15} width={15} src={images.cross_image} />
      </div>
    </div>
  );
};
const ProductImagePage = () => {
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };
  const { state } = useLocation();
  const { slideImage, name } = state;
  return (
    <div>
      <Header name={name} />
      <div className={styles['carousel-slider-container']}>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label}>
                <LeftArrowImage />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label}>
                <RightArrowImage />
              </button>
            )
          }
          useKeyboardArrows>
          {slideImage.map((image) => (
            <ProductImage imageUrl={image} key={image} />
          ))}
        </Carousel>
      </div>
      <div className={styles['short-Image-Slider']} onClick={() => console.log('yes')}>
        {slideImage.map((image) => (
          <ProductImageShort imageUrl={image} key={image} />
        ))}
      </div>
    </div>
  );
};

export default ProductImagePage;
