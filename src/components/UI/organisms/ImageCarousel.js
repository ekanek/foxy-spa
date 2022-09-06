import { Carousel } from 'antd';
import React from 'react';
import styles from 'styles/Organisms.module.scss';
import { useNavigate } from 'react-router-dom';
const ProductImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} width={400} height={400} />
    </div>
  );
};
const ImageCarousel = ({ images = [] }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/productImage')}>
      <Carousel afterChange={onChange} className={styles['carousel']}>
        {images.map((image) => (
          <ProductImage imageUrl={image} key={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
