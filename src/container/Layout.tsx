import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HiArrowSmUp } from 'react-icons/hi';
import { useAtom } from 'jotai';
import { open } from '@/store/drawer';
import Button from '@/components/button/Button';
import DrawerSidebar from './DrawerSidebar';
import LayoutSidebar from './LayoutSidebar';
import { useAppStatus } from '@/utils/hook';
const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useAtom(open);
  const maxWidth = '(max-width: 1020px)';
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia(maxWidth).matches);
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // useAppStatus check app status or not
  // useAppStatus();
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.matchMedia(maxWidth).matches;
      setIsSmallScreen(isSmall);
      setSidebarVisible(!isSmall);
      if (isSmall) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const divScrollY = scrollRef.current?.scrollTop || 0;
      setShowButton(divScrollY > 500);
    };

    if (scrollRef.current) {
      window.addEventListener('resize', handleResize);
      scrollRef.current.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        scrollRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    setIsOpen(!isOpen);
  };
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  // Event handler to update the last activity time
  const handleUserActivity = () => {
      setLastActivityTime(Date.now());
  };

  useEffect(() => {
      // Add event listeners for user activity
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);

      // Set up a function to check the idle time
      const checkIdleTime = (deadline : IdleDeadline) => {
          if (deadline.timeRemaining() > 0) {
              const currentTime = Date.now();
              const timeDifference = currentTime - lastActivityTime;

              // Check if the user has been inactive for 5 minutes (300000 ms)
              if (timeDifference > 30000) {
                  // Perform the desired action when the app has been idle for 5 minutes
                  console.log('App has been idle for more than 5 minutes');
                  setLastActivityTime(Date.now());
              }

              // Schedule the next check
              requestIdleCallback(checkIdleTime);
          }
      };

      // Start checking idle time
      requestIdleCallback(checkIdleTime);

      // Clean up event listeners on unmount
      return () => {
          window.removeEventListener('mousemove', handleUserActivity);
          window.removeEventListener('keydown', handleUserActivity);
      };
  }, [lastActivityTime]);
  return (
    <div className="flex h-full w-full">
      {isSmallScreen ? (
        <DrawerSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
          <LayoutSidebar />
        </DrawerSidebar>
      ) : (
        <div
          className={`lg:w-64 bg-gray-800 text-white absolute top-0 left-0 h-full transform transition-transform duration-300 ${
            isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <LayoutSidebar />
        </div>
      )}
      {/* Content */}
      <div
        className={`h-full transition-transform duration-300 fixed ${
          isSidebarVisible
            ? 'lg:translate-x-64 lg:w-[calc(100%-260px)] w-full'
            : 'translate-x-0 w-full'
        }`}
      >
        {/* Header with Toggle Sidebar Button */}
        <header className="flex justify-between items-center bg-gray-700 p-4">
          <Button type="secondary" onClick={toggleSidebar} title="Toggle Sidebar" />
          {/* Other header content */}
        </header>

        {/* Outlet for rendering nested routes */}
        <div className="p-[20px] h-screen overflow-y-auto pb-[100px]" ref={scrollRef}>
          <Outlet />
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
          <p>Copyright &copy; 2023 By Rith-SoCool</p>
        </footer>
        {/* back-to-top */}
        {showButton && (
          <Button
            title={<HiArrowSmUp />}
            onClick={scrollToTop}
            className="fixed bottom-5 right-10 ease-in-out"
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
