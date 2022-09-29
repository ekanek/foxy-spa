import styles from 'styles/ProductListCard.module.scss';
import List from 'components/List/List';
const ProductListContainer = ({ productList = [] }) => {
  if (productList.length === 0) {
    return null;
  }
  const listData = productList[4];
  const { name = '' } = listData;

  return (
    <div style={{ paddingRight: 8 }} className={styles['list-container']}>
      <div className={styles['header-text']}>{name}</div>
      <List list={listData} />
    </div>
  );
};

export default ProductListContainer;
