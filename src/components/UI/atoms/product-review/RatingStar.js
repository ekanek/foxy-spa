import images from 'assets/images';
import styles from 'styles/productPage.module.scss';
const EmoStar = ({ index, hoverIndex }) => {
  let image = hoverIndex < index ? images.rating.outline_star : images.rating.filled_star;
  return (
    <div className={styles['emo-star']}>
      <img alt="Emo Star" src={image} width={18} />
    </div>
  );
};

const RatingStar = ({ rating = 0 }) => {
  return (
    <div className={styles['TopRating']}>
      <div className={styles['rate-stars']}>
        <EmoStar index={1} hoverIndex={rating} />
        <EmoStar index={2} hoverIndex={rating} />
        <EmoStar index={3} hoverIndex={rating} />
        <EmoStar index={4} hoverIndex={rating} />
        <EmoStar index={5} hoverIndex={rating} />
      </div>
    </div>
  );
};
export default RatingStar;
