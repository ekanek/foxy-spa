// import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styles from 'styles/Description-container.module.scss';
import images from 'assets/images';
const ProductDescriptionShort = (props) => {
  const { description, show, setShow } = props;
  // const [showDesc, setShowDesc] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={styles['container']} onClick={handleClick}>
      <div className={styles['description-title']}> Everything you need to know</div>
      <div className={styles['description-short-container']}>
        <AnimateHeight duration={500} height={300} className={styles['description-sub-container']}>
          <div className={styles['description-content-container']}>
            <div
              className={styles['description-content']}
              dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </AnimateHeight>
        <div className={styles['description-button-container']}>
          <div className={styles['description-button']}>
            Read More
            <div className={styles['arrow-style']}>
              <img height={8} width={5} src={images.blue_down_arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionShort;
