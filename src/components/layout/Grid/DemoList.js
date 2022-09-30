// import styles from 'styles/ProductListCard.module.scss';
import List from 'components/List/List';
import { useGetBannerDetailsQuery } from 'apis/productApis';
const DemoList = () => {
  const { data: list = {} } = useGetBannerDetailsQuery();
  console.log(list);
  return (
    <div>
      <List list={list} />
    </div>
  );
};

export default DemoList;
