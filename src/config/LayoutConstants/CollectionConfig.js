import Utilities from 'utils/Utility';

const collectionConstants = {
  NUM_OF_CARDS: {
    LIST: 1,
    GRID: 2,
  },
  SPACING: {
    LIST: 0,
    GRID: 8,
  },
  defaultImageWidth: 48,
};
export const COLLECTION = {
  CARD: {
    rail: {
      defaultSize: {
        viewwidth: 136,
        viewheight: 136,
        imagewidth: 136,
        imageheight: 136,
      },
    },
    grid: {
      defaultSize: {
        viewwidth: Utilities.getDynamicWidthForGrid(
          collectionConstants.NUM_OF_CARDS.GRID,
          collectionConstants.SPACING.GRID,
        ),
        viewheight: Utilities.getDynamicWidthForGrid(
          collectionConstants.NUM_OF_CARDS.GRID,
          collectionConstants.SPACING.GRID,
        ),
        imagewidth: Utilities.getDynamicWidthForGrid(
          collectionConstants.NUM_OF_CARDS.GRID,
          collectionConstants.SPACING.GRID,
        ),
        imageheight: Utilities.getDynamicWidthForGrid(
          collectionConstants.NUM_OF_CARDS.GRID,
          collectionConstants.SPACING.GRID,
        ),
      },
    },
    colouredRectangleRail: {
      defaultSize: {
        viewwidth: 170,
        viewheight: 85,
        imagewidth: 80,
        imageheight: 80,
      },
    },
    rectangularGrid: {
      defaultSize: {
        viewwidth: Utilities.getDynamicWidthForGrid(
          collectionConstants.NUM_OF_CARDS.GRID,
          collectionConstants.SPACING.GRID,
        ),
        viewheight:
          Utilities.getDynamicWidthForGrid(
            collectionConstants.NUM_OF_CARDS.GRID,
            collectionConstants.SPACING.GRID,
          ) *
          (85 / 170),
        imagewidth: 80,
        imageheight: 80,
      },
    },
    gridSquareRail: {
      defaultSize: {
        viewwidth: 136,
        viewheight: 136,
        imagewidth: 80,
        imageheight: 80,
      },
    },
    list: {
      defaultSize: {
        viewwidth: Utilities.getScreenWidth(),
        viewheight: Utilities.listDefaultViewHeight,
        imagewidth: collectionConstants.defaultImageWidth,
        imageheight: collectionConstants.defaultImageWidth,
      },
    },
  },
  SCREEN: {},
};
