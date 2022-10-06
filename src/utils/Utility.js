import useWindowDimensions from 'utils/UseWindowDimensions';
import moment from 'moment';
const { width, height } = useWindowDimensions();
export default class Utilities {
  static padding = 12;
  static spacingBetweenItems = 4;
  static getDynamicWidthForGrid(numberOfItems, spacing) {
    return (
      (width - (Utilities.padding - Utilities.spacingBetweenItems) * 2 - spacing) / numberOfItems
    );
  }
  static getScreenWidth() {
    // Change name to window width
    return width;
  }
  static getScreenHeight() {
    return height;
  }
  static getTimeAgo(date) {
    return moment.utc(date).local().startOf('seconds').fromNow();
  }
  static listDefaultViewHeight = 64;
  static getCardDimentions(columns, content) {
    let spacing = 8;
    let additionalHeight = 0;
    let cardImageRatio = 1;
    let horizontalMargin = 0;
    if (content === 'artistCard') {
      spacing = 24;
      additionalHeight = Utilities.artistNameContainerHeight;
    }
    if (content === 'mediaCard') {
      additionalHeight = 52;
      cardImageRatio = 9 / 16;
    }
    if (columns !== 2) {
      horizontalMargin = 3;
    }
    const viewwidth = Utilities.getDynamicWidthForGrid(columns, spacing) - horizontalMargin;
    const viewheight =
      cardImageRatio * Utilities.getDynamicWidthForGrid(columns, spacing) + additionalHeight;
    const imagewidth = Utilities.getDynamicWidthForGrid(columns, spacing);
    const imageheight = cardImageRatio * Utilities.getDynamicWidthForGrid(columns, spacing);
    return [viewwidth, viewheight, imagewidth, imageheight];
  }
}
