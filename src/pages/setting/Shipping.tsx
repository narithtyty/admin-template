import { useState } from 'react';
import Input from '@/components/input/Input';
import { atom, useAtom } from 'jotai';
const textAtom = atom('RithSoCool');
function Shipping() {
  const [number, setNumber] = useState('');
  const [mobile, setMobile] = useState('');
  const [visa, setVisa] = useState('');
  const [text, setText] = useAtom(textAtom);
  const [decimal, setDecimal] = useState('');
  const [currency, setCurrency] = useState('');
  return (
    <div className="grid column gap-2">
      <p className="font-bold text-[24px]">Shipping</p>
      <p>Type input text</p>
      <Input
        value={text}
        placeholder="Text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>Type input number only</p>
      <Input
        value={number}
        placeholder="Number"
        onChange={(event) => {
          setNumber(event.target.value.numberOnly());
        }}
      />
      <p>Type input Decimal</p>
      <Input
        value={decimal}
        placeholder="Decimal"
        onChange={(event) => {
          setDecimal(event.target.value.decimalOnly());
        }}
      />
      <p>Type input currency</p>
      <Input
        value={currency}
        textAlignRight={true}
        placeholder="Currency"
        onChange={(event) => {
          setCurrency(event.target.value.formatToCurrency());
        }}
      />
      <p>Type input Mobile Format xxx-xxx-xxxx ({mobile})</p>
      <Input
        value={mobile}
        placeholder="Mobile"
        onChange={(event) =>
          setMobile(event.target.value.numberOnly().formatToPattern('xxx-xxx-xxxx'))
        }
      />
      <p>Type input visa Format xxxx xxxx xxxx xxxx ({visa})</p>
      <Input
        value={visa}
        placeholder="Visa"
        onChange={(event) =>
          setVisa(event.target.value.numberOnly().formatToPattern('xxxx xxxx xxxx xxxx'))
        }
      />
    </div>
  );
}

export default Shipping;
