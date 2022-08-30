import React from 'react';

function HeaderButton(props) {
  const { height = 18, width = 18, image = '', style } = props;
  return (
    <a href="#" className={style}>
      <img src={image} height={height} width={width} />
    </a>
  );
}

export default HeaderButton;
