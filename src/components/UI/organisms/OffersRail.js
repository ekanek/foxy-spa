import styles from 'styles/GridRails.module.scss';
import OfferRailsCard from 'components/UI/molecules/OfferRailsCard';

const offersData = [
  {
    discount: 10,
    id: '1',
    logo: 'https://www.foxy.in/assets/icons/offer-percentage-c16c81a3b8fbb161536c153ec1f570516deb5b19fcfa98068623c6082a6464f9.png',
    text: 'The Derma Co. - New Launch on Foxy! Flat 10% Off!',
    couponCode: '10DERMACO',
    buttonText: 'View Products',
  },
  {
    discount: 20,
    id: ' 2',
    logo: 'https://www.foxy.in/icons/android.png',
    text: '30% off on any thing you buy only for your order | Min order ₹800 | Max discount ₹300 | Only with digital payment on Foxy App',
    couponCode: 'WELCOMEFOXY',
    buttonText: 'Apply on app',
  },
  {
    discount: 30,
    id: '3',
    logo: 'https://www.foxy.in/icons/android.png',
    text: '30% off on any thing you buy only for your order | Min order ₹800 | Max discount ₹300 | Only on Foxy App',
    couponCode: 'FOXYFIRST',
    buttonText: 'Apply on app',
  },
  {
    discount: 40,
    id: '4',
    logo: 'https://www.foxy.in/assets/icons/offer-percentage-c16c81a3b8fbb161536c153ec1f570516deb5b19fcfa98068623c6082a6464f9.png',
    text: '25% off on any thing you buy only for your order | Min order ₹600 | Max discount ₹250',
    couponCode: 'FOXY25',
    buttonText: 'Valid on all products',
  },
  {
    discount: 50,
    id: '5',
    logo: 'https://www.foxy.in/assets/icons/offer-percentage-c16c81a3b8fbb161536c153ec1f570516deb5b19fcfa98068623c6082a6464f9.png',
    text: '25% off on any thing you buy only for your order | Min order ₹600 | Max discount ₹250',
    couponCode: 'FOXY25',
    buttonText: 'Valid on all products',
  },
];
const OffersRail = () => {
  return (
    <div className={styles['offer-rail']}>
      <div className={styles['list-title']}>Pick your best offer</div>
      <div className={styles['prompts-container']}>
        {offersData.map((offer) => (
          <OfferRailsCard
            key={offer.id}
            discount={offer.discount}
            url={offer.logo}
            text={offer.text}
            couponCode={offer.couponCode}
            buttonText={offer.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
export default OffersRail;
