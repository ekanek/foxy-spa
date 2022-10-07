import { capitalize } from 'lodash';
import HeroRailCard from 'components/UI/cards/hero-card/HeroRailCard';
import styles from '../../product-cards/product-rail/product-rail.module.scss';
const HeroRailContainerComponents = {
  DefaultsizeProductHeroRail: HeroRailCard,
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
const HeroRail = (props) => {
  const { list = {} } = props;
  // productItems = {},

  const { content = '', size = '', objects = [] } = list;
  let ContainerComponent = undefined;

  ContainerComponent = HeroRailContainerComponents[content];
  if (
    content === 'product'
    //   content === 'product' ||
    //   content === 'sku' ||
    //   content === 'media' ||
    //   content === 'artist' ||
    //   content === 'brand'
  ) {
    ContainerComponent =
      HeroRailContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}HeroRail`];
  }

  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  //   let data = productItems.slice(0, display_count);
  return (
    <div className={styles['rails-container']}>
      {objects.map((item) => (
        <ContainerComponent key={item.id} list={item} />
      ))}
    </div>
  );
};

export default HeroRail;
