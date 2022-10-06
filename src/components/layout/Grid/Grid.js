// import React, { useEffect } from 'react';
import { List } from 'antd';
import ProductListCard from 'components/UI/cards/grid-card/ProductListCard';
import ProductVariantCard from 'components/UI/cards/grid-card/ProductVariantCard';
import Collection from 'components/UI/cards/collections/Collection';
import { capitalize } from 'lodash';
import styles from './grid.module.scss';
const GridContainerComponents = {
  DefaultsizeProductCard: ProductListCard,
  DefaultsizeVariantCard: ProductVariantCard,
  DefaultsizeListCard: Collection,
};
const Grid = (props) => {
  const { list = {} } = props;
  // productItems = {},
  const {
    columns = '',
    content = '',
    size = '',
    objects = [],
    display_count = 0,
    name = '',
    display: layout = '',
    subtitle = '',
  } = list;
  // console.log(name, objects, content);
  let ContainerComponent = undefined;
  ContainerComponent = GridContainerComponents[content];
  if (
    content === 'product' ||
    //   content === 'product' ||
    content === 'sku' ||
    content === 'list'
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
        <ContainerComponent list={item} columns={columns} layout={layout} size={size} />
      </List.Item>
    );
  };
  return (
    <div>
      <div className={styles['header-text']}>{name}</div>
      <div className={styles['header-subtitle']}>{subtitle}</div>
      <List grid={{ column: columns }} dataSource={renderProduct} renderItem={RenderItem} />
    </div>
  );
};

export default Grid;
