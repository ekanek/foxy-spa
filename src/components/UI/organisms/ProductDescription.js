import styles from 'styles/Description-container.module.scss';
import Header from 'components/UI/organisms/Header';
const ProductDescription = (props) => {
  const { description, desc_ingredients, howtouse_description, metrological_info, show, setShow } =
    props;
  function onPressContainer() {
    setShow(!show);
  }
  return (
    <div>
      <Header title="Everything you need to know" onPress={onPressContainer} />
      <div className={styles['container']}>
        <div>
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
                  dangerouslySetInnerHTML={{ __html: desc_ingredients }}></div>
              </div>
              <div>
                <div className={styles['sub-heading']}>
                  <b>How to Use</b>
                </div>
                <div
                  className={styles['description-content']}
                  dangerouslySetInnerHTML={{ __html: howtouse_description }}></div>
              </div>
              <div>
                <div className={styles['sub-heading']}>
                  <b>Additional Info</b>
                </div>
                <div
                  className={styles['description-content']}
                  dangerouslySetInnerHTML={{ __html: metrological_info }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
