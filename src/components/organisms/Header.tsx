'use client';
import { Collapse, Dot, Notifications } from '@/constants';
import { Profile } from '@/components/molecules';
import { useContext } from 'react';
import { GlobalContext } from '@/contexts';

export const Header = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <div className="w-full py-[14px] px-4 bg-white shadow-[0_4px_2px_0_rgba(0,0,0,0.15)] sticky top-0 left-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="h-12 w-[50px] bg-[#F4F4F5] flex justify-center items-center rounded-lg">
            <Collapse
              className="h-8 w-8 cursor-pointer text-[#0F2934]"
              onClick={globalContext!.toggleSidebar}
            />
          </div>
          <p className="text-[#0F2934] leading-[120%] text-xl font-[400] text-nowrap">
            Welcome Aleea
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
