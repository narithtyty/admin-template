import React, { useCallback } from 'react';

export default function DrawerSidebar({
  children,
  isOpen,
  setIsOpen,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <main
      className={
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full')
      }
    >
      <section
        className={
          'w-[255px] max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        {children}
      </section>
      <section className="w-screen h-full cursor-pointer" onClick={handleClose}></section>
    </main>
  );
}
