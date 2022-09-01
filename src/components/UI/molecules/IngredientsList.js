import React from 'react';
import { List } from 'antd';
import styles from 'styles/Molecules.module.scss';

const IngredientItem = ({ name = '', icon_image_url: image }) => {
  return (
    <div className={styles['ingredient']}>
      <div className={styles['ingredient__name']}> {name}</div>
      <div className={styles['ingredient__image']}>
        <img src={image} height={32} />
      </div>
    </div>
  );
};

function IngredientsList({ ingredients = [] }) {
  return (
    <div className={styles['ingredients-list']}>
      <List dataSource={ingredients} renderItem={IngredientItem} />
    </div>
  );
}

export default IngredientsList;
