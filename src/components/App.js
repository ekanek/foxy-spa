import React from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.scss';
import styles from 'styles/productPage.module.scss';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
import AttributePills from 'components/UI/molecules/AttributePills';

function App() {
  return (
    <div className={styles['product-page-container']}>
      <Header />
      <ImageCarousel />
      <ProductInfo />
      <AttributePills />
    </div>
  );
}

export default App;
