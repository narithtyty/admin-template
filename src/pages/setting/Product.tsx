import { useAtom } from 'jotai';
import { countAtom } from '@/store/counter';
import Button from '@/components/button/Button';
function Product() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <p className="font-bold text-[24px]">Product</p>
      <p>Count: {count}</p>
      <Button title="Click Me" onClick={() => setCount((prevCount) => prevCount + 1)} />
    </div>
  );
}

export default Product;
