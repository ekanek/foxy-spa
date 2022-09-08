import React, { useState, useEffect } from 'react';
import ImageCarousel from 'components/UI/organisms/ImageCarousel';
import ProductInfo from 'components/UI/organisms/ProductInfo';
import { useGetProductDetailsQuery } from 'apis/productApis';
function ProductInfoContainer() {
  const [variantId, setVariantId] = useState('');
  const [variantsData, setVariantsData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [mrpData, setMrpData] = useState('');
  const [finalspData, setFinalspData] = useState('');
  const [discountData, setDiscountData] = useState('');
  const [displayName, setDisplayName] = useState('Shade WM10');
  const { data } = useGetProductDetailsQuery('api/v2/products/lakme-enrich-matte-lipstick');

  useEffect(() => {
    setImageData(data?.images);
    setMrpData(data?.mrp);
    setFinalspData(data?.final_sp);
    setDiscountData(data?.discount);
    setVariantsData(data?.variant_attributes[0]?.allowed_values);
    if (variantId) {
      const filteredData = variantsData?.filter((item) => item.id === variantId);
      const tempData = filteredData?.[0];
      const {
        images: variant_image = [],
        mrp: variant_mrp,
        final_sp: variant_final_sp = '',
        discount: variant_discount = '',
        display_name = '',
      } = tempData;
      setImageData(variant_image);
      setMrpData(variant_mrp);
      setFinalspData(variant_final_sp);
      setDiscountData(variant_discount);
      setDisplayName(display_name);
    }
  }, [data, variantId]);
  const { name = '', hero_description: description, rating = 0, variant_attributes } = data;
  return (
    <>
      <div>
        <ImageCarousel images={imageData} />
        <ProductInfo
          name={name}
          description={description}
          mrp={mrpData}
          sp={finalspData}
          discount={discountData}
          variant={variant_attributes}
          variantId={variantId}
          setVariantId={setVariantId}
          rating={rating}
          displayName={displayName}
        />
      </div>
    </>
  );
}

export default ProductInfoContainer;
