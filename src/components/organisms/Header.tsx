'use client';
import { Button } from '@/components/atoms';
import { Profile } from '@/components/molecules';
import { Collapse, Dot, Notifications } from '@/constants';
import { GlobalContext } from '@/contexts';
import { useContext } from 'react';

export const Header = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) return null;

  const { isMobileView, isTabletView, toggleMobileSidebar, toggleSidebar } =
    globalContext;

  return (
    <div className="w-full py-[14px] px-4 bg-white shadow-[0_4px_2px_0_rgba(0,0,0,0.15)] sticky top-0 left-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {(isMobileView || isTabletView) && (
            <Button
              onClick={toggleMobileSidebar}
              className="p-2 bg-white rounded-md shadow-md lg:hidden"
              aria-label="Toggle sidebar"
            >
              <Collapse className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F2934]" />
            </Button>
          )}

          {!isMobileView && !isTabletView && (
            <Button
              className="h-12 w-[50px] hover:bg-[#F4F4F5] flex justify-center items-center rounded-lg"
              onClick={toggleSidebar}
            >
              <Collapse className="h-8 w-8 cursor-pointer text-[#0F2934]" />
            </Button>
          )}

          <p className="text-[#0F2934] leading-[120%] text-xl font-[400] text-nowrap">
            Welcome Sayed
          </p>
        </div>
        <div className="flex items-center gap-x-8">
          <div className="h-8 w-8 relative cursor-pointer">
            <Notifications className="text-[#0F2934] h-8 w-8 cursor-pointer" />
            <Dot className="h-12 w-12 absolute text-[#FF0000] -top-4" />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
};
