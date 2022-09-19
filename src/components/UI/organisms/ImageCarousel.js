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
const ImageCarousel = ({ images = [], name = '' }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/productImage', { state: { slideImage: images, name: name } });
  };
  return (
    <div onClick={onClick}>
      <Carousel afterChange={onChange} className={styles['carousel']}>
        {images.map((image) => (
          <ProductImage imageUrl={image} key={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
