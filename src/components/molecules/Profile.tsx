'use client';
import { CustomImage } from '@/components/atoms';
import { ArrowRight } from '@/constants';
import { GlobalContext } from '@/contexts';
import { useContext } from 'react';

export const Profile = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <div className="flex items-center gap-x-[10px] pr-7">
      <CustomImage
        src="/images/dp.png"
        alt="profile-pic"
        height={42}
        width={42}
        className="rounded-full cursor-pointer"
      />
      {!(globalContext!.isMobileView || globalContext!.isTabletView) && (
        <div className="flex items-center cursor-pointer">
          <p className="text-[#0F2934] text-[18px] font-[500] leading-[120%] text-nowrap">
            Sayed Asif Zayed
          </p>
          <ArrowRight className="h-5 w-5 text-[#0F2934] rotate-90" />
        </div>
      )}
    </div>
  );
};
