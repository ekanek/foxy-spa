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

const RatingStar = ({ rating = 0, showRating }) => {
  return (
    <div>
      <div className={styles['rate-stars']}>
        {[...Array(5)].map((e, i) => (
          <EmoStar index={i + 1} key={i} hoverIndex={rating} />
        ))}
        {showRating && <span style={{ paddingLeft: 4 }}>{rating}</span>}
      </div>
    </div>
  );
};
export default RatingStar;
