import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import Utilities from 'utils/Utility';
import ProductTopContent from 'components/UI/cards/grid-card/ProductTopContent';
import PricingContainer from 'components/UI/cards/grid-card/PricingContainer';

const ProductVariantCard = ({ list = {} }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { productSlug } });
    window.scroll(0, 0);
  };
  if (list.length === 0) {
    return null;
  }
  const widthCard = Utilities.getDynamicWidthForGrid(2, 16) + 7;
  const heightCard = Utilities.getDynamicWidthForGrid(2, 16) + 110;
  const imageHeight = Utilities.getDynamicWidthForGrid(2, 60);
  const {
    product_slug: productSlug = '',
    brand_name: brandName = '',
    image_url: variantImage = '',
    display_name: variantName = '',
    product_name: name = '',
    rating = '',
    images: productImage = [],
    mrp = '',
    discount = '',
    final_sp = '',
  } = list;

  return (
    <div
      onClick={onClick}
      className={styles['product-card-container']}
      style={{ width: widthCard, height: heightCard }}>
      <div className={styles['product-card-sub-container']}>
        <ProductTopContent rating={rating} variantImage={variantImage} variantName={variantName} />
        <div className={styles['product-image']}>
          <img alt="Product Image" src={productImage[0]} height={imageHeight} width={widthCard} />
        </div>
        <PricingContainer
          brandName={brandName}
          name={name}
          final_sp={final_sp}
          mrp={mrp}
          discount={discount}
        />
      </div>
      <div className={styles['add-to-bag']}>
        <img alt="Add To Bag" src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default ProductVariantCard;
