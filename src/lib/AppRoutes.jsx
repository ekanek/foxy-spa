import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductImagePage from 'components/UI/molecules/ProductImagePage';
import ProductReviewPage from 'components/UI/molecules/ProductReviewPage';
import CertificatePage from 'components/UI/molecules/CertificatePage';
import ProductPage from 'components/product-page/ProductPage';
import ProductDescription from 'components/UI/organisms/ProductDescription';
export default function AppRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productImage" element={<ProductImagePage />} />
        <Route path="/AllReview" element={<ProductReviewPage />} />
        <Route path="/brand_certificate" element={<CertificatePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/description" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
