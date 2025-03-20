import { ArrowRight } from '@/constants';
import { cn } from '@/utils';

interface FilterSectionProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isLastItem?: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  label,
  isActive,
  onClick,
  isLastItem
}) => {
  return (
    <div
      className={cn(
        'flex justify-between items-center py-4 px-5 text-[#F8F8F8] cursor-pointer hover:bg-[#1A3A4A]',
        !isLastItem && 'border-b border-[#5D5C5C]',
        isLastItem && 'hover:rounded-bl-lg hover:rounded-br-lg',
        isActive && 'border-none'
      )}
      onClick={onClick}
    >
      <p className="text-[18px] leading-[120%] font-[500]">{label}</p>
      <ArrowRight
        className={cn(
          'h-[26px] w-[26px]',
          isActive
            ? 'rotate-90 transform transition-all duration-300'
            : 'rotate-0 transform transition-all duration-300'
        )}
      />
    </div>
  );
};
