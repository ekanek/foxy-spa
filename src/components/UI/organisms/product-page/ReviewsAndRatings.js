import { useNavigate } from 'react-router-dom';
import RatingsOverviewHeader from 'components/UI/atoms/product-review/RatingsOverviewHeader';
import CustomerReviewList from 'components/UI/molecules/CustomerReviewList';
import styles from 'styles/Organisms.module.scss';
import RateStars from 'components/UI/molecules/RateStars';
import images from 'assets/images';
const ReviewsAndRatings = ({ rating = 0, reviews = [], reviewsCount = 0, ratingsCount = 0 }) => {
  const navigate = useNavigate();
  console.log(navigate);
  const onClick = () => {
    navigate('/AllReview', { state: { rating, reviews, reviewsCount, ratingsCount } });
    window.scrollTo(0, 0);
  };
  const slicedReviews = reviews.slice(0, 5);
  return (
    <div>
      <div className={`${styles['list-title']} ${styles['margin-left']}`}>Rating and Reviews</div>
      <RatingsOverviewHeader
        rating={rating}
        reviewsCount={reviewsCount}
        ratingsCount={ratingsCount}
      />

      <CustomerReviewList reviews={slicedReviews} />
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          marginTop: -3,
          position: 'absolute',
        }}>
        <div className={styles['review-button-container']} onClick={onClick}>
          <div className={styles['review-button']}>
            View all reviews{' '}
            <div className={styles['arrow-style']}>
              <img height={8} width={5} src={images.blue_down_arrow} />
            </div>
          </div>
        </div>
      </div>

      <RateStars />
    </div>
  );
};

export default ReviewsAndRatings;
