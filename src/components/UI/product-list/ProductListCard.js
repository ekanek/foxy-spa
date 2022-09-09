import React from 'react';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
const ProductListCard = ({ image = '' }) => {
  return (
    <div className={styles['product-card-container']}>
      <div className={styles['product-card-sub-container']}>
        <div className={styles['top-header']}>
          <div className={styles['variant-data-container']}>
            <div className={styles['variant-data']}>
              <div className={styles['variant-color']}></div>
              <div className={styles['variant-name']}>Buff Nude 05</div>
            </div>
          </div>
          <div className={styles['customer-rating']}>
            {/* <span>3.8</span> */}
            <div style={{ fontWeight: 700 }}>3.8</div>
            <img src={images.white_star} width={11} height={10} className={styles['image']} />
          </div>
        </div>
        <div className={styles['product-image']}>
          <img src={image} height={150} width={190} />
        </div>
        <div className={styles['lower-container']}>
          <div className={styles['lower-sub-container']}>
            <div className={styles['shade-name']}>Faces</div>
            <div className={styles['product-info__name']}>Weightless Matte Finish Lipstick</div>
            <div className={styles['pricing']}>
              <span className={styles['pricing__sp']}>₹224</span>
              <span className={styles['pricing__mrp']}>₹299</span>

              <span className={styles['pricing__discount-percent']}>20% off</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ backgroundColor: 'white', borderRadius: 20 }}>
        <img src={images.addToBagGreen} height={28} width={28} />
      </div> */}
      <div className={styles['add-to-bag']}>
        <img src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default ProductListCard;
