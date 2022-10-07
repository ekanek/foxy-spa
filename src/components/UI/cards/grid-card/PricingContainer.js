import styles from 'styles/ProductListCard.module.scss';

const PricingContainer = (props) => {
  const { brandName = '', name = '', final_sp = 0, mrp = 0, discount = '' } = props;
  return (
    <div className={styles['lower-container']}>
      <div className={styles['lower-sub-container']}>
        <div className={styles['shade-name']}>{brandName}</div>
        <div className={styles['product-info__name']}>{name}</div>
        <div className={styles['pricing']}>
          <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
          {final_sp < mrp && <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>}

          <span className={styles['pricing__discount-percent']}>{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default PricingContainer;
