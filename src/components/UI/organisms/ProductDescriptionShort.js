// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import styles from 'styles/Description-container.module.scss';
import images from 'assets/images';
const ProductDescriptionShort = (props) => {
  const {
    description = '',
    ingredientsDescription = '',
    howToUseDescription = '',
    metrologicalInfo = '',
  } = props;
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/description', {
      state: { ingredientsDescription, howToUseDescription, metrologicalInfo, description },
    });
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles['container']} onClick={onClick}>
      <div className={styles['description-title']}> Everything you need to know</div>
      <div className={styles['description-short-container']}>
        <AnimateHeight duration={500} height={300} className={styles['description-sub-container']}>
          <div className={styles['description-content-container']}>
            <div
              className={styles['description-content']}
              dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </AnimateHeight>
        <div className={styles['description-button-container']}>
          <div className={styles['description-button']}>
            Read More
            <div className={styles['arrow-style']}>
              <img height={8} width={5} src={images.blue_down_arrow} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['description-footer']}>
        <div style={{ margin: 10 }}>
          <div className={styles['description-footer_lowest-price']}>
            <img src={images.trendingDown} width={16} height={16} style={{ marginRight: 8 }} />
            <span className={styles['footer-text']}>Lowest price in last 15 days</span>
          </div>
          <div className={styles['description-footer_expiry-date']}>
            <img src={images.featherCalendar} width={16} height={16} style={{ marginRight: 8 }} />
            <span className={styles['footer-text']}>
              Expiry date <span style={{ fontWeight: 'bold' }}>31 Jan 2025</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionShort;
