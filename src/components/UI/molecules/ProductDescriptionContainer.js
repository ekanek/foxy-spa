import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import AttributePills from 'components/UI/molecules/AttributePills';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
const ProductDescriptionContainer = ({
  showCartButton,
  showPillsAndRating,
  showFullTitle,
  list = {},
}) => {
  const { discount = '', final_sp = 0, mrp = 0, name, brand = {} } = list;
  const { name: brandName = '' } = brand;
  function Herotitle() {
    let titleStyle = '';
    if (showFullTitle === true) {
      titleStyle = 'product-info__name';
    } else {
      titleStyle = 'info__truncate-title';
    }
    return <div className={styles[titleStyle]}>{name}</div>;
  }
  return (
    <div className={styles['vertical-list_infoContainer']}>
      <div className={styles['info']}>
        <div className={styles['info__name']}>{brandName}</div>
        <Herotitle />
        <div className={styles['info__offerText']}>
          Get this for 10% off{' '}
          {showCartButton && (
            <div className={styles['vertical-list-card__addtoBag']}>
              <img alt="Add To Bag" src={images.addToBag} height={42} width={42} />
            </div>
          )}
        </div>
        {showPillsAndRating && (
          <div>
            <div className={styles['info__rating']}>
              <RatingStar rating={4} />
            </div>
            <div className={styles['info__pills']}>
              <AttributePills />
            </div>
          </div>
        )}
        <div className={styles['pricing']} style={{ marginTop: 12 }}>
          <span className={styles['pricing__sp']} style={{ fontSize: 17 }}>
            {'₹' + final_sp}
          </span>
          {final_sp < mrp && (
            <span className={styles['pricing__mrp']} style={{ fontSize: 16 }}>
              {'₹' + mrp}
            </span>
          )}

          <span className={styles['pricing__discount-percent']} style={{ fontSize: 16 }}>
            {discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionContainer;
