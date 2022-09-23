import useWindowDimensions from 'utils/UseWindowDimensions';
import moment from 'moment';
const { width } = useWindowDimensions();
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
  static getTimeAgo(date) {
    return moment.utc(date).local().startOf('seconds').fromNow();
  }
}
