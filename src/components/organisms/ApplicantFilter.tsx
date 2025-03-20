'use client';
import { Button } from '@/components/atoms';
import { Cross, Filter } from '@/constants';
import { useState } from 'react';
import { FilterItem } from '../molecules';

export const ApplicantFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilterItem = (label: string) => {
    setActiveFilter(activeFilter === label ? null : label);
  };

  const filterOptions = [
    { label: 'Age', type: 'range' },
    { label: 'Educational Qualification', type: 'normal' },
    { label: 'Year of Experience', type: 'normal' },
    { label: 'Expected Salary Range', type: 'range' },
    { label: 'Gender', type: 'normal' }
  ];

  return (
    <div className="relative">
      <Button
        onClick={toggleFilter}
        className="px-5 py-4 bg-[#F4F4F5] rounded-lg flex items-center gap-x-2 cursor-pointer"
      >
        <Filter className="h-[26px] w-[26px] text-[#828282]" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 bg-[#0F2934] border border-[#0378E3] rounded-lg w-[330px] z-50">
          <div className="flex justify-between items-center py-4 px-5 bg-white rounded-tl-lg rounded-tr-lg">
            <p className="text-[18px] text-[#0F2934] leading-[120%] font-[500]">
              Filters
            </p>
            <Cross
              className="h-[26px] w-[26px] text-[#828282] cursor-pointer"
              onClick={toggleFilter}
            />
          </div>

          {filterOptions.map((option, index) => (
            <FilterItem
              key={index}
              label={option.label}
              isLastItem={index === filterOptions.length - 1}
              isActive={activeFilter === option.label}
              toggleFilterItem={toggleFilterItem}
              showRangeSlider={option.type === 'range'}
            />
          ))}
        </div>
      )}
    </div>
  );
};
