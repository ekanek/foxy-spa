import React from 'react';
import styles from './productDelivery.module.scss';
import images from 'assets/images';
const textStyle = {
  marginTop: 20,
  position: 'relative',
};
const ProductDelivery = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container__head-text']}>Delivery & Returns</div>
      <div className={styles['delivery-info-container']}>
        <div className={styles['delivery-info-container__content']}>
          <div className={styles['delivery-info-container__top']}>
            <img style={{ marginTop: 16 }} src={images.carIcon} height={15} width={18} />
            <div
              style={{ marginLeft: 10, marginTop: 15 }}
              className={styles['delivery-info-container__text']}>
              {' '}
              Usually delivered in 1-5 days
            </div>
          </div>
          <div style={textStyle} className={styles['delivery-info-container__text']}>
            Add address to see delivery timelines ,COD availability and return pickup options
            <div className={styles['button-container']}>
              <div className={styles['button-container__button']}>
                Add address
                <div className={styles['button-container__arrow-style']}>
                  <img height={8} width={5} src={images.blue_down_arrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDelivery;
