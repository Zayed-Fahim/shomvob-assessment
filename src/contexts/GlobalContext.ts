import { createContext } from 'react';

interface GlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
