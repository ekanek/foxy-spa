import { useLocation, useNavigate } from 'react-router-dom';
import styles from 'styles/Description-container.module.scss';
import Header from 'components/UI/organisms/Header';
import sanitizeHtml from 'sanitize-html';
const ProductDescription = () => {
  const { state = {} } = useLocation();
  const navigate = useNavigate();
  const description = state?.description;
  const ingredientsDescription = state?.ingredientsDescription;
  const howToUseDescription = state?.howToUseDescription;
  const metrologicalInfo = state?.metrologicalInfo;
  const onPressBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className={styles['container']}>
        <Header title="Everything you need to know" onPress={onPressBack} />
        <div className={styles['description-container']}>
          <div className={styles['description-sub-container']}>
            <div
              className={styles['description-content']}
              dangerouslySetInnerHTML={{ __html: description }}></div>
            <div>
              <div className={styles['sub-heading']}>
                <b>Ingredients</b>
              </div>

              <div
                className={styles['description-content']}
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(ingredientsDescription) }}></div>
            </div>
            <div>
              <div className={styles['sub-heading']}>
                <b>How to Use</b>
              </div>
              <div
                className={styles['description-content']}
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(howToUseDescription) }}></div>
            </div>
            <div>
              <div className={styles['sub-heading']}>
                <b>Additional Info</b>
              </div>
              <div
                className={styles['description-content']}
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(metrologicalInfo) }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
