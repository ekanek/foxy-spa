import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import Utilities from 'utils/Utility';
import ProductTopContent from 'components/UI/cards/grid-card/ProductTopContent';
const ProductListCard = ({ product = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  if (product.length === 0) {
    return null;
  }
  const widthCard = useMemo(() => Utilities.getDynamicWidthForGrid(2, 16) + 7, []);
  const heightCard = useMemo(() => Utilities.getDynamicWidthForGrid(2, 16) + 110, []);
  const imageHeight = useMemo(() => Utilities.getDynamicWidthForGrid(2, 60), []);
  const {
    image_url: image = '',
    mrp = '',
    discount = '',
    final_sp = '',
    rating = '',
    name = '',
    slug = '',
    variants_details: variantDetails = {},
  } = product;
  const { variants_count: variantsCount = '', variants_shade_images: variantsShadeImages = [] } =
    variantDetails;
  return (
    <div
      onClick={onClick}
      className={styles['product-card-container']}
      style={{ width: widthCard, height: heightCard }}>
      <div className={styles['product-card-sub-container']}>
        <ProductTopContent
          rating={rating}
          variantsCount={variantsCount}
          variantsShadeImages={variantsShadeImages}
        />
        <div className={styles['product-image']}>
          <img alt="Product Image" src={image} height={imageHeight} width={widthCard} />
        </div>
        <div className={styles['lower-container']}>
          <div className={styles['lower-sub-container']}>
            <div className={styles['shade-name']}>FACES</div>
            <div className={styles['product-info__name']}>{name}</div>
            <div className={styles['pricing']}>
              <span className={styles['pricing__sp']}>{'₹' + final_sp}</span>
              {final_sp < mrp && <span className={styles['pricing__mrp']}>{'₹' + mrp}</span>}

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
