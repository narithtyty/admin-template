import { useAtom } from 'jotai';
import { countAtom } from '@/store/counter';
import Button from '@/components/button/Button';
import { HiUser } from 'react-icons/hi';
function Refund() {
  const [count] = useAtom(countAtom);
  return (
    <div>
      <p className="font-bold text-[24px]">Refund</p>
      <p>Count: {count}</p>
      <Button
        type="secondary"
        title={
          <span className="flex items-center text-center gap-[5px]">
            <HiUser />
            Click ME
          </span>
        }
      />
    </div>
  );
}

export default Refund;
