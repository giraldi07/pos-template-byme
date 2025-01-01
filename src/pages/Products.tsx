import ProductList from '../components/products/ProductList';
import ProductHeader from '../components/products/ProductHeader';

export default function Products() {
  return (
    <div className="space-y-6">
      <ProductHeader />
      <ProductList />
    </div>
  );
}