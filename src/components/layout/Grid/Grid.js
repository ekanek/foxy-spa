// import React, { useEffect } from 'react';
import React from 'react';
import { List } from 'antd';
import ProductListCard from 'components/UI/cards/ProductListCard';
import { capitalize } from 'lodash';
const GridContainerComponents = {
  DefaultsizeProductCard: ProductListCard,
};
const Grid = (props) => {
  const { productItems, columns, content, size } = props;

  const getComponents = (item) => {
    // useEffect(() => {
    let ContainerComponent = GridContainerComponents[content];
    if (
      content === 'product'
      //   content === 'product' ||
      //   content === 'sku' ||
      //   content === 'media' ||
      //   content === 'artist' ||
      //   content === 'brand'
    ) {
      ContainerComponent =
        GridContainerComponents[`${capitalize(size)}${capitalize(item.type)}Card`];
    }
    // if (content === 'mixed') {
    //   ContainerComponent = Grid.Components[item.type];
    // }

    if (item === undefined || ContainerComponent === undefined) {
      return null;
    }
    // });
    return (
      <List.Item>
        <ContainerComponent product={item} />
      </List.Item>
    );
  };

  //   let data = productItems.slice(0, display_count);
  return <List grid={{ column: columns }} dataSource={productItems} renderItem={getComponents} />;
};

export default Grid;
