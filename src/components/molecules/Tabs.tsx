'use client';
import { Button } from '@/components/atoms';
import { cn } from '@/utils';
import React, { useEffect, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  count: number;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: number;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab = 0,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [tabs]);

  return (
    <div className={cn('relative', className)}>
      <div
        ref={scrollContainerRef}
        className={cn(
          'flex items-center overflow-x-auto scrollbar-hide custom-scrollbar',
          isOverflowing ? 'px-2 py-2' : 'px-0'
        )}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center flex-shrink-0',
              index < tabs.length - 1 ? 'mr-3 sm:mr-4 md:mr-6 lg:mr-8' : ''
            )}
          >
            <Button
              onClick={() => setActiveTab(index)}
              className={cn(
                'text-sm sm:text-lg md:text-xl lg:text-2xl font-[400] leading-[120%] text-[#828282] focus:outline-none whitespace-nowrap',
                activeTab === index
                  ? 'text-[#0378E3]'
                  : 'hover:text-[#0378E3]/70'
              )}
            >
              {tab.label}: {tab.count <= 9 ? `0${tab.count}` : tab.count}
            </Button>
            <div
              className={cn(
                'h-[2px] sm:h-[3px] w-full mt-1 rounded-full transition-colors',
                activeTab === index ? 'bg-[#0378E3]' : 'bg-transparent'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
