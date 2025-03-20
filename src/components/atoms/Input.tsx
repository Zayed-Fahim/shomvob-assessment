import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactNode;
  iconClassName?: string;
}

export const Input = ({
  className = '',
  iconClassName = '',
  icon,
  ...props
}: InputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn('w-full transition-all duration-200', className)}
      />
      {icon && <div className={cn('absolute', iconClassName)}>{icon}</div>}
    </div>
  );
};
