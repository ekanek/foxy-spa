// import { List } from 'antd';
import RailCard from 'components/product-cards/product-rail/RailCard';
import { capitalize } from 'lodash';
import styles from '../../product-cards/product-rail/product-rail.module.scss';
import Collection from 'components/UI/cards/collections/Collection';
const RailContainerComponents = {
  DefaultsizeProductRail: RailCard,
  //   salon: Salon,
  //   product: Product,
  list: Collection,
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
const Rail = (props) => {
  const { list = {} } = props;
  // productItems = {},
  const {
    content = '',
    size = '',
    objects = [],
    display: layout = '',
    name = '',
    subtitle = '',
  } = list;
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
      RailContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}Rail`];
  }
  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  //   let data = productItems.slice(0, display_count);
  if (ContainerComponent === undefined) {
    return null;
  }
  return (
    <div className={styles['container']}>
      <div className={styles['header-text']}>{name}</div>
      <div className={styles['header-subtitle']}>{subtitle}</div>
      <div className={styles['rails-container']}>
        {objects.map((item) => (
          <ContainerComponent key={item.id} list={item} layout={layout} size={size} />
        ))}
      </div>
    </div>
  );
};

export default Rail;
