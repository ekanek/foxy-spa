import ProductDelivery from 'components/delivery-info/ProductDelivery';
import styles from './productDelivery.module.scss';
const ProductDeliveryContainer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container__head-text']}>Delivery Info</div>
      <ProductDelivery />
    </div>
  );
};

export default ProductDeliveryContainer;
