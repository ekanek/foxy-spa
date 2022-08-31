import React from 'react';
import styles from 'styles/header.module.scss';

function HeaderTitle(props) {
  const { title } = props;
  return (
    <div className={styles['title-container']}>
      <span className={styles['header-title']}>{title} </span>
    </div>
  );
}

export default HeaderTitle;
