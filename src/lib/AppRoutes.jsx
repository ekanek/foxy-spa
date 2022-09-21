import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductImagePage from 'components/UI/molecules/ProductImagePage';
import ProductReviewPage from 'components/UI/molecules/ProductReviewPage';
import CertificatePage from 'components/UI/molecules/CertificatePage';
import HomeScreen from 'components/home-screen/HomeScreen';
import ProductDescription from 'components/UI/organisms/ProductDescription';
export default function AppRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/productImage" element={<ProductImagePage />} />
        <Route path="/AllReview" element={<ProductReviewPage />} />
        <Route path="/brand_certificate" element={<CertificatePage />} />
        <Route path="/product" element={<HomeScreen />} />
        <Route path="/description" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
