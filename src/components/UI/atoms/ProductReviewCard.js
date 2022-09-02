import images from 'assets/images';
import React from 'react';
import styles from 'styles/atoms/ProductReviewCards.module.scss';

export default function ProductReviewCard(review) {
  const { body = '', likes_count: likes = '', user_name: name = '', star = '' } = review;
  return (
    <div className={styles['review-card']}>
      <div className={styles['review-card__customer-rating']}>
        <span>{star}</span>
        <img src={images.white_star} width={12} className={styles['review-card__image']} />
      </div>

      <div className={styles['review-card__text']}>{body}</div>
      <div className={styles['review-card__subtext']}>{name}</div>
      <div className={styles['review-card__flex']}>
        <div className={styles['review-card__subtext']}>2 days ago</div>
        <div className={styles['review-card__likes']}>
          {
            <a>
              <img src={images.white_star} width={12} />
              <span className={styles['review-card__num-likes']}>{likes}</span>
            </a>
          }
        </div>
      </div>
      <div className={styles['review-card__footer']} />
    </div>
  );
}
