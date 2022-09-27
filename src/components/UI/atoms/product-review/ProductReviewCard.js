import React, { useState } from 'react';
// import AnimateHeight from 'react-animate-height';
import images from 'assets/images';
import styles from 'styles/atoms/ProductReviewCards.module.scss';
import ReviewCreatedAt from 'components/UI/atoms/product-review/ReviewCreatedAt';
import AverageRating from 'components/UI/atoms/product-review/AverageRating';

export default function ProductReviewCard(review) {
  const [isLiked, setIsLiked] = useState(false);
  const [show, setShow] = useState(true);
  const {
    body = '',
    likes_count: likes = '',
    user_name: name = '',
    star = '',
    created_at: createdAt = '',
  } = review;
  const thumb = isLiked ? images.blueLike : images.greyLike;
  const onclick = () => setShow(!show);

  let bodyStyle = '';
  if (show) {
    bodyStyle = 'review-card__text';
  } else {
    bodyStyle = 'normal-text';
  }
  return (
    <div className={styles['review-card']}>
      <AverageRating ratings={star} />
      <div className={styles[bodyStyle]}>{body}</div>
      {body.length > 400 && (
        <div onClick={onclick} className={styles['review-card__button']}>
          {show ? 'Read More' : 'Read Less'}
        </div>
      )}
      <div className={styles['review-card__subtext']}>{name}</div>
      <div className={styles['review-card__flex']}>
        <ReviewCreatedAt createdAt={createdAt} />
        <div className={styles['review-card__likes']}>
          {
            <div
              onClick={() => {
                setIsLiked((isLiked) => !isLiked);
              }}>
              <img src={thumb} alt="Thumb" />
              {likes > 0 && (
                <span className={styles['review-card__num-likes']}>
                  {isLiked ? likes + 1 : likes}
                </span>
              )}
            </div>
          }
        </div>
      </div>
      <div className={styles['review-card__footer']} />
    </div>
  );
}
