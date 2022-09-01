import { Carousel } from 'antd';
import React from 'react';

const ProductImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} height={375} />
    </div>
  );
};
const ImageCarousel = ({ images = [] }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {images.map((image) => (
        <ProductImage imageUrl={image} key={image} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
