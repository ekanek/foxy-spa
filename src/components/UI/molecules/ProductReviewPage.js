import React from 'react';
import Header from 'components/UI/organisms/Header';
import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import { useNavigate, useLocation } from 'react-router-dom';
const ProductReviewPage = () => {
  const navigate = useNavigate();
  function onPressContainer() {
    navigate('/');
  }
  const { state } = useLocation();
  const { rating = 0, reviews = [], ratingsCount = 0, reviewsCount = 0 } = state;
  console.log(state);
  return (
    <div>
      <Header title="All Reviews" onPress={onPressContainer} />
      <RatingsOverviewHeader
        rating={rating}
        reviewsCount={reviewsCount}
        ratingsCount={ratingsCount}
      />
      <CustomerReviewList reviews={reviews} />
    </div>
  );
};

export default ProductReviewPage;
