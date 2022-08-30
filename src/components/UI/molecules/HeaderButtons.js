import images from 'assets/images';
import HeaderButton from 'components/UI/atoms/HeaderButton';
import React from 'react';
import styles from 'styles/buttons.module.scss';

export function BackButton(props) {
  const { height = 18, width = 18 } = props;
  return (
    <HeaderButton
      image={images.backButton}
      height={height}
      width={width}
      style={styles['back-arrow']}
    />
  );
}

export function BagButton(props) {
  const { height = 18, width = 18 } = props;
  return (
    <HeaderButton
      image={images.bagButton}
      height={height}
      width={width}
      style={styles['back-arrow']}
    />
  );
}

export function SearchButton(props) {
  const { height = 18, width = 18 } = props;
  return (
    <HeaderButton
      image={images.searchButton}
      height={height}
      width={width}
      style={styles['back-arrow']}
    />
  );
}
