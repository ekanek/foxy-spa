// import styles from 'styles/ProductListCard.module.scss';
import { useGetBannerDetailsQuery } from 'apis/productApis';
// import List from 'components/List/List';

import RailCard from 'components/product-cards/product-rail/RailCard';
const DemoList = () => {
  const { data: list } = useGetBannerDetailsQuery();
  // console.log(list.objects[1].objects[0].image_url);
  const image = list?.objects[1]?.objects[0]?.image_url;
  return (
    // <div style={{ paddingRight: 8 }} className={styles['list-container']}>
    //   <List list={list} />
    // </div>
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <RailCard image={image} />
    </div>
  );
};

export default DemoList;
