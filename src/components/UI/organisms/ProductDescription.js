import React, { useState, useEffect } from 'react';
import styles from 'styles/Description-container.module.scss';
import AnimateHeight from 'react-animate-height';
import images from 'assets/images';
const ProductDescription = (props) => {
  const [height, setHeight] = useState(322);
  const { description, desc_ingredients, howtouse_description, metrological_info } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [height]);
  function onPressContainer() {
    setHeight(height === 322 ? '100%' : 322);
  }
  let descriptionContainerStyle = height === 322 ? 'container' : 'container-tap';
  return (
    <div className={styles[descriptionContainerStyle]}>
      <div className={styles['description-title']}> Everything you need to know</div>
      <div onClick={onPressContainer}>
        <AnimateHeight duration={500} height={height} className={styles['description-container']}>
          <div className={styles['description-sub-container']}>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <div>
              <div className={styles['sub-heading']}>
                <b>Ingredients</b>
              </div>

              <div dangerouslySetInnerHTML={{ __html: desc_ingredients }}></div>
            </div>
            <div>
              <div className={styles['sub-heading']}>
                <b>How to Use</b>
              </div>
              <div dangerouslySetInnerHTML={{ __html: howtouse_description }}></div>
            </div>
            <div>
              <div className={styles['sub-heading']}>
                <b>Additional Info</b>
              </div>
              <div dangerouslySetInnerHTML={{ __html: metrological_info }}></div>
            </div>
          </div>
        </AnimateHeight>
        {height === 322 ? (
          <div className={styles['description-button-container']}>
            <div className={styles['description-button']}>
              Read More
              <div className={styles['arror-style']}>
                <img height={8} width={5} src={images.blue_down_arrow} />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
