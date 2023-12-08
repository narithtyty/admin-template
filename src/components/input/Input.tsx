import { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import { onKeyUp } from '@/utils/hook';
function Input({
  value,
  placeholder = '',
  onChange,
  onPaste,
  onKeyDown,
}: {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      className="bg-gray-50 border 
      border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus:border-blue-500 block w-full 
       p-2.5"
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onPaste={onPaste}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
