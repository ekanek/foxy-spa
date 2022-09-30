import styles from './product-info.module.scss';
// import images from 'assets/images';
// import AttributePills from 'components/UI/molecules/AttributePills';
// import RatingStar from 'components/UI/atoms/product-review/RatingStar';
const ProductInfoContainer = ({ list = {} }) => {
  //   const { discount = '', final_sp = 0, mrp = 0, name, brand = {} } = list;
  const { brand = {}, name = '', mrp = 0 } = list;
  const { name: brandName = '' } = brand;
  //   function Herotitle() {
  //     let titleStyle = '';
  //     if (showFullTitle === true) {
  //       titleStyle = 'product-info__name';
  //     } else {
  //       titleStyle = 'info__truncate-title';
  //     }
  //     return <div className={styles[titleStyle]}>{name}</div>;
  //   }
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
