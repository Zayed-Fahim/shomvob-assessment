'use client';
import { candidates } from '@/data';
import { ApplicantCard, ApplicantListHeader } from '@/components/molecules';
import { Button, Pagination } from '@/components/atoms';
import { useState } from 'react';
import { Back, DatePicker, Search, Sort } from '@/constants';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';
import { ApplicantFilter } from '@/components/organisms';

export const ApplicantList = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 50;
  const totalItems = 127;

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(totalItems / itemsPerPage))
    );
  };

  return (
    <div className="p-8 bg-white shadow-[0_0_27px_4px_rgba(228,231,234,1)] rounded w-full">
      <div className="flex flex-col gap-y-8">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-x-4">
            <Button className="w-6 h-6" onClick={() => router.back()}>
              <Back className={cn('h-6 w-6')} />
            </Button>
            <h2 className="text-2xl font-[400] text-[#0F2934] leading-[120%]">
              3456 - Digital Content Creator
            </h2>
          </div>
          <div className="flex gap-x-6">
            <Button className="px-5 py-4 bg-[#F4F4F5] rounded-lg">
              <Search className="h-[26px] w-[26px] text-[#828282]" />
            </Button>

            <ApplicantFilter />

            <Button className="px-5 py-4 bg-[#F4F4F5] rounded-lg">
              <Sort className="h-[26px] w-[26px] text-[#828282]" />
            </Button>
            <Button className="px-5 py-4 bg-[#F4F4F5] rounded-lg">
              <span className="text-[#828282] text-[18px] leading-[120%] pr-[10px]">
                Select date
              </span>
              <DatePicker className="h-5 w-5 text-[#828282]" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <ApplicantListHeader />
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex flex-col gap-y-6">
              <ApplicantCard {...candidate} />
            </div>
          ))}
        </div>

        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};
