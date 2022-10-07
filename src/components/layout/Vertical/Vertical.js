import React from 'react';
// import { List } from 'antd';
import FlatList from 'components/List/List';
// import Rail from 'components/layout/Rail/Rail';
const VerticalContainerComponents = () => ({
  list: FlatList,
  // rail: Rail,
});
const Vertical = (props) => {
  // console.log(VerticalContainerComponents);
  const { list = {} } = props;
  const { objects = [] } = list;

  const RenderItem = ({ item }) => {
    // console.log(item.content, 'vertical');
    // const { content } = props;
    let ContainerComponent = undefined;
    // let ContainerComponent = VerticalContainerComponents[content];
    // console.log(ContainerComponent, 'component');
    if (
      item.content === 'product' ||
      item.content === 'list' ||
      item.content === 'brand'
      //   content === 'sku' ||
      //   content === 'media' ||
      //   content === 'artist' ||
    ) {
      ContainerComponent = VerticalContainerComponents()[item.type];
    }
    if (item.content === 'mixed') {
      ContainerComponent = VerticalContainerComponents[item.type];
    }
    if (item === undefined || ContainerComponent === undefined) {
      return null;
    }

    // });
    return <ContainerComponent list={item} />;
  };

  // return <List dataSource={objects} renderItem={RenderItem} />;
  return (
    <div>
      {objects.map((item) => (
        <RenderItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Vertical;
