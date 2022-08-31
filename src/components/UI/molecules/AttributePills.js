import Pill from 'components/UI/atoms/Pill';
import React from 'react';
import styles from 'styles/Molecules.module.scss';

function AttributePills(props) {
  const { attributes = ['Face serum', 'Skin', 'Boho', 'Plum', 'Categories', 'Boho Botanist'] } =
    props;
  return (
    <div className={styles['attribute-pills']}>
      {attributes.map((text) => (
        <Pill text={text} key={text} />
      ))}
    </div>
  );
}

export default AttributePills;
