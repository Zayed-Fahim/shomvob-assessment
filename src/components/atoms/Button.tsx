import { cn } from '@/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'interview' | 'shortlist' | 'confirm' | 'reject';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  size,
  disabled = false,
  className = ''
}) => {
  const variantClasses = {
    interview: 'bg-[#27ACE3]',
    shortlist: 'bg-[#079F56]',
    confirm: 'bg-[#079F56]',
    reject: 'bg-[#FF0000]'
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-[44px] w-[44px]',
    lg: 'h-12 w-12'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-full cursor-pointer flex justify-center items-center',
        variant && variantClasses[variant],
        size && sizeClasses[size],
        className,
        disabledClasses
      )}
    >
      {children}
    </button>
  );
};
