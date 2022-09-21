import React from 'react';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import AttributePills from 'components/UI/molecules/AttributePills';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
const ProductDescriptionContainer = ({
  showCartButton,
  showPillsAndRating,
  offerText,
  showFullTitle,
}) => {
  function Herotitle() {
    let titleStyle = '';
    if (showFullTitle === true) {
      titleStyle = 'product-info__name';
    } else {
      titleStyle = 'info__truncate-title';
    }
    return (
      <div className={styles[titleStyle]}>
        Hair Fall Control Oil Shots To Reduce Seasonal Hair Fall(6mlX8)
      </div>
    );
  }

  return (
    <div className={styles['vertical-list_infoContainer']}>
      <div className={styles['info']}>
        <div className={styles['info__name']}>BRILLARE</div>
        <Herotitle />
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
        <div className={styles['info__offerText']}>
          {offerText === false ? null : 'Get this for 10% off'}
          {showCartButton && (
            <div className={styles['vertical-list-card__addtoBag']}>
              <img src={images.addToBag} height={42} width={42} />
            </div>
          )}
        </div>
        {showPillsAndRating && (
          <div className={styles['info__rating']}>
            <RatingStar rating={4} />
          </div>
        )}
        {showPillsAndRating && (
          <div className={styles['info__pills']}>
            <AttributePills />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescriptionContainer;
