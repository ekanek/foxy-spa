/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from 'styles/Recommendation.module.scss';
import ReviewContext from 'components/UI/Recommendation/ReviewContext';
const RecommendationContainer = () => {
  return (
    <div className={styles['recommendation-container']}>
      <div className={styles['header']}>
        <div className={styles['heading']}>Why it works for you</div>
        <div className={styles['sub-heading']}>or not; We'll be transparent about it</div>
      </div>
      <ReviewContext />
    </div>
  );
};

export default RecommendationContainer;
