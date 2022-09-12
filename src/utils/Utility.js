import useWindowDimensions from 'utils/UseWindowDimensions';

const { width } = useWindowDimensions();
export default class Utilities {
  static padding = 12;
  static spacingBetweenItems = 4;
  static getDynamicWidthForGrid(numberOfItems, spacing) {
    return (
      (width - (Utilities.padding - Utilities.spacingBetweenItems) * 2 - spacing) / numberOfItems
    );
  }
}
