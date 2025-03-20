import { createContext } from 'react';

interface GlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isMobileView: boolean;
  isTabletView: boolean;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeSidebar: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
