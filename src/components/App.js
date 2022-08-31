import React from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.scss';
import styles from 'styles/productPage.module.scss';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
import IngredientsList from 'components/UI/molecules/IngredientsList';
import SiteFooter from 'components/UI/organisms/SiteFooter';

function App() {
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

export default App;
