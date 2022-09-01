import React, { useEffect, useState } from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.scss';
import styles from 'styles/productPage.module.scss';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
import IngredientsList from 'components/UI/molecules/IngredientsList';
import SiteFooter from 'components/UI/organisms/SiteFooter';
import ProductPageShimmer from 'components/UI/molecules/ProductPageShimmer';

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Your code here
  }, []);

  if (!isLoading) {
    return <Shimmer />;
  }
  return (
    <>
      <div className={styles['product-page-container']}>
        <Header />
        <ImageCarousel />
        <ProductInfo />
        <IngredientsList />
      </div>
      <SiteFooter />
    </>
  );
}

const Shimmer = () => {
  return <ProductPageShimmer />;
};

export default App;
