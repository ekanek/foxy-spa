import React from 'react';
import Header from 'components/UI/organisms/Header';
import '../styles/App.less';
import styles from '../styles/productPage.module.less';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';

function App() {
  return (
    <div className={styles['product-page-container']}>
      <Header />
      <ImageCarousel />
      <ProductInfo />
    </div>
  );
}

export default App;
