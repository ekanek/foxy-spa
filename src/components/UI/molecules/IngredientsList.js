import React from 'react';
import { List } from 'antd';
import styles from 'styles/Molecules.module.scss';

const IngredientItem = ({ name = '', icon_image_url: image }) => {
  return (
    <div className={styles['ingredient']}>
      <div className={styles['ingredient__name']}> {name}</div>
      <div className={styles['ingredient__image']}>
        <img src={image} width={32} />
      </div>
    </div>
  );
};

function IngredientsList({ ingredients = [] }) {
  if (ingredients.length < 1) return null;
  return (
    <div className={styles['ingredients-list']}>
      <div className={styles['list-title']}>What`s in it ?</div>
      <List dataSource={ingredients} renderItem={IngredientItem} />
    </div>
  );
}

export default IngredientsList;
