import { cn } from '@/utils';
import { Slash } from '@/constants';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <Slash className="h-5 w-5 text-[#828282]" />,
  className = ''
}) => {
  return (
    <nav className={cn('flex items-center', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              onClick={item.onClick}
              className="text-xl leading-[120%] font-[400] text-[#828282] text-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={cn(
                'text-xl leading-[120%] font-[400] text-nowrap',
                index !== 0 ? 'text-[#0378E3]' : 'text-[#828282]'
              )}
            >
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span aria-hidden="true">{separator}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
