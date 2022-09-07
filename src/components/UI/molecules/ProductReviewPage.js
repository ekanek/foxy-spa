import React from 'react';
import Header from 'components/UI/organisms/Header';
import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import { useGetProductDetailsQuery } from 'apis/productApis';
import { useNavigate } from 'react-router-dom';
const ProductReviewPage = () => {
  const { data } = useGetProductDetailsQuery(
    'api/v2/products/lakme-enrich-matte-lipstick?variant=7848',
  );
  const {
    reviews = [],
    rating = 0,
    ratings_count: ratingsCount = 0,
    reviews_count: reviewsCount = 0,
  } = data;
  const navigate = useNavigate();
  function onPressContainer() {
    navigate('/');
  }
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
