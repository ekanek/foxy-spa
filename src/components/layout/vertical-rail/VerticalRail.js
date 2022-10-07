// import { List } from 'antd';
import VerticalCard from 'components/UI/cards/vertical-rail-card/VerticalCard';
import { capitalize } from 'lodash';
import styles from '../../product-cards/product-rail/product-rail.module.scss';
const RailContainerComponents = {
  DefaultsizeProductVerticalRail: VerticalCard,
  //   salon: Salon,
  //   product: Product,
  //   list: Collection,
  //   product_category: Collection,
  //   brand: Collection,
  //   media_category: Category,
  //   tag: Tag,
  //   user_attribute_allowed_value: UsersAttribute,
  //   DefaultsizeVariantRail: DefaultsizeVariantRail,
  //   HorizontalProductRail: HorizontalProductRail,
  //   LargeProductRail,
  //   SmallProductRail,
  //   LargeVariantRail,
  //   SmallVariantRail,
  //   DefaultsizeVideoRail: DefaultSizeVideoRail,
  //   SmallVideoRail,
  //   LargeVideoRail,
  //   DefaultsizeArtistRail: DefaultSizeArtistRail,
  //   SmallArtistRail,
  //   LargeArtistRail,
  //   DefaultsizeBrandRail: DefaultSizeBrandRail,
  //   SmallBrandRail,
  //   LargeBrandRail,
  //   ingredient: IngredientCollectionCard,
  //   offer: Collection,
  //   routine: RoutineRailWithDescriptionCard,
  //   pro_link: LinkCardRail,
};
const VerticalRail = (props) => {
  const { list = {} } = props;
  // productItems = {},

  const { content = '', size = '', objects = [] } = list;
  let ContainerComponent = undefined;

  ContainerComponent = RailContainerComponents[content];
  if (
    content === 'product'
    //   content === 'product' ||
    //   content === 'sku' ||
    //   content === 'media' ||
    //   content === 'artist' ||
    //   content === 'brand'
  ) {
    ContainerComponent =
      RailContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}VerticalRail`];
  }

  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  //   let data = productItems.slice(0, display_count);
  //   const RenderItem = (item) => {
  //     console.log(ContainerComponent);
  //     if (item === undefined || ContainerComponent === undefined) {
  //       return null;
  //     }
  //     // });
  //     return (
  //       <List.Item>
  //         <ContainerComponent list={item} />
  //       </List.Item>
  //     );
  //   };
  console.log('RENDER');
  return (
    // <List
    //   //   grid={{ column: 2 }}
    //   itemLayout="horizontal"
    //   dataSource={objects}
    //   renderItem={RenderItem}
    // />
    <div className={styles['rails-container']}>
      {objects.map((item) => (
        <ContainerComponent key={item.id} list={item} />
      ))}
    </div>
  );
};

export default VerticalRail;
