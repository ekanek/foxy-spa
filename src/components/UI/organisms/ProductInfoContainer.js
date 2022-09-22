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
  const [firstVariantAttribute = {}] = variant_attributes;
  const variants = firstVariantAttribute.allowed_values || [];
  const filteredVariants = variants?.filter(({ id = '' }) => id === variantId);
  const isFilteredVariantsPresent = Boolean(filteredVariants.length);
  const [firstFilterVariantAttribute = {}] = filteredVariants;
  const selectedVariants = firstFilterVariantAttribute;
  const {
    images: variantImage = '',
    mrp: variantMrp = '',
    final_sp: finalSp = '',
    discount: variantDiscount = '',
    display_name: displayName = '',
  } = selectedVariants;
  const productImage = variantId && isFilteredVariantsPresent ? variantImage : images;
  const productMrp = variantId && isFilteredVariantsPresent ? variantMrp : mrp;
  const productFinalSp = variantId && isFilteredVariantsPresent ? finalSp : final_sp;
  const productDiscount = variantId && isFilteredVariantsPresent ? variantDiscount : discount;
  const productDisplayName = variantId && isFilteredVariantsPresent ? displayName : 'Select Shade';

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
