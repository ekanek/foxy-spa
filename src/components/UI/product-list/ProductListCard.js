import React from 'react';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import Utilities from 'utils/Utility';
const ProductListCard = ({ product = {} }) => {
  let widthCard = Utilities.getDynamicWidthForGrid(2, 16);
  let heightCard = Utilities.getDynamicWidthForGrid(2, 16) + 137;
  let imageheight = Utilities.getDynamicWidthForGrid(2, 60);
  const { image_url: image = '', mrp, discount, final_sp, rating, name } = product;
  return (
    <div
      className={styles['product-card-container']}
      style={{ width: widthCard, height: heightCard }}>
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
            <div style={{ fontWeight: 700 }}>{rating}</div>
            <img src={images.white_star} width={11} height={10} className={styles['image']} />
          </div>
        </div>
        <div className={styles['product-image']}>
          <img src={image} height={imageheight} width={widthCard} />
        </div>
        <div className={styles['lower-container']}>
          <div className={styles['lower-sub-container']}>
            <div className={styles['shade-name']}>Faces</div>
            <div className={styles['product-info__name']}>{name}</div>
            <div className={styles['pricing']}>
              <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
              <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>

              <span className={styles['pricing__discount-percent']}>{discount}</span>
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
