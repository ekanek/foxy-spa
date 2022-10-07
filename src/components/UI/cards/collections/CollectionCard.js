import styles from './collection-card.module.scss';
// import Utilities from 'utils/Utility';

const CardImage = ({ image = '', columns = 0, layout = '' }) => {
  if (!image) return null;
  let imageContainerStyle;
  if (columns === 2) {
    imageContainerStyle = 'imageStyle';
  } else if (columns === 3) {
    imageContainerStyle = 'threeColumnImageStyle';
  }
  if (layout === 'rail') {
    imageContainerStyle = 'railImageStyle';
  }
  return <img src={image} className={styles[imageContainerStyle]} />;
};
const CollectionCard = ({ image = '', columns = 0, layout = '' }) => {
  return (
    <div>
      <CardImage image={image} columns={columns} layout={layout} />
    </div>
  );
};

export default CollectionCard;
