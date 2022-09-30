import React, { Component } from 'react';
// import { useGetBannerDetailsQuery } from 'apis/productApis';
import Grid from 'components/layout/Grid/Grid';
import lodash from 'lodash';
import Vertical from 'components/layout/Vertical/Vertical';
import Rail from 'components/layout/Rail/Rail';
import HeroRail from 'components/layout/hero-rail/HeroRail';
export default class List extends Component {
  LayoutStyle = {
    //     list: Listing,
    grid: Grid,
    vertical: Vertical,
    rail: Rail,
    heroRail: HeroRail,
    //     rectangularGrid: Grid,
    //     personalizedGrid: PersonalisedGrid,
    //     gridRail: GridRail, // not known
    //     vertical: Vertical, // Home page
    //     rail: Rail, // removed in video
    //     pager: Pager, // on top on offers page, with carousel // this
    //     card: PersonalisedRail, // on tap of Personalised grid
    //     verticalRail: VerticalRail, // not being used currently
    //     storyRail: StoryRail, // not here
    //     reviewGrid: ReviewGrid, // not known
    //     horizontalPlaylist: HorizontalPlaylistCard,
    //     verticalPlaylist: VerticalPlaylistCard,
    //     offerBannerWithRail: OfferBannerWithRail, // On offers page(banner + list of products)
    //     offerTimerBannerWithRail: OfferTimerBannerWithRail, // same as OfferBannerWithRail + timer
    //     cardSequence: CardSequence, // to be curated
    //     tabbed: Tabbed,
    //     expandableList: ExpandableList,
    //     matchedProduct: PersonalizedHorizontal,
    //     section: Section,
    //     listWithIngredients: ListWithIngredients,
    //     personalizedHorizontal: PersonalizedHorizontal,
    //     heroRail: PersonalizedHorizontal,
    //     swipableCards: SwipeInitiateCard,
    //     personalisedOffersRail: PersonalisedOffersRail,
    //     tickingBanners: TickingBanners,
    //     bottomSearchContainer: BottomSearch,
    //     unimplemented: CardSequence,
    //     staggeredGrid: StaggeredGrid,
  };
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   const { data: list } = useGetBannerDetailsQuery();
  //   console.log(list);
  //   this.setState({ list: list });
  // }
  render() {
    let { list = {} } = this.props;
    // if (Utility.isBlank(list) && Utility.isPresent(itemData)) {
    //     list = itemData;
    //   }
    //   if (Utility.isBlank(list) && Utility.isPresent(callbackData)) {
    //     list = callbackData;
    //   }

    //   if (Utility.isBlank(list) && !connectionError && !serverError) {
    //     return null;
    //   }
    //   if (Utility.isPresent(callbackData) && paginate) {
    //     list = callbackData;
    //   }

    let {
      display = list.display,
      //     showBanner = true,
      //     refreshing,
      //     showRating = false,
      //     displayCount,
      //     feed = false,
      //     search = false,
      //     onboarding = false,
      //     onCardClick = null,
      //     toggleCartVisibility,
      //     allVideosId = '', // to be used for all videos banner in artist page or product page
      //     index,
      //     searchQuery,
      //     elementItemCounts, // used for analytics events
      //     ignoreMinCount,
      //     listName,
      //     refreshOfferStrip,
      //     maxFreeItemsToSelect,
      //     showToast,
      //     listKey,
      //     toggleUnavailableProductsModal,
      //     checkVisible,
      //     updateSelectedItem,
      //     selectedItem,
      //     showFreeProductScreen,
      //     viewFreeProductScreen,
      //     paginationResult,
      //     isSearchResultScreen,
      //     productAndBrandsOnlySwitchValue,
      //     listContent,
      //     freeProductScreen,
      //     stickyPosition,
      //     selectedFilters,
      //     quickFiltersRef,
      //     onFiltersPress,
      //     getQuickFiltersListRef,
      //     setListRef,
      //     showFooterShimmer,
      //     loadMore,
      //     useInViewPort,
      //     onFoxyLiveRedirection,
      //     filtersEnabled,
      //     onPressResetButton,
      //     abc,
      //     paginateLastItem,
      //     totalItemsInList,
      //     setForceRefreshHomePage = () => {},
      //     filteredSlug,
      //     enableListingBackgroundColor,
      //     unLike,
      //     showEditButton,
      //     editableList,
      //     removeFromList,
      //     disableRefresh = false,
      //     onScrollToIndexFailed,
      //     foxyPoints,
    } = this.props;

    //   const { paginate_last_item } = itemData;

    //   this.displayCountPaginatedItems = displayCount;
    //   if (Utility.isBlank(displayCount)) {
    //     this.displayCountPaginatedItems = list.display_count; // more page sends display count in props
    //   }
    display = lodash.camelCase(display);
    console.log(display, 'akakhk');
    const LayoutComponent = this.LayoutStyle[display];
    //   this.setItems(list, display);
    if (LayoutComponent === undefined) return null;
    return (
      <div>
        <LayoutComponent {...this.props} />
      </div>
    );
  }
}
