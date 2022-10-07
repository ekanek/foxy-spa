import styles from './product-info.module.scss';
// import images from 'assets/images';
const ProductInfoContainer = ({ list = {} }) => {
  //   const { discount = '', final_sp = 0, mrp = 0, name, brand = {} } = list;
  const { brand = {}, name = '', mrp = 0 } = list;
  const { name: brandName = '' } = brand;
  return (
    <div className={styles['infoContainer']}>
      <div className={styles['infoContainer__brandName']}>{brandName}</div>
      <div className={styles['infoContainer__name']}>{name}</div>
      <div className={styles['pricing']}>
        <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>
        {/*  <span className={styles['pricing__sp']} style={{ fontSize: 17 }}>
            {'₹' + final_sp}
          </span>
          {final_sp < mrp && (
            <span className={styles['pricing__mrp']} style={{ fontSize: 16 }}>
              {'₹' + mrp}
            </span>
          )}

          <span className={styles['pricing__discount-percent']} style={{ fontSize: 16 }}>
            {discount}
          </span>*/}
      </div>
    </div>
  );
};

export default ProductInfoContainer;
