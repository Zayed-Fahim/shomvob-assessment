'use client';
import { GlobalContext } from '@/contexts';
import { FC, ReactNode, useState, useEffect } from 'react';

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isTabletView, setIsTabletView] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const checkViewportSize = () => {
      setIsMobileView(window.innerWidth < 768);
      setIsTabletView(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkViewportSize();

    window.addEventListener('resize', checkViewportSize);

    return () => window.removeEventListener('resize', checkViewportSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    if (isMobileView || isTabletView) {
      setIsMobileSidebarOpen(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isMobileView,
        isTabletView,
        isMobileSidebarOpen,
        toggleMobileSidebar,
        closeSidebar
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
