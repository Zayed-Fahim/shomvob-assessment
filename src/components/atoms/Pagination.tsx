import { Button } from '@/components/atoms';
import { ArrowLeft, ArrowRight } from '@/constants';
import { cn } from '@/utils';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPrevious,
  onNext
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-end gap-x-6">
      <div className="text-[18px] leading-[150%] font-[400] text-[#0F2934]">
        <p>
          {startItem} - {endItem} of {totalItems}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="w-[40px] h-[35px] border-2 border-[#d7d7d7] rounded-sm"
        >
          <ArrowLeft
            className={cn(
              'h-7 w-7',
              currentPage === 1 ? 'text-[#828282]' : 'text-[#0378E3]'
            )}
          />
        </Button>
        <Button
          onClick={onNext}
          disabled={endItem >= totalItems}
          className="w-[40px] h-[35px] border-2 border-[#d7d7d7] rounded-sm"
        >
          <ArrowRight
            className={cn(
              'h-7 w-7',
              endItem >= totalItems ? 'text-[#828282]' : 'text-[#0378E3]'
            )}
          />
        </Button>
      </div>
    </div>
  );
};
