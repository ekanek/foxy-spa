import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from 'components/UI/organisms/Header';
import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import styles from 'styles/Organisms.module.scss';
import ReviewFilter from 'components/UI/atoms/product-review/review-filter/ReviewFilter';
const ProductReviewPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const onPressContainer = () => navigate('/');
  const { rating = 0, reviews = [], ratingsCount = 0, reviewsCount = 0 } = state;
  return (
    <div className={styles['all-review']}>
      <Header title="All Reviews" onPress={onPressContainer} />
      <div>
        <RatingsOverviewHeader
          rating={rating}
          reviewsCount={reviewsCount}
          ratingsCount={ratingsCount}
          allReview
        />
        <ReviewFilter />
        <div style={{ marginTop: 150 }}>
          <CustomerReviewList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductReviewPage;
