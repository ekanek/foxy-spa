// import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import styles from 'styles/Organisms.module.scss';

const ProductImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} width={400} height={400} />
    </div>
  );
};

const ImageCarousel = ({ images = [] }) => {
  // const navigate = useNavigate();
  // const onClick = () => {
  //   navigate('/productImage', { state: { slideImage: images, name: name } });
  // };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div style={{ alignSelf: 'center' }}>
      <Carousel afterChange={onChange} className={styles['carousel']}>
        {images.map((image) => (
          <ProductImage imageUrl={image} key={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
