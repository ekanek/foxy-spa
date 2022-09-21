import { useNavigate } from 'react-router-dom';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import Utilities from 'utils/Utility';
const ProductListCard = ({ product = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
  };
  const widthCard = Utilities.getDynamicWidthForGrid(2, 16);
  const heightCard = Utilities.getDynamicWidthForGrid(2, 16) + 137;
  const imageheight = Utilities.getDynamicWidthForGrid(2, 60);
  const { image_url: image = '', mrp, discount, final_sp, rating, name, slug } = product;
  return (
    <div
      onClick={onClick}
      className={styles['product-card-container']}
      style={{ width: widthCard, height: heightCard }}>
      <div className={styles['product-card-sub-container']}>
        <div className={styles['top-header']}>
          <div className={styles['variant-data-container']}>
            <div className={styles['variant-data']}>
              <div className={styles['variant-color']}></div>
              <div className={styles['variant-name']}>Buff Nude 05</div>
            </div>
          </div>
          <div className={styles['customer-rating']}>
            {/* <span>3.8</span> */}
            <div style={{ fontWeight: 700 }}>{rating}</div>
            <img
              alt="White Star"
              src={images.white_star}
              width={11}
              height={10}
              className={styles['image']}
            />
          </div>
        </div>
        <div className={styles['product-image']}>
          <img alt="Product Image" src={image} height={imageheight} />
        </div>
        <div className={styles['lower-container']}>
          <div className={styles['lower-sub-container']}>
            <div className={styles['shade-name']}>Faces</div>
            <div className={styles['product-info__name']}>{name}</div>
            <div className={styles['pricing']}>
              <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
              <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>

              <span className={styles['pricing__discount-percent']}>{discount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['add-to-bag']}>
        <img alt="Add To Bag" src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default ProductListCard;
