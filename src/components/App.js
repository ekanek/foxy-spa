import React, { useState } from 'react';
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

import ProductDescription from 'components/UI/organisms/ProductDescription';
import ProductDescriptionShort from 'components/UI/organisms/ProductDescriptionShort';
import ReviewsAndRatings from 'components/UI/organisms/product-page/ReviewsAndRatings';
import BuyNowAddToBag from 'components/UI/molecules/BuyNowAddToBag';
function App() {
  const [productId, setProductId] = useState('');
  const { data, isFetching } = useGetProductDetailsQuery(
    'api/v2/products/lakme-enrich-matte-lipstick?variant=7848',
  );
  const [show, setShow] = useState(false);

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
    clean_description,
    ingredients: ingredients_description,
    how_to: howtouse_description,
    metrological_info,
    rating = 0,
    ratings_count: ratingsCount = 0,
    reviews_count: reviewsCount = 0,
    variant_attributes,
  } = data;
  console.log('PRODUCT DATA', data);
  console.log('productId', productId);
  // const descriptionShow = (status) => {
  //   setShow(status);
  // };
  return (
    <>
      {show === false ? (
        <div>
          <div className={styles['product-page-container']}>
            <Header title={name} />
            <ImageCarousel images={images} />
            <ProductInfo
              name={name}
              description={description}
              mrp={mrp}
              sp={finalSp}
              discount={discount}
              variant={variant_attributes}
              setProductId={setProductId}
            />
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
