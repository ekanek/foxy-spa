import React from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.scss';
import styles from 'styles/productPage.module.scss';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
import IngredientsList from 'components/UI/molecules/IngredientsList';
import SiteFooter from 'components/UI/organisms/SiteFooter';
import ProductPageShimmer from 'components/UI/molecules/ProductPageShimmer';
import { useGetProductDetailsQuery } from 'apis/productApis';
import OffersRail from 'components/UI/organisms/OffersRail';
import ReviewsAndRatings from 'components/UI/organisms/product-page/ReviewsAndRatings';
import BuyNowAddToBag from 'components/UI/molecules/BuyNowAddToBag';

function App() {
  const { data, isFetching } = useGetProductDetailsQuery(
    'api/v2/products/colorbar-full-cover-makeup-stick.json',
  );

  if (isFetching) {
    return <Shimmer />;
  }

  const {
    images = [],
    name = '',
    hero_description: description,
    mrp,
    final_sp: finalSp,
    discount,
    star_ingredients: ingredients,
    reviews = [],
    rating = 0,
    ratings_count: ratingsCount = 0,
    reviews_count: reviewsCount = 0,
  } = data;
  // console.log('PRODUCT DATA', productCategory);
  return (
    <>
      <div className={styles['product-page-container']}>
        <Header title={name} />
        <ImageCarousel images={images} />
        <ProductInfo
          name={name}
          description={description}
          mrp={mrp}
          sp={finalSp}
          discount={discount}
        />
        <OffersRail />
        <ReviewsAndRatings
          reviews={reviews}
          rating={rating}
          reviewsCount={reviewsCount}
          ratingsCount={ratingsCount}
        />
        <IngredientsList ingredients={ingredients} />
      </div>
      <BuyNowAddToBag />
      <SiteFooter />
    </>
  );
}

const Shimmer = () => {
  return <ProductPageShimmer />;
};

export default App;
