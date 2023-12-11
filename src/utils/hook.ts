import { useEffect, useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import { useAuth } from '@/auth';
export const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  const key = event.key;
  const regex = /[0-9]+$/gm;
  if (
    regex.test(key) ||
    key.startsWith('Arrow') ||
    key === 'Backspace' ||
    key === 'Delete' ||
    key === 'Tab'
  ) {
    return;
  }
  event.preventDefault();
};

export const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
  const pastedText = event.clipboardData.getData('text');
  const regex = /^[0-9]+$/gm;

  if (!regex.test(pastedText)) {
    event.preventDefault();
  }
};

export const onKeyDownDecimal = (event: KeyboardEvent<HTMLInputElement>) => {
  const key = event.key;
  const regex = /[0-9]+$/gm;
  if (
    regex.test(key) ||
    key.startsWith('Arrow') ||
    key === 'Backspace' ||
    key === 'Delete' ||
    key === 'Tab' ||
    (key === '.' && !event.currentTarget.value.includes('.'))
  ) {
    return;
  }
  event.preventDefault();
};

export const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    const allInputs = document.querySelectorAll<HTMLInputElement>('input');

    const currentIndex = Array.from(allInputs).indexOf(target);

    // Move focus to the next input field if available
    const nextIndex = currentIndex + 1;
    if (nextIndex < allInputs.length) {
      const nextInput = allInputs[nextIndex];
      nextInput.focus();
    } else {
      target.blur();
    }
  }
};

export const useAppStatus = () => {
  const [isActive, setIsActive] = useState(true);
  const [, setActiveTime] = useState(0);
  const { logout } = useAuth();
  const elapsedTimeRef = useRef(0);

  useEffect(() => {
    const onInteraction = () => {
      setIsActive(true);
      elapsedTimeRef.current = 0; // Reset the elapsed time when there is an interaction
    };

    document.addEventListener('keydown', onInteraction);
    document.addEventListener('click', onInteraction);

    // Clean up event listeners when the hook unmounts
    return () => {
      document.removeEventListener('keydown', onInteraction);
      document.removeEventListener('click', onInteraction);
    };
  }, []);

  useEffect(() => {
    const updateActiveTime = () => {
      if (isActive) {
        elapsedTimeRef.current += 1;
        setActiveTime((prevActiveTime) => prevActiveTime + 1);
      }
    };

    const intervalId = setInterval(() => {
      updateActiveTime();

      // Check if the user has been inactive for 30 minutes
      if (elapsedTimeRef.current >= 1800) {
        setIsActive(false);
        logout();
      }
    }, 1000);

    // Clean up interval when the hook unmounts
    return () => clearInterval(intervalId);
  }, [isActive]);

  return { isActive, elapsedTimeRef: elapsedTimeRef.current };
};
