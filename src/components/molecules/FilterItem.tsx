import { ArrowRight } from '@/constants';
import { cn } from '@/utils';
import { RangeSlider } from './RangeSlider';

interface FilterItemProps {
  label: string;
  isLastItem?: boolean;
  isActive: boolean;
  toggleFilterItem: (label: string) => void;
  showRangeSlider?: boolean;
}

export const FilterItem: React.FC<FilterItemProps> = ({
  isLastItem,
  label,
  isActive,
  toggleFilterItem,
  showRangeSlider
}) => {
  return (
    <div className="w-full">
      <div
        className={cn(
          'flex justify-between items-center py-4 px-5 text-[#F8F8F8] cursor-pointer hover:bg-[#1A3A4A]',
          !isLastItem && 'border-b border-[#5D5C5C]',
          isLastItem && 'hover:rounded-bl-lg hover:rounded-br-lg',
          isActive && showRangeSlider && 'border-none'
        )}
        onClick={() => toggleFilterItem(label)}
      >
        <p className="text-[18px] leading-[120%] font-[500]">{label}</p>
        <ArrowRight className="h-[26px] w-[26px]" />
      </div>
      {isActive && showRangeSlider && (
        <div className="pl-5 pr-[26px] py-4">
          <RangeSlider
            minValue={0}
            maxValue={50}
            step={1}
            initialMin={0}
            initialMax={50}
            minGap={2}
            onChange={(range) => console.log('Selected Age Range:', range)}
          />
        </div>
      )}
    </div>
  );
};
