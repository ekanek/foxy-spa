import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductImagePage from 'components/UI/molecules/ProductImagePage';
import ProductReviewPage from 'components/UI/molecules/ProductReviewPage';
import CertificatePage from 'components/UI/molecules/CertificatePage';
import HomeScreen from 'components/home-screen/HomeScreen';
import DemoList from 'components/layout/Grid/DemoList';
import ProductDescription from 'components/UI/organisms/ProductDescription';
export default function AppRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<DemoList />} />
        <Route path="/productImage" element={<ProductImagePage />} />
        <Route path="/AllReview" element={<ProductReviewPage />} />
        <Route path="/brand_certificate" element={<CertificatePage />} />
        <Route path="/product" element={<HomeScreen />} />
        <Route path="/description" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
