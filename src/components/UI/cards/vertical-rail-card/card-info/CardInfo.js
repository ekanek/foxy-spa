import styles from './card-info.module.scss';

const CardInfo = ({ list = {} }) => {
  const { discount = '', final_sp = 0, mrp = 0, name = '', brand = {}, verticalList } = list;
  const { name: brandName = '' } = brand;
  let offerTextStyle = '';
  if (verticalList) {
    offerTextStyle = 'offer-text';
  } else {
    offerTextStyle = 'list-offer-text';
  }
  return (
    <div className={styles['infoContainer']}>
      <div className={styles['infoContainer__brandName']}>{brandName}</div>
      <div className={styles['infoContainer__name']}>{name}</div>
      <div className={styles['pricing']}>
        {/* <span className={styles['pricing__mrp']}>{'₹' + mrp}</span> */}
        <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
        {final_sp < mrp && <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>}

        <span className={styles['pricing__discount-percent']}>{discount}</span>
      </div>
      <div className={styles[offerTextStyle]}>Get this for 10% off </div>
    </div>
  );
};

export default CardInfo;
