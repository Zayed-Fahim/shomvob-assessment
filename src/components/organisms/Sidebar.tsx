'use client';
import { ArrowRight, Cross } from '@/constants';
import { SIDEBAR_DATA } from '@/data';
import { ISidebarItem, ISubItem } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { CustomImage } from '@/components/atoms';
import { cn } from '@/utils';
import { GlobalContext } from '@/contexts';

export const Sidebar = () => {
  const pathname = usePathname();
  const globalContext = useContext(GlobalContext);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!globalContext) return null;

  const {
    isSidebarOpen,
    isMobileView,
    isTabletView,
    isMobileSidebarOpen,
    closeSidebar
  } = globalContext;

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

  if (!isMobileView && !isTabletView && !isSidebarOpen) return null;

  const sidebarContent = (
    <div
      className={cn(
        'h-screen py-6 sm:py-8 lg:py-10 bg-white transition-all duration-300',
        !isMobileView && !isTabletView && 'w-full max-w-[289px]',
        (isMobileView || isTabletView) &&
          'fixed top-0 left-0 z-40 shadow-xl w-[80%] sm:w-[320px] max-w-full',
        (isMobileView || isTabletView) &&
          !isMobileSidebarOpen &&
          '-translate-x-full'
      )}
    >
      {isMobileSidebarOpen && (
        <div
          className="absolute right-3 top-3 p-3 cursor-pointer"
          onClick={closeSidebar}
        >
          <Cross className="h-7 w-7 sm:h-6 sm:w-6 text-[#0F2934]" />
        </div>
      )}

      <Link
        href="/"
        onClick={() => {
          setExpandedItem(null);
          closeSidebar();
        }}
      >
        <CustomImage
          src="/images/brand-logo.png"
          alt="brand-logo"
          width={171}
          height={114}
          className="w-full px-[80px] sm:px-[45px] lg:px-[59px] pb-[30px] sm:pb-[40px] lg:pb-[54px]"
        />
      </Link>

      <nav className="">
        <ul>
          {SIDEBAR_DATA.map((item) => {
            const isItemActive = isActiveParent(item);
            const isExpanded = expandedItem === item.label;

            return (
              <li key={item.label}>
                <Link
                  href={item?.href}
                  className={cn(
                    'flex items-center justify-between pl-4 sm:pl-5 lg:pl-6 pr-3 sm:pr-4 lg:pr-[17px] py-2 sm:py-[10px] cursor-pointer hover:bg-[#DEEFFF]',
                    isItemActive
                      ? 'text-[#0378E3] bg-[#DEEFFF]'
                      : 'text-[#0F2934]'
                  )}
                  onClick={() => {
                    if (item.children) {
                      toggleExpand(item.label);
                    } else {
                      if (isMobileView || isTabletView) {
                        closeSidebar();
                      }
                    }
                  }}
                >
                  <div className="flex gap-x-2 sm:gap-x-3 lg:gap-x-4 items-center">
                    <div
                      className={cn(
                        isItemActive ? 'text-[#0378E3]' : 'text-[#0F2934]'
                      )}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-base lg:text-xl font-[400] leading-[120%]">
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
                          'w-4 h-4 sm:w-5 sm:h-5 lg:w-[26px] lg:h-[26px]',
                          isItemActive ? 'text-[#0378E3]' : 'text-[#0F2934]'
                        )}
                      />
                    </span>
                  )}
                </Link>
                {isExpanded && item.subItems && (
                  <ul className="pl-[45px] sm:pl-[55px] lg:pl-[66px] transform transition-transform duration-300">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            'block py-2 sm:py-3 text-xs sm:text-sm lg:text-xl font-[400] leading-[120%]',
                            isActive(subItem.href)
                              ? 'text-[#0378E3]'
                              : 'text-[#0F2934]'
                          )}
                          onClick={() => {
                            if (isMobileView || isTabletView) {
                              closeSidebar();
                            }
                          }}
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

  const overlay = (isMobileView || isTabletView) && isMobileSidebarOpen && (
    <div
      className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
      onClick={closeSidebar}
      aria-hidden="true"
    />
  );

  return (
    <>
      {overlay}
      {sidebarContent}
    </>
  );
};
