import { Search } from '@/constants';
import { Input, Select } from '@/components/atoms';
import { FilterSection, RangeSlider } from '@/components/molecules';

interface FilterItemProps {
  label: string;
  isLastItem?: boolean;
  isActive: boolean;
  toggleFilterItem: (label: string) => void;
  type: 'range' | 'select' | 'number';
  min?: number;
  max?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  minGap?: number;
}

export const FilterItem: React.FC<FilterItemProps> = ({
  isLastItem,
  label,
  isActive,
  toggleFilterItem,
  type,
  min,
  max,
  step,
  initialMin,
  initialMax,
  minGap
}) => {
  const handleClick = () => toggleFilterItem(label);

  return (
    <div className="w-full">
      <FilterSection
        label={label}
        isActive={isActive}
        onClick={handleClick}
        isLastItem={isLastItem}
      />

      {isActive &&
        type === 'range' &&
        min !== undefined &&
        max !== undefined && (
          <div className="pl-5 pr-[26px] py-4">
            <RangeSlider
              minValue={min}
              maxValue={max}
              step={step || 1}
              initialMin={initialMin || min}
              initialMax={initialMax || max}
              minGap={minGap || 1}
              onChange={(range) => console.log(`${label} Range:`, range)}
            />
          </div>
        )}

      {isActive &&
        type === 'select' &&
        label === 'Educational Qualification' && (
          <div className="pl-5 pr-[26px] py-4 flex flex-col gap-2">
            <Input
              placeholder="Search Institutes"
              className="px-5 py-[11.5px] rounded-lg placeholder:text-[#828282] bg-white leading-[120%] text-base focus:outline-none focus:ring-0 cursor-pointer"
              icon={<Search />}
              iconClassName="text-[#828282] right-5 top-1/2 translate-x-1/2 -translate-y-1/2 h-5 w-5"
            />
            <Input
              placeholder="Degree Name"
              className="px-5 py-[11.5px] rounded-lg placeholder:text-[#828282] bg-white leading-[120%] text-base focus:outline-none focus:ring-0 cursor-pointer"
              icon={<Search />}
              iconClassName="text-[#828282] right-5 top-1/2 translate-x-1/2 -translate-y-1/2 h-5 w-5"
            />
            <Select
              options={[
                { value: '', label: 'Degree Level' },
                { value: 'Bachelor', label: 'Bachelor' },
                { value: 'Master', label: 'Master' },
                { value: 'PhD', label: 'PhD' }
              ]}
            />
            <Select
              options={[
                { value: '', label: 'Result' },
                { value: 'First Class', label: 'First Class' },
                { value: 'Second Class', label: 'Second Class' },
                { value: 'Third Class', label: 'Third Class' }
              ]}
            />
          </div>
        )}

      {isActive && label === 'Year of Experience' && (
        <div className="pl-5 pr-[26px] py-4">
          <Input
            type="number"
            min={0}
            defaultValue={0}
            className="w-full px-5 py-[11.5px] rounded-lg bg-white text-[#828282] leading-[120%] text-base focus:outline-none focus:ring-0 cursor-pointer"
          />
        </div>
      )}

      {isActive && label === 'Gender' && (
        <div className="pl-5 pr-[26px] py-4">
          <Select
            options={[
              { value: '', label: 'Gender' },
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' }
            ]}
          />
        </div>
      )}
    </div>
  );
};
