import styles from './brand-grid.module.scss';
// import Utilities from 'utils/Utility';

// const imageContainerStyleConfig = {
//  2='imageStyle',

// }

const BrandCardImage = ({ image = '', columns = 0, layout = '' }) => {
  if (!image) return null;
  let imageContainerStyle;
  if (columns === 2) {
    imageContainerStyle = 'imageStyle';
  } else if (columns === 3) {
    imageContainerStyle = 'threeColumnImageStyle';
  } else if (columns === 4) {
    imageContainerStyle = 'fourColumnImageStyle';
  }
  if (layout === 'rail') {
    imageContainerStyle = 'railImageStyle';
  }
  return <img src={image} className={styles[imageContainerStyle]} />;
};
const BrandGrid = ({ list = {}, columns = 0 }) => {
  const { image_url: image = '' } = list;
  return (
    <div className={styles['brandCard-container']}>
      <BrandCardImage image={image} columns={columns} />
    </div>
  );
};
export default BrandGrid;
