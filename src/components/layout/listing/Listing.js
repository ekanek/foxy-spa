// import VerticalCard from 'components/UI/cards/vertical-rail-card/VerticalCard';
import ListingCard from 'components/UI/cards/listing-card/ListingCard';
import { capitalize } from 'lodash';
// import styles from '../../product-cards/product-rail/product-rail.module.scss';
const ListingContainerComponents = {
  DefaultsizeProductList: ListingCard,
  //   list:
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
const Listing = (props) => {
  const { list = {} } = props;
  // productItems = {},

  const { content = '', size = '', objects = [] } = list;
  let ContainerComponent = undefined;

  ContainerComponent = ListingContainerComponents[content];
  if (
    content === 'product'
    //   content === 'product' ||
    //   content === 'sku' ||
    //   content === 'media' ||
    //   content === 'artist' ||
    //   content === 'brand'
  ) {
    ContainerComponent =
      ListingContainerComponents[`${capitalize(size)}${capitalize(objects[0].type)}List`];
  }

  // if (content === 'mixed') {
  //   ContainerComponent = Grid.Components[item.type];
  //

  //   let data = productItems.slice(0, display_count);

  console.log('RENDER');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {objects.map((item) => (
        <ContainerComponent key={item.id} list={item} />
      ))}
    </div>
  );
};

export default Listing;
