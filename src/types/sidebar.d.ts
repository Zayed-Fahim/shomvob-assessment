import { ReactNode } from 'react';

export interface ISubItem {
  label: string;
  icon: ReactNode | null;
  href: string;
}

export interface ISidebarItem {
  label: string;
  icon: ReactNode;
  href: string;
  children: boolean;
  subItems?: SubItem[];
}
