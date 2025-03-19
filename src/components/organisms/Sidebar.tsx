'use client';
import { ArrowRight } from '@/constants';
import { SIDEBAR_DATA } from '@/data';
import { ISidebarItem, ISubItem } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CustomImage } from '@/components/atoms';
import { cn } from '@/utils/cn';

export const Sidebar = () => {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(
    'Recruitment'
  );

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const isActive = (href: string) => pathname === href;
  const isActiveParent = (item: ISidebarItem) => {
    return (
      isActive(item.href) ||
      (item.subItems?.some((subItem: ISubItem) => isActive(subItem.href)) ??
        false)
    );
  };

  return (
    <div className="w-full max-w-[289px] h-screen py-10 bg-white">
      <Link href="/" onClick={() => setExpandedItem(null)}>
        <CustomImage
          src="/images/brand-logo.png"
          alt="brand-logo"
          width={171}
          height={114}
          className="w-full px-[59px] pb-[54px]"
        />
      </Link>
      <nav>
        <ul>
          {SIDEBAR_DATA.map((item) => {
            const isItemActive = isActiveParent(item);
            const isExpanded = expandedItem === item.label;

            return (
              <li key={item.label}>
                <Link
                  href={item?.href}
                  className={cn(
                    'flex items-center justify-between pl-6 pr-[17px] py-[10px] cursor-pointer hover:bg-[#DEEFFF]',
                    isItemActive
                      ? 'text-[#0378E3] bg-[#DEEFFF]'
                      : 'text-[#0F2934]'
                  )}
                  onClick={() => item.children && toggleExpand(item.label)}
                >
                  <div className="flex gap-x-4 items-center">
                    <div
                      className={cn(
                        isItemActive ? 'text-[#0378E3]' : 'text-[#0F2934]'
                      )}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xl font-[400] leading-[120%]">
                      {item.label}
                    </span>
                  </div>
                  {item.children && (
                    <span
                      className={cn(
                        'transform transition-transform duration-300',
                        isExpanded && 'rotate-90'
                      )}
                    >
                      <ArrowRight
                        className={cn(
                          'w-[26px] h-[26px]',
                          isItemActive ? 'text-[#0378E3]' : 'text-[#0F2934]'
                        )}
                      />
                    </span>
                  )}
                </Link>
                {isExpanded && item.subItems && (
                  <ul className="pl-[66px] transform transition-transform duration-300">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            'block py-3 text-xl font-[400] leading-[120%]',
                            isActive(subItem.href)
                              ? 'text-[#0378E3]'
                              : 'text-[#0F2934]'
                          )}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
