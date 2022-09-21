import React, { useState } from 'react';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
function ProductInfoContainer({ product }) {
  const [variantId, setVariantId] = useState('');
  const {
    images = [],
    name = '',
    hero_description: description,
    rating = 0,
    variant_attributes,
    brand,
    mrp = 0,
    final_sp = 0,
    discount = '',
  } = product;
  const variants = variant_attributes[0]?.allowed_values;
  if (variants.length === 0) return null;
  const filteredVariants = variants?.filter((item) => item.id === variantId);
  const selectedVariants = filteredVariants[0];
  const productImage = variantId && filteredVariants.length ? selectedVariants?.images : images;
  const productMrp = variantId && filteredVariants.length ? selectedVariants?.mrp : mrp;
  const productFinalSp =
    variantId && filteredVariants.length ? selectedVariants?.final_sp : final_sp;
  const productDiscount =
    variantId && filteredVariants.length ? selectedVariants?.discount : discount;
  const productDisplayName =
    variantId && filteredVariants.length ? selectedVariants?.display_name : 'Select Shade';

  return (
    <>
      <div>
        <ImageCarousel images={productImage} name={name} />
        <ProductInfo
          name={name}
          description={description}
          mrp={productMrp}
          sp={productFinalSp}
          discount={productDiscount}
          variant={variant_attributes}
          variantId={variantId}
          setVariantId={setVariantId}
          rating={rating}
          displayName={productDisplayName}
          brand={brand}
        />
      </div>
    </>
  );
}

export default ProductInfoContainer;
