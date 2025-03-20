'use client';
import { Button } from '@/components/atoms';
import { Cross, Filter } from '@/constants';
import { useState, useRef, useEffect, useContext } from 'react';
import { FilterItem } from '@/components/molecules';
import { cn } from '@/utils';
import { GlobalContext } from '@/contexts';

interface RangeFilterOption {
  label: string;
  type: 'range';
  min: number;
  max: number;
  step: number;
  initialMin: number;
  initialMax: number;
  minGap: number;
}

interface SelectFilterOption {
  label: string;
  type: 'select';
}
interface NumberFilterOption {
  label: string;
  type: 'number';
}

type FilterOption = RangeFilterOption | SelectFilterOption | NumberFilterOption;

export const ApplicantFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const globalContext = useContext(GlobalContext);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilterItem = (label: string) => {
    setActiveFilter(activeFilter === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterOptions: FilterOption[] = [
    {
      label: 'Age',
      type: 'range',
      min: 18,
      max: 65,
      step: 1,
      initialMin: 18,
      initialMax: 65,
      minGap: 2
    },
    {
      label: 'Educational Qualification',
      type: 'select'
    },
    {
      label: 'Year of Experience',
      type: 'number'
    },
    {
      label: 'Expected Salary Range',
      type: 'range',
      min: 1000,
      max: 100000,
      step: 1000,
      initialMin: 1000,
      initialMax: 100000,
      minGap: 1000
    },
    {
      label: 'Gender',
      type: 'select'
    }
  ];

  return (
    <div className="relative" ref={filterRef}>
      <Button
        onClick={toggleFilter}
        className="p-3 lg:px-5 lg:py-4 bg-[#F4F4F5] rounded-lg flex items-center gap-x-2 cursor-pointer"
      >
        <Filter className="h-5 w-5 sm:h-[26px] sm:w-[26px] text-[#828282]" />
      </Button>

      {isOpen && (
        <div
          className={cn(
            'absolute bg-[#0F2934] border border-[#0378E3] rounded-lg w-[280px] sm:w-[330px] z-50 max-h-[80vh] overflow-y-auto',
            !(globalContext!.isMobileView || globalContext!.isTabletView)
              ? 'right-0'
              : 'left-0'
          )}
        >
          <div className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-5 bg-white rounded-tl-lg rounded-tr-lg sticky top-0 z-10">
            <p className="text-base sm:text-[18px] text-[#0F2934] leading-[120%] font-[500]">
              Filters
            </p>
            <Cross
              className="h-5 w-5 sm:h-[26px] sm:w-[26px] text-[#828282] cursor-pointer"
              onClick={() => {
                toggleFilter();
                setActiveFilter(null);
              }}
            />
          </div>

          {filterOptions.map((option, index) => (
            <FilterItem
              key={index}
              label={option.label}
              isLastItem={index === filterOptions.length - 1}
              isActive={activeFilter === option.label}
              toggleFilterItem={toggleFilterItem}
              {...(option.type === 'range'
                ? {
                    type: option.type,
                    min: option.min,
                    max: option.max,
                    step: option.step,
                    initialMin: option.initialMin,
                    initialMax: option.initialMax,
                    minGap: option.minGap
                  }
                : {
                    type: option.type
                  })}
            />
          ))}
        </div>
      )}
    </div>
  );
};
