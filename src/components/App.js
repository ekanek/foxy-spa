import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import RecommendationContainer from 'components/UI/Recommendation/RecommendationContainer';
import ProductListContainer from 'components/UI/product-list/ProductListContainer';
function App() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  const { state } = useLocation();
  const productUrl = String(state?.slug);
  console.log(productUrl);
  let url = '';
  if (productUrl === 'undefined') {
    url = 'api/v2/products/lakme-enrich-matte-lipstick';
  } else {
    url = productUrl;
  }
  const { data, isFetching } = useGetProductDetailsQuery(url);
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
    consolidated_list_lower: product_list = [],
    foxy_match = {},
  } = data;
  console.log('PRODUCT DATA', data);

  return (
    <>
      {show === false ? (
        <div>
          <div className={styles['product-page-container']}>
            <Header title={name} onPress={onClick} />
            <ProductInfoContainer data={data} />
            <OffersRail />
            <RecommendationContainer foxy_match={foxy_match} rating={rating} />
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

          {product_list.length !== 0 ? (
            <ProductListContainer productList={product_list} />
          ) : (
            <div></div>
          )}
          <SiteFooter />
          <BuyNowAddToBag />
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
