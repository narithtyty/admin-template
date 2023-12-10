import React, { useCallback } from 'react';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative mx-[20px] w-full max-w-md p-4 bg-white rounded-lg shadow-md transition-transform transform scale-100 md:scale-95 duration-300">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
