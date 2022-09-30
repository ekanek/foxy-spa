// import React, { useEffect } from 'react';
import { List } from 'antd';
import ProductListCard from 'components/UI/cards/grid-card/ProductListCard';
import { capitalize } from 'lodash';
const GridContainerComponents = {
  DefaultsizeProductCard: ProductListCard,
};
const Grid = (props) => {
  const { list = {} } = props;
  // productItems = {},

  const { columns = '', content = '', size = '', objects = [] } = list;
  let ContainerComponent = undefined;

  ContainerComponent = GridContainerComponents[content];
  if (
    content === 'product'
    //   content === 'product' ||
    //   content === 'sku' ||
    //   content === 'media' ||
    //   content === 'artist' ||
    //   content === 'brand'
  ) {
    ContainerComponent =
      GridContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}Card`];
  }

  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  //   let data = productItems.slice(0, display_count);
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
  console.log('RENDER');
  return <List grid={{ column: columns }} dataSource={objects} renderItem={RenderItem} />;
};

export default Grid;
