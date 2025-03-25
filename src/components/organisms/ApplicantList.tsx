'use client';
import { candidates } from '@/data';
import { ApplicantCard, ApplicantListHeader } from '@/components/molecules';
import { Button, Pagination } from '@/components/atoms';
import { useContext, useState } from 'react';
import { Back, DatePicker, Search, Sort } from '@/constants';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';
import { ApplicantFilter } from '@/components/organisms';
import { GlobalContext } from '@/contexts';

export const ApplicantList = () => {
  const router = useRouter();
  const globalContext = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 50;
  const totalItems = 130;

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(totalItems / itemsPerPage))
    );
  };

  return (
    <div className="p-4 sm:p-8 bg-white shadow-[0_0_27px_4px_rgba(228,231,234,1)] rounded w-full">
      <div className="flex flex-col gap-y-4 sm:gap-y-8">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-y-4">
          <div className="flex items-center justify-start gap-x-2 sm:gap-x-4">
            <Button className="w-6 h-6" onClick={() => router.back()}>
              <Back className={cn('h-5 w-5 sm:h-6 sm:w-6')} />
            </Button>
            <h2 className="text-lg sm:text-2xl font-[400] text-[#0F2934] leading-[120%] break-words sm:text-nowrap">
              3456 - Digital Content Creator
            </h2>
          </div>
          <div className="flex gap-3 lg:gap-x-6">
            <Button className="p-3 lg:px-5 lg:py-4 bg-[#F4F4F5] rounded-lg">
              <Search className="h-5 w-5 sm:h-[26px] sm:w-[26px] text-[#828282]" />
            </Button>

            <ApplicantFilter />

            <Button className="p-3 lg:px-5 lg:py-4 bg-[#F4F4F5] rounded-lg">
              <Sort className="h-5 w-5 sm:h-[26px] sm:w-[26px] text-[#828282]" />
            </Button>
            <Button className="p-3 lg:px-5 lg:py-4 bg-[#F4F4F5] rounded-lg flex items-center">
              <span className="text-[#828282] text-sm sm:text-[18px] leading-[120%] pr-1 sm:pr-[10px]">
                Select date
              </span>
              <DatePicker className="h-4 w-4 sm:h-5 sm:w-5 text-[#828282]" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 sm:gap-y-4">
          {!(globalContext!.isMobileView || globalContext!.isTabletView) && (
            <ApplicantListHeader />
          )}
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="flex flex-col gap-y-3 sm:gap-y-6"
            >
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
