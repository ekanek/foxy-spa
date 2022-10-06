import React from 'react';
import styles from './collection-card.module.scss';
import CollectionCard from 'components/UI/cards/collections/CollectionCard';
const Collection = ({ list = {}, columns = 0, size = '', layout = '' }) => {
  const {
    image_url: image = '',
    // mrp = '',
    // discount = '',
    // final_sp = '',
    // rating = '',
    // slug = '',
    // variants_details: variantDetails = {},
    // brand = {},
  } = list;
  return (
    <div className={styles['collection-container']}>
      <CollectionCard image={image} columns={columns} size={size} layout={layout} />
    </div>
  );
};

export default Collection;
