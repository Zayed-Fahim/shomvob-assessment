'use client';
import { ReactNode } from 'react';
import { GlobalProvider } from './GlobalProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default Providers;
