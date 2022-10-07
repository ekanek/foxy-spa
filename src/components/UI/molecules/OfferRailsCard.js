import styles from 'styles/GridRails.module.scss';
const OfferRailsCard = (props) => {
  return (
    <div className={styles['offer-card-container']}>
      <div className={styles['behind-prompt']}></div>
      <div className={styles['main-card-container']}>
        <div className={styles['circle-outside-left']}>
          <div className={styles['circle-inside']}></div>
        </div>
        <div className={styles['circle-outside-right']}>
          <div className={styles['circle-inside']}></div>
        </div>
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
  );
};

export default OfferRailsCard;
