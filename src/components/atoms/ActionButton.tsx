import React from 'react';
import { Check, Cross } from '@/constants';
import { cn } from '@/utils';
import { Button } from '@/components/atoms';

interface ActionButtonProps {
  text: 'Interview' | 'Shortlist' | 'Confirm' | 'Reject';
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick
}) => {
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

  const variantMap = {
    Interview: 'interview',
    Shortlist: 'shortlist',
    Confirm: 'confirm',
    Reject: 'reject'
  } as const;

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Button variant={variantMap[text]} size="md" onClick={onClick}>
        {icon}
      </Button>

      <p className={cn('text-xl leading-[120%]', textStyles[text])}>{text}</p>
    </div>
  );
};
