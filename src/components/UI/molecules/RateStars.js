import React, { useState } from 'react';
import images from 'assets/images';
import styles from 'styles/Molecules.module.scss';
import AverageRating from 'components/UI/atoms/product-review/AverageRating';

const ratingConfig = {
  1: { text: 'Hated it', url: images.rating.product_1_star },
  2: { text: 'It was bad', url: images.rating.product_2_star },
  3: { text: 'Could be better', url: images.rating.product_3_star },
  4: { text: 'Liked it', url: images.rating.product_4_star },
  5: { text: 'Loved it', url: images.rating.product_5_star },
};
const EmoStar = ({ index, hoverIndex, setIndex }) => {
  let image = hoverIndex <= index ? images.rating.outline_star : images.rating.filled_star;
  let comment = '';
  if (hoverIndex === index) {
    const { url, text } = ratingConfig[index];
    image = url;
    comment = text;
  }
  const onMouseEnter = () => {
    setIndex(index);
  };
  return (
    <div className={styles['emo-star']} onMouseEnter={onMouseEnter}>
      <div className={styles['emo-star__centre']}>
        <img src={image} width={45} />
        <div>{comment}</div>
      </div>
    </div>
  );
};

export default function RateStars() {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div className={styles['rate-stars-container']}>
      <div className={styles['rate-stars-container__header']}>
        <div style={{ padding: 1, marginTop: 4 }}>
          <AverageRating />
        </div>

        <div className={styles['rate-stars-container__text']}>How do you rate this product?</div>
      </div>

      <div className={styles['rate-stars']}>
        <EmoStar index={1} hoverIndex={hoverIndex} setIndex={setHoverIndex} />
        <EmoStar index={2} hoverIndex={hoverIndex} setIndex={setHoverIndex} />
        <EmoStar index={3} hoverIndex={hoverIndex} setIndex={setHoverIndex} />
        <EmoStar index={4} hoverIndex={hoverIndex} setIndex={setHoverIndex} />
        <EmoStar index={5} hoverIndex={hoverIndex} setIndex={setHoverIndex} />
      </div>
    </div>
  );
}
