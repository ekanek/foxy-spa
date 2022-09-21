import styles from 'styles/ProductListCard.module.scss';
import Grid from 'components/layout/Grid/Grid';
const ProductListContainer = ({ productList = [] }) => {
  if (productList.length === 0) {
    return null;
  }
  const listData = productList[4];
  const {
    objects: productItems = [],
    display = '',
    columns = 0,
    display_count = 0,
    content = '',
    size = '',
    name = '',
  } = listData;

  return (
    <div className={styles['list-container']}>
      <div className={styles['header-text']}>{name}</div>
      <Grid
        productItems={productItems}
        columns={columns}
        display={display}
        display_count={display_count}
        content={content}
        size={size}
      />
    </div>
  );
};

export default ProductListContainer;
