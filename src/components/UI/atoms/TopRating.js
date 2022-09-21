import { useNavigate } from 'react-router-dom';
import images from 'assets/images';
import styles from 'styles/productPage.module.scss';
const EmoStar = ({ index, hoverIndex }) => {
  const image = hoverIndex < index ? images.rating.outline_star : images.rating.filled_star;
  return (
    <div className={styles['emo-star']}>
      <img alt="Emo Star" src={image} width={18} />
    </div>
  );
};

const TopRating = ({ rating = 0, brand }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('/brand_certificate', { state: { brand } });
  return (
    <div className={styles['TopRating']}>
      <div>
        <div className={styles['rate-stars']}>
          <EmoStar index={1} hoverIndex={rating} />
          <EmoStar index={2} hoverIndex={rating} />
          <EmoStar index={3} hoverIndex={rating} />
          <EmoStar index={4} hoverIndex={rating} />
          <EmoStar index={5} hoverIndex={rating} />
          <span style={{ paddingLeft: 4 }}>{rating}</span>
        </div>
      </div>
      <div onClick={onClick}>
        <img alt="verified image" height={19} width={19} src={images.verified_image} />
        <span className={styles['verified_text']}> 100% Original</span>
      </div>
    </div>
  );
};
export default TopRating;
