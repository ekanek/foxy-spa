import React from 'react';
import ProductListCard from 'components/UI/product-list/ProductListCard';
import styles from 'styles/ProductListCard.module.scss';
import { List } from 'antd';
const ProductListContainer = ({ productList = [] }) => {
  const listData = productList[4];
  const { objects: productItems = [] } = listData;
  console.log(productItems);
  return (
    <div className={styles['list-container']}>
      <List
        grid={{ column: 2 }}
        dataSource={productItems}
        renderItem={(item) => (
          <List.Item>
            <ProductListCard product={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductListContainer;
