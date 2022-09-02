import { List } from 'antd';
import ProductReviewCard from 'components/UI/atoms/ProductReviewCard';
import React from 'react';

export default function CustomerReviewList({ reviews = [] }) {
  if (reviews.length === 0) return null;
  return <List dataSource={reviews} renderItem={ProductReviewCard} />;
}
