/* eslint-disable react/no-unescaped-entities */
import styles from 'styles/Recommendation.module.scss';
import ReviewContext from 'components/UI/Recommendation/ReviewContext';
const RecommendationContainer = ({ foxy_match = {}, rating = '' }) => {
  const { title, subtitle } = foxy_match;
  return (
    <div className={styles['recommendation-container']}>
      <div className={styles['header']}>
        <div className={styles['heading']}>{title}</div>
        <div className={styles['sub-heading']}>{subtitle}</div>
      </div>
      <ReviewContext rating={rating} />
    </div>
  );
};

export default RecommendationContainer;
