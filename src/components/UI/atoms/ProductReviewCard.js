import images from 'assets/images';
import React from 'react';
import styles from 'styles/atoms/ProductReviewCards.module.scss';

export default function ProductReviewCard() {
  return (
    <div className={styles['review-card']}>
      <div className={styles['review-card__customer-rating']}>
        <span>1</span>
        <img src={images.white_star} width={12} className={styles['review-card__image']} />
      </div>

      <div className={styles['review-card__text']}>
        I have ordered sulphate free paraben free hair mask and foxy has given me this mask. The
        cost of that mask is higher than this it was prepaid order and they deliver this even after
        applying coupons they are fooling us
      </div>
      <div className={styles['review-card__subtext']}>Vineeta</div>
      <div className={styles['review-card__flex']}>
        <div className={styles['review-card__subtext']}>2 days ago</div>
        <div className={styles['review-card__likes']}>
          <a>
            <img src={images.white_star} width={12} />
            <span className={styles['review-card__num-likes']}>3</span>
          </a>
        </div>
      </div>
      <div className={styles['review-card__footer']} />
    </div>
  );
}
