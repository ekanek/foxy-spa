// import React, { useEffect } from 'react';
import { List } from 'antd';
import ProductListCard from 'components/UI/cards/grid-card/ProductListCard';
import ProductVariantCard from 'components/UI/cards/grid-card/ProductVariantCard';
import { capitalize } from 'lodash';
const GridContainerComponents = {
  DefaultsizeProductCard: ProductListCard,
  DefaultsizeVariantCard: ProductVariantCard,
};
const Grid = (props) => {
  const { list = {} } = props;
  // productItems = {},
  const { columns = '', content = '', size = '', objects = [], display_count = 0 } = list;
  let ContainerComponent = undefined;
  ContainerComponent = GridContainerComponents[content];
  if (
    content === 'product' ||
    //   content === 'product' ||
    content === 'sku'
    // content === 'media' ||
    // content === 'artist' ||
    // content === 'brand'
  ) {
    ContainerComponent =
      GridContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}Card`];
  }

  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  let renderProduct = objects.slice(0, display_count);
  const RenderItem = (item) => {
    if (item === undefined || ContainerComponent === undefined) {
      return null;
    }
    // });
    return (
      <List.Item>
        <ContainerComponent list={item} />
      </List.Item>
    );
  };
  return <List grid={{ column: columns }} dataSource={renderProduct} renderItem={RenderItem} />;
};

export default Grid;
