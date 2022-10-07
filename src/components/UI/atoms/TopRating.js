import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from 'assets/images';
import styles from 'styles/productPage.module.scss';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
const TopRating = ({ rating = 0, brand }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('/brand_certificate', { state: { brand } });
  const goToReviewSection = () => {
    window.scrollTo(0, 2890);
  };
  return (
    <div className={styles['TopRating']}>
      <div onClick={goToReviewSection}>
        <RatingStar rating={rating} showRating />
      </div>
      <div onClick={onClick}>
        <img alt="verified image" height={19} width={19} src={images.verified_image} />
        <span className={styles['verified_text']}> 100% Original</span>
      </div>
    </div>
  );
};
export default TopRating;
