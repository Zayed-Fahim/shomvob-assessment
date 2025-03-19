import { Check, Cross } from '@/constants';
import { cn } from '@/utils';

interface ActionButtonProps {
  text: 'Interview' | 'Shortlist' | 'Confirm' | 'Reject';
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick
}) => {
  const buttonStyles = {
    Interview: 'bg-[#27ACE3]',
    Shortlist: 'bg-[#079F56]',
    Confirm: 'bg-[#079F56]',
    Reject: 'bg-[#FF0000]'
  };

  const textStyles = {
    Interview: 'text-[#27ACE3]',
    Shortlist: 'text-[#079F56]',
    Confirm: 'text-[#079F56]',
    Reject: 'text-[#FF0000]'
  };

  const icon =
    text === 'Reject' ? (
      <Cross className="text-white h-10 w-10" />
    ) : (
      <Check className="text-white h-9 w-9" />
    );

  return (
    <div className="flex flex-col items-center gap-y-2">
      <button
        className={cn(
          'rounded-full h-[44px] w-[44px] cursor-pointer flex justify-center items-center',
          buttonStyles[text]
        )}
        onClick={onClick}
      >
        {icon}
      </button>

      <p className={cn('text-xl leading-[120%]', textStyles[text])}>{text}</p>
    </div>
  );
};
