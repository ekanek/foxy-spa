import React, { useState } from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.scss';
import styles from 'styles/productPage.module.scss';
import IngredientsList from 'components/UI/molecules/IngredientsList';
import SiteFooter from 'components/UI/organisms/SiteFooter';
import ProductPageShimmer from 'components/UI/molecules/ProductPageShimmer';
import { useGetProductDetailsQuery } from 'apis/productApis';
import OffersRail from 'components/UI/organisms/OffersRail';
import ProductDescription from 'components/UI/organisms/ProductDescription';
import ProductDescriptionShort from 'components/UI/organisms/ProductDescriptionShort';
import ReviewsAndRatings from 'components/UI/organisms/product-page/ReviewsAndRatings';
import BuyNowAddToBag from 'components/UI/molecules/BuyNowAddToBag';
import ProductInfoContainer from 'components/UI/organisms/ProductInfoContainer';
function App() {
  const { data, isFetching } = useGetProductDetailsQuery(
    'api/v2/products/lakme-enrich-matte-lipstick',
  );
  const [show, setShow] = useState(false);
  if (isFetching) {
    return <Shimmer />;
  }
  const {
    name = '',
    star_ingredients: ingredients,
    reviews = [],
    clean_description,
    ingredients: ingredients_description,
    how_to: howtouse_description,
    metrological_info,
    rating = 0,
    ratings_count: ratingsCount = 0,
    reviews_count: reviewsCount = 0,
  } = data;
  console.log('PRODUCT DATA', data);

  return (
    <>
      {show === false ? (
        <div>
          <div className={styles['product-page-container']}>
            <Header title={name} />
            <ProductInfoContainer />
            <OffersRail />

            <IngredientsList ingredients={ingredients} />
            <ProductDescriptionShort
              setShow={setShow}
              show={show}
              description={clean_description}
            />
            <ReviewsAndRatings
              reviews={reviews}
              rating={rating}
              reviewsCount={reviewsCount}
              ratingsCount={ratingsCount}
            />
          </div>
          <BuyNowAddToBag />
          <SiteFooter />
        </div>
      ) : (
        <ProductDescription
          description={clean_description}
          desc_ingredients={ingredients_description}
          howtouse_description={howtouse_description}
          metrological_info={metrological_info}
          setShow={setShow}
          show={show}
        />
      )}
    </>
  );
}

const Shimmer = () => {
  return <ProductPageShimmer />;
};

export default App;
