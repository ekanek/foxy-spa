import styles from 'styles/ProductListCard.module.scss';
import List from 'components/List/List';

const ListContainer = ({ listData = {} }) => {
  const { name = '', objects = [] } = listData;
  if (!objects.length) return null;
  return (
    <div style={{ paddingRight: 8 }} className={styles['list-container']}>
      <div className={styles['header-text']}>{name}</div>
      <List list={listData} />
    </div>
  );
};
const ProductListContainer = ({ productList = [] }) => {
  if (productList.length === 0) {
    return null;
  }
  return (
    <div>
      {productList.map((item = []) => (
        <ListContainer key={item.id} listData={item} />
      ))}
    </div>
  );
};

export default ProductListContainer;
