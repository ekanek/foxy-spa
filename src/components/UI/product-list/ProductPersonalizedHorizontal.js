import React from 'react';
import styles from 'styles/ProductListCard.module.scss';
import Utilities from 'utils/Utility';
import AttributePills from 'components/UI/molecules/AttributePills';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
import images from 'assets/images';
const ProductPersonalizedHorizontal = ({ image = '' }) => {
  let cardWidth = Utilities.getScreenWidth() - 58;
  return (
    <div className={styles['hero-rail-card-container']} style={{ width: cardWidth }}>
      <div className={styles['hero-rail-card-container__image']}>
        <img src={image} height={280} width={250} />
      </div>
      <div className={styles['hero-rail-card-container__info']}>
        <div className={styles['hero-rail-card-container__name']}>BRILLARE</div>
        <div className={styles['hero-rail-card-container__title']}>
          Hair Fall Control Oil Shots To Reduce Seasonal Hair Fall(6mlX8)
        </div>
        <div className={styles['hero-rail-card-container__offerText']}>Get this for 10% off</div>
        <div className={styles['hero-rail-card-container__rating']}>
          <RatingStar rating={4} />
        </div>
        <div className={styles['hero-rail-card-container__pills']}>
          <AttributePills />
        </div>

        <div className={styles['pricing']}>
          <span className={styles['pricing__sp']} style={{ fontSize: 17 }}>
            ₹ 397{' '}
          </span>
          <span className={styles['pricing__mrp']} style={{ fontSize: 16 }}>
            ₹ 795
          </span>

          <span className={styles['pricing__discount-percent']} style={{ fontSize: 16 }}>
            50% off
          </span>
        </div>
        <div className={styles['button-container']}>
          <div className={styles['buttons']}>
            <div className={styles['buttons-content']}>
              <img src={images.unlikeImage} height={20} width={20} style={{ marginRight: 4 }} />
              <div className={styles['button-text']} style={{ marginLeft: 5, color: 'black' }}>
                WishList
              </div>
            </div>
          </div>
          <div className={styles['buttons']} style={{ backgroundColor: 'black' }}>
            <div className={styles['buttons-content']}>
              <img style={{ marginRight: 3 }} src={images.addToBagGreen} height={20} width={20} />
              <div className={styles['button-text']} style={{ marginLeft: 5 }}>
                Add To Bag
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPersonalizedHorizontal;
