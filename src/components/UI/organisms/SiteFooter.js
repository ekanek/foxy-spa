// import { List } from 'antd';
// import images from 'assets/images';
import images from 'assets/images';
import React from 'react';
import styles from 'styles/Organisms.module.scss';

// const SiteFooter = () => {
//   return (
//     <div className={styles['ingredient']}>
//       <div className={styles['ingredient__name']}> yoyo</div>
//       <div className={styles['ingredient__image']}>
//         <img src={images.searchButton} width={32} height={32} />
//       </div>
//     </div>
//   );
// };
const topBrandsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const BrandName = (brand) => (
  <a key={brand} className={styles['top-brands__brand']} href={'asds'}>
    {brand}
    {'  |'}
  </a>
);

const TopBrands = (props) => {
  const {
    brands = [
      'WishCare',
      'Atulya',
      'Belora Cosmetics',
      'Plum',
      'WOW Skin Science',
      'Boho Botanist',
    ],
  } = props;
  return (
    <div className={styles['top-brands']}>
      <span className={styles['top-brands__title']}>TOP BRANDS</span>
      <div style={topBrandsStyle}>{brands.map(BrandName)}</div>
    </div>
  );
};

const FoxyPromises = () => {
  return (
    <div className={styles['foxy-promises']}>
      <div className={styles['promise']}>
        <img src={images.foxyPromises.orginial} width={36} height={36} />
        <div className={styles['promise__text']}>100% original products</div>
      </div>
      <div className={styles['promise']}>
        <img src={images.foxyPromises.freeDelivery} width={36} height={36} />
        <div className={styles['promise__text']}>Free Delivery on Prepaid</div>
      </div>
      <div className={styles['promise']}>
        <img src={images.foxyPromises.return} width={36} height={36} />
        <div className={styles['promise__text']}>Hassle Free Returns</div>
      </div>
      <div className={styles['promise']}>
        <img src={images.foxyPromises.payments} width={36} height={36} />
        <div className={styles['promise__text']}>Secure Payments</div>
      </div>
    </div>
  );
};

const PolicyAndConnect = () => {
  return (
    <div className={styles['policy-and-connect']}>
      <div className={styles['policies']}>
        <span className={styles['title']}>POLICIES</span>
        <a href="/shipping-policy.html" target="_blank">
          Payments and Shipping Policy
        </a>
        <a href="/terms-of-use" target="_blank">
          Terms of Use
        </a>
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </div>
      <div className={styles['connect-with-us']}>
        <span className={styles['title']}>DOWNLOAD FOXY APP</span>
        <a
          target="_blank"
          className="google-dwn"
          href="https://play.google.com/store/apps/details?id=in.foxy&amp;hl=en_IN&amp;gl=US"
          rel="noreferrer">
          <img src={images.downloadPlayStore} width={87} height={23} />
        </a>
        <span className={styles['title']}>CONNECT WITH US</span>
        <div>
          <a target="_blank" href="https://www.instagram.com/foxy.famous/" rel="noreferrer">
            <img src={images.instaIcon} width={23} height={23} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCPTAyio-9RJZhH2gaPXkpYQ"
            rel="noreferrer">
            <img src={images.youtubeIcon} width={23} height={23} />
          </a>
          <a target="_blank" href="https://www.facebook.com/FoxyFamous/" rel="noreferrer">
            <img src={images.fbIcon} width={23} height={23} />
          </a>
          <a target="_blank" href="https://twitter.com/FoxyFamous" rel="noreferrer">
            <img style={{ marginTop: 6 }} src={images.twitterIcon} width={23} height={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

function SiteFooter() {
  return (
    <div className={styles['site-footer']}>
      <TopBrands />
      <FoxyPromises />
      <PolicyAndConnect />
    </div>
  );
}

export default SiteFooter;
