import { List } from 'antd';
import ProductReviewCard from 'components/UI/atoms/ProductReviewCard';
import React from 'react';

export default function CustomerReviewList() {
  return <List dataSource={[1, 2, 3, 4, 5, 6]} renderItem={ProductReviewCard} />;
}
