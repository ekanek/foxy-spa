import { List } from 'antd';
import images from 'assets/images';
import React from 'react';
import styles from 'styles/Molecules.module.scss';

const IngredientItem = () => {
  return (
    <div className={styles['ingredient']}>
      <div className={styles['ingredient__name']}> yoyo</div>
      <div className={styles['ingredient__image']}>
        <img src={images.searchButton} width={32} height={32} />
      </div>
    </div>
  );
};

function IngredientsList(props) {
  const { ingredients = ['Face serum', 'Skin', 'Boho', 'Plum', 'Categories', 'Boho Botanist'] } =
    props;
  return (
    <div className={styles['ingredients-list']}>
      <List dataSource={ingredients} renderItem={IngredientItem} />
    </div>
  );
}

export default IngredientsList;
