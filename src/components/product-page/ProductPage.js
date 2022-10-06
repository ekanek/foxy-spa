import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from 'components/UI/organisms/Header';
import styles from 'styles/productPage.module.scss';
import IngredientsList from 'components/UI/molecules/IngredientsList';
import SiteFooter from 'components/UI/organisms/SiteFooter';
import ProductPageShimmer from 'components/UI/molecules/ProductPageShimmer';
import { useGetProductDetailsQuery } from 'apis/productApis';
import OffersRail from 'components/UI/organisms/OffersRail';
import ProductDescriptionShort from 'components/UI/organisms/ProductDescriptionShort';
import ReviewsAndRatings from 'components/UI/organisms/product-page/ReviewsAndRatings';
import BuyNowAddToBag from 'components/UI/molecules/BuyNowAddToBag';
import ProductInfoContainer from 'components/UI/organisms/ProductInfoContainer';
import RecommendationContainer from 'components/UI/Recommendation/RecommendationContainer';
import ProductListContainer from 'components/UI/cards/grid-card/ProductListContainer';
import ProductDelivery from 'components/delivery-info/ProductDelivery';
import DemoList from 'components/layout/Grid/DemoList';
import HomePage from 'components/UI/home-page/HomePage';
function ProductPage() {
  const navigate = useNavigate();
  const [stockedStatus, setStockedStatus] = useState(false);
  const { state = {} } = useLocation();
  const onClick = () => {
    navigate(-1);
  };
  const productUrl = state?.slug;
  const variantSlug = state?.productSlug;
  let url = '';
  if (!productUrl && !variantSlug) {
    url = '/api/v2/products/lakme-enrich-matte-lipstick';
  } else {
    url = productUrl || `/api/v2/products/${variantSlug}`;
  }
  const { data: product, isFetching } = useGetProductDetailsQuery(url);
  if (isFetching) return <Shimmer />;
  const {
    // image_url: image = '',
    name = '',
    star_ingredients: ingredients = [],
    reviews = [],
    clean_description: cleanDescription = '',
    ingredients: ingredientsDescription = '',
    how_to: howToUseDescription = '',
    metrological_info: metrologicalInfo = '',
    rating = 0,
    ratings_count: ratingsCount = 0,
    reviews_count: reviewsCount = 0,
    consolidated_list_lower: productList = [],
    foxy_match = {},
  } = product;
  function updateStockedStatus(status) {
    setStockedStatus(status);
  }
  return (
    <>
      <div>
        <Header title={name} onPress={onClick} />
        <div className={styles['product-page-container']}>
          <ProductInfoContainer product={product} updateStockedStatus={updateStockedStatus} />
          <OffersRail />
          <DemoList />
          <RecommendationContainer foxy_match={foxy_match} rating={rating} />
          <IngredientsList ingredients={ingredients} />
          <ProductDescriptionShort
            description={cleanDescription}
            ingredientsDescription={ingredientsDescription}
            howToUseDescription={howToUseDescription}
            metrologicalInfo={metrologicalInfo}
          />
          <HomePage />
          <ReviewsAndRatings
            reviews={reviews}
            rating={rating}
            reviewsCount={reviewsCount}
            ratingsCount={ratingsCount}
          />

          <ProductDelivery />
          <ProductListContainer productList={productList} />
        </div>
        <BuyNowAddToBag stockedStatus={stockedStatus} />
        <SiteFooter />
      </div>
    </>
  );
}
const Shimmer = () => {
  return <ProductPageShimmer />;
};
export default ProductPage;
