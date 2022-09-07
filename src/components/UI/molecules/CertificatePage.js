import React from 'react';
import styles from 'styles/productPage.module.scss';
import { useGetProductDetailsQuery } from 'apis/productApis';
import { useNavigate } from 'react-router-dom';
import images from 'assets/images';
const CertificatePage = () => {
  const { data } = useGetProductDetailsQuery(
    'api/v2/products/lakme-enrich-matte-lipstick?variant=7848',
  );
  const { brand } = data;
  const { name = '', certificate_image_url = '' } = brand;
  const navigate = useNavigate();
  return (
    <div className={styles['certificate-container']}>
      <div className={styles['cross-image']} onClick={() => navigate('/')}>
        <img height={12} width={12} src={images.cross_image} />
      </div>
      <div className={styles['certificate-sub-container']}>
        <div className={styles['certificate-header-text']}>
          <div className={styles['headline']}>
            <span style={{ fontSize: 20 }}>100% original products</span>
          </div>
          <div className={styles['headline-content']}>
            All {name} products are sourced directly from brand and/or their authorized resellers
            and are 100% original
          </div>
        </div>
        <div className={styles['certificate-image']}>
          <img src={certificate_image_url} height={400} width={300} />
        </div>
        <div className={styles['outer-container-got-it']}>
          <div onClick={() => navigate('/')} className={styles['got-it-button-style']}>
            <span>Got It!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
