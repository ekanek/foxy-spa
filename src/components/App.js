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
// import ProductReviewCard from 'components/UI/atoms/ProductReviewCard';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';

function App() {
  const { data, isFetching } = useGetProductDetailsQuery();

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
  } = data;
  console.log('PRODUCT DATA', data);
  return (
    <>
      <div className={styles['product-page-container']}>
        <Header />
        <ImageCarousel images={images} />
        <ProductInfo
          name={name}
          description={description}
          mrp={mrp}
          sp={finalSp}
          discount={discount}
        />
        <OffersRail />
        <CustomerReviewList />
        <IngredientsList ingredients={ingredients} />
      </div>
      <SiteFooter />
    </>
  );
}

const Shimmer = () => {
  return <ProductPageShimmer />;
};

export default App;
