import React, { useMemo } from 'react';
import styles from 'styles/ProductListCard.module.scss';
import Utilities from 'utils/Utility';
// import images from 'assets/images';
import ProductDescriptionContainer from 'components/UI/molecules/ProductDescriptionContainer';
const VerticalList = ({ image = '' }) => {
  const leftMargin = useMemo(() => Utilities.spacingBetweenItems, []);
  const rightMargin = useMemo(() => Utilities.spacingBetweenItems, []);
  const width = useMemo(() => Utilities.getScreenWidth() - 24, []);
  return (
    <div
      className={styles['vertical-list-card']}
      style={{
        marginLeft: leftMargin,
        marginRight: rightMargin,
        width: width,
      }}>
      <div className={styles['vertical-list-card__image']}>
        <img alt="Product Image" src={image} height={116} width={116} />
      </div>
      <ProductDescriptionContainer showCartButton />
    </div>
  );
};

export default VerticalList;
