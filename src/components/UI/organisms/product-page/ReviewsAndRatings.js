import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import styles from 'styles/Organisms.module.scss';
import React from 'react';
import RateStars from 'components/UI/molecules/RateStars';
import images from 'assets/images';
import { useNavigate } from 'react-router-dom';
const ReviewsAndRatings = ({ rating = 0, reviews = [], reviewsCount = 0, ratingsCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={`${styles['list-title']} ${styles['margin-left']}`}>Rating and Reviews</div>
      <RatingsOverviewHeader
        rating={rating}
        reviewsCount={reviewsCount}
        ratingsCount={ratingsCount}
      />
      <CustomerReviewList reviews={reviews} />
      <div style={{ width: '100%', backgroundColor: 'white', marginTop: -3, position: 'absolute' }}>
        <div className={styles['review-button-container']} onClick={() => navigate('/AllReview')}>
          <div className={styles['review-button']}>
            View all reviews{' '}
            <div className={styles['arrow-style']}>
              <img height={8} width={5} src={images.blue_down_arrow} />
            </div>
          </div>
        </div>
      </div>

      <RateStars />
    </div>
  );
};

export default ReviewsAndRatings;
