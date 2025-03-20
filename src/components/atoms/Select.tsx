import { cn } from '@/utils';

interface SelectProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  //   defaultValue,
  className
}) => {
  return (
    <select
      className={cn(
        'w-full px-5 py-[11.5px] rounded-lg bg-white text-[#828282] leading-[120%] text-base focus:outline-none focus:ring-0 appearance-none cursor-pointer',
        className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
