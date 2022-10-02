// import styles from 'styles/ProductListCard.module.scss';
import List from 'components/List/List';
import { useGetBannerDetailsQuery } from 'apis/productApis';
const DemoList = () => {
  const { data: list = {} } = useGetBannerDetailsQuery();
  return (
    <div>
      <List list={list} />
    </div>
  );
};

export default DemoList;
