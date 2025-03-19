import React from 'react';
import { Input } from '@/components/atoms';

export const ApplicantListHeader = () => {
  return (
    <div className="bg-[#E5F3FF] px-5 py-[18px] h-full w-full max-h-[68px] rounded-lg text-[#0F2934] leading-[120%] text-xl font-semibold">
      <div className="grid grid-cols-3">
        <div className="flex items-center gap-x-6">
          <Input
            type="checkbox"
            className="w-7 h-7 border-2 border-[#d7d7d7] rounded-lg"
          />
          <p>Personal Information</p>
        </div>
        <p className="text-center pr-8">Career Summary</p>
        <p className="text-end pr-[130px]">Action</p>
      </div>
    </div>
  );
};
