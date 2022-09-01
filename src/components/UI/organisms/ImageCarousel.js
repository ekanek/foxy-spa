import { Carousel } from 'antd';
import React from 'react';
import styles from 'styles/Organisms.module.scss';
const ProductImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} width={400} />
    </div>
  );
};
const ImageCarousel = ({ images = [] }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} className={styles['carousel']}>
      {images.map((image) => (
        <ProductImage imageUrl={image} key={image} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
