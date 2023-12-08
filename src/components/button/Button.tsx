import DOMPurify from 'dompurify';
import React from 'react';
import { ButtonType } from '@/types';
function Button({
  title = '',
  onClick,
  type = 'primary',
  className = '',
}: {
  title?: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  className?: string;
}) {
  const sanitizedTitle =
    typeof title === 'string'
      ? DOMPurify.sanitize(title)
      : React.isValidElement(title)
        ? title
        : null;

  const primaryStyles = 'bg-red-500 hover:bg-red-600';
  const secondaryStyles = 'bg-blue-500 hover:bg-blue-600';

  return (
    <button
      className={`${className} px-4 py-2 text-white flex items-center justify-center rounded-md ${
        type === 'primary' ? primaryStyles : secondaryStyles
      }`}
      onClick={onClick}
    >
      {sanitizedTitle}
    </button>
  );
}

export default Button;
