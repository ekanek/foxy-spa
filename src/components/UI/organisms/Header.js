import React from 'react';
import { BackButton, BagButton, SearchButton } from 'components/UI/molecules/HeaderButtons';
import HeaderTitle from 'components/UI/atoms/HeaderTitle';
import styles from 'styles/header.module.scss';

function Header({ title = '', onPress = () => {} }) {
  return (
    <div className={styles['header-container']}>
      <BackButton height={26} width={30} onPress={onPress} />
      <HeaderTitle title={title} />
      <BagButton height={24} width={24} />
      <SearchButton height={24} width={24} />
    </div>
  );
}

export default Header;
