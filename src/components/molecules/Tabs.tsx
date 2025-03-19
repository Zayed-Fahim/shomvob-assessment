'use client';
import React, { useState } from 'react';
import { cn } from '@/utils';
import { Button } from '../atoms';

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

  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-x-8">
        {tabs.map((tab, index) => (
          <div key={index} className="flex flex-col items-center gap-y-[5px]">
            <Button
              onClick={() => setActiveTab(index)}
              className={cn(
                'text-2xl font-[400] leading-[120%] text-[#828282] focus:outline-none',
                activeTab === index ? 'text-[#0378E3]' : 'hover:border-gray-300'
              )}
            >
              {tab.label}: {tab.count <= 9 ? `0${tab.count}` : tab.count}
            </Button>
            {activeTab === index && (
              <div className="h-[3px] w-full bg-[#0378E3]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
