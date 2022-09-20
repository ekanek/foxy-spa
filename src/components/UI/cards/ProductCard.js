import React from 'react';
import styles from 'styles/ProductListCard.module.scss';
import ProductDescriptionContainer from 'components/UI/molecules/ProductDescriptionContainer';
import images from 'assets/images';
const ProductCard = ({ image = '' }) => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-container__header-title']}>Shop Brillare</div>
      <div className={styles['card-content']}>
        <div className={styles['card-content__image']}>
          <img src={image} height={130} width={130} />
        </div>
        <div className={styles['card-content__info']}>
          <ProductDescriptionContainer offerText={false} showFullTitle={true} />
          <div className={styles['card-content__addtoBag']}>
            <img src={images.addToBag} height={42} width={42} />
          </div>
          <div className={styles['card-content__footer']}>
            <div className={styles['card-content__footer-content']}>
              <span
                className={styles['info__name']}
                style={{ marginTop: 15, fontWeight: 'bold', fontSize: 17 }}>
                Similar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
