import { useGetHomePageDetailsQuery } from 'apis/productApis';
import List from 'components/List/List';
const HomePage = () => {
  const { data: list = {} } = useGetHomePageDetailsQuery();
  console.log(list, 'Homepage');
  return (
    <div>
      <List list={list} />
    </div>
  );
};

export default HomePage;
