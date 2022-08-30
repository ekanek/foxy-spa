import React from 'react';
import styles from 'styles/header.module.scss';

function HeaderTitle(props) {
  const { title } = props;
  return (
    <span className={styles['title-container']}>
      <p className={styles['header-title']}>{title} </p>
    </span>
  );
}

export default HeaderTitle;
