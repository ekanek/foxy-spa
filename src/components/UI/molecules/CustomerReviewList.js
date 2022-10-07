import { List } from 'antd';
import ProductReviewCard from 'components/UI/atoms/product-review/ProductReviewCard';

export default function CustomerReviewList({ reviews = [] }) {
  if (reviews.length === 0) return null;
  return <List dataSource={reviews} renderItem={ProductReviewCard} />;
}
