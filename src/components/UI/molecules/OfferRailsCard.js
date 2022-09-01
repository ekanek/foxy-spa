import React, { useState } from 'react';
import styles from 'styles/GridRails.module.scss';
const OfferRailsCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
  }
  let activePromptStyle = isActive ? 'prompt-active' : 'prompt-not-active';
  return (
    <div className={styles[activePromptStyle]} onClick={handleClick}>
      <div className={styles['behind-prompt']}>
        <div className={styles['offer-image']}>
          <div className={styles['prompt-top']}>
            <div className={styles['prompt-header']}>
              <div className={styles['prompt-header-text']}>{props.discount}% off</div>
              <img height={30} width={30} src={props.url} />
            </div>
            <div>
              <div className={styles['prompt-text']}>{props.text}</div>
            </div>
          </div>
          <div className={styles['prompt-bottom-container']}>
            <span className={styles['prompt-bottom-coupon-code']}>{props.couponCode}</span>
            <span className={styles['prompt-bottom-coupon-applied']}>{props.buttonText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferRailsCard;
