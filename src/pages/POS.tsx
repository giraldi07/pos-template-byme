import POSCart from '../components/pos/POSCart';
import POSProducts from '../components/pos/POSProducts';

export default function POS() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh)]">
      <POSProducts />
      <POSCart />
    </div>
  );
}