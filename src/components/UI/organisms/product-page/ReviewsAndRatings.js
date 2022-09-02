import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import styles from 'styles/Organisms.module.scss';
import React from 'react';
import RateStars from 'components/UI/molecules/RateStars';

const ReviewsAndRatings = ({ rating = 0, reviews = [], reviewsCount = 0, ratingsCount = 0 }) => {
  return (
    <div>
      <div className={`${styles['list-title']} ${styles['margin-left']}`}>Rating and Reviews</div>
      <RatingsOverviewHeader
        rating={rating}
        reviewsCount={reviewsCount}
        ratingsCount={ratingsCount}
      />
      <CustomerReviewList reviews={reviews} />
      <RateStars />
    </div>
  );
};

export default ReviewsAndRatings;
