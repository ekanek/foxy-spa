import { Breathing, Shimmer } from 'react-shimmer';
import styles from 'styles/Molecules.module.scss';

function ProductPageShimmer() {
  return (
    <div className={styles['product-page-shimmer']}>
      <div style={{ position: 'relative' }}>
        <Breathing duration={1000} height={300} />
        <div className={styles['image-container']}>
          <img
            src={'https://cdn3.foxy.in/media/app_asset/image/99/foxy_icon.gif'}
            width={100}
            height={100}
            className={styles['image-container__image']}
          />
        </div>
      </div>

      <Shimmer className={styles['bar']} duration={1000} height={16} width={320} />
      <Shimmer className={styles['bar']} duration={1000} height={16} width={200} />
      <Shimmer className={styles['bar']} duration={1000} height={16} width={200} />
      <div className={styles['margin-top']} />
      <Shimmer className={styles['bar']} duration={1000} height={16} width={100} />
      <div className={styles['flex-row']}>
        <Shimmer className={styles['bar']} duration={1000} height={16} width={150} />
        <div className={styles['margin-right']} />
        <Shimmer className={styles['bar']} duration={1000} height={16} width={150} />
      </div>
      <div className={styles['margin-top']} />
      <div className={styles['flex-row']}>
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
      </div>
      <div className={styles['flex-row']}>
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
        <Shimmer className={styles['pill']} duration={1000} height={16} width={80} />
      </div>
      <div className={styles['flex-row']}>
        <div className={styles['offer-card']}> </div>
        <div className={styles['offer-card']}> </div>
      </div>
    </div>
  );
}

export default ProductPageShimmer;
