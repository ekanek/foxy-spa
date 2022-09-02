import { APP_ASSET_URL } from 'lib/constants';

const images = {
  backButton: require('./images/productPageBack.png'),
  bagButton: require('./images/bagProductPage@3x.png'),
  searchButton: require('./images/searchProductPageNew@3x.png'),
  rightArrow: require('./images/rightChevron@3x.png'),
  foxyPromises: {
    orginial: require('./images/100_percent_originial.png'),
    freeDelivery: require('./images/free_delivery.png'),
    return: require('./images/hassle_free_returns.png'),
    payments: require('./images/secure_payments.png'),
  },
  downloadPlayStore: require('./images/google-play-store-footer.png'),
  instaIcon: require('./images/insta_ic.png'),
  fbIcon: require('./images/fb_ic.png'),
  youtubeIcon: require('./images/youtube_ic.png'),
  twitterIcon: require('./images/twitter_ic.png'),
  white_star: require('./images/rating-pill-star-white.png'),
  rating: {
    product_1_star: {
      uri: `${APP_ASSET_URL}/55/one_star.png`,
    },
    product_2_star: {
      uri: `${APP_ASSET_URL}/68/two_star.png`,
    },
    product_3_star: {
      uri: `${APP_ASSET_URL}/61/three_star.png`,
    },
    product_4_star: {
      uri: `${APP_ASSET_URL}/65/four_star.png`,
    },
    product_5_star: {
      uri: `${APP_ASSET_URL}/57/five_star.png`,
    },
    filled_star: require('./images/star-filled-yellow.png'),
    outline_star: require('./images/star-outline.png'),
  },
  blueLike: require('./images/thumb-up-blue.png'),
  greyLike: require('./images/thumb-up-grey.png'),
};

export default images;
