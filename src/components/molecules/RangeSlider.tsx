'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface RangeSliderProps {
  minValue?: number;
  maxValue?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  minGap?: number;
  onChange?: (values: { min: number; max: number }) => void;
  backgroundColor?: string;
  rangeColor?: string;
  thumbColor?: string;
  trackHeight?: string;
  className?: string;
}

export const RangeSlider = ({
  minValue = 100,
  maxValue = 10000,
  step = 100,
  initialMin = 1000,
  initialMax = 7000,
  minGap = 500,
  onChange = () => {},
  backgroundColor = 'bg-[#d7d7d7]',
  rangeColor = 'bg-white',
  thumbColor = 'bg-[#828282]',
  trackHeight = 'h-[3px]',
  className = ''
}: RangeSliderProps) => {
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  // Update thumb positions
  const calculateThumbs = useCallback(() => {
    const newMinThumb = ((minPrice - minValue) / (maxValue - minValue)) * 100;
    const newMaxThumb =
      100 - ((maxPrice - minValue) / (maxValue - minValue)) * 100;

    setMinThumb(newMinThumb);
    setMaxThumb(newMaxThumb);

    onChange({ min: minPrice, max: maxPrice });
  }, [minPrice, maxPrice, minValue, maxValue, onChange]);

  // Min price change
  const handleMinChange = useCallback(
    (value: number) => {
      const newMinPrice = Math.max(
        minValue,
        Math.min(value, maxPrice - minGap)
      );
      setMinPrice(newMinPrice);
    },
    [maxPrice, minValue, minGap]
  );

  // Max price change
  const handleMaxChange = useCallback(
    (value: number) => {
      const newMaxPrice = Math.min(
        maxValue,
        Math.max(value, minPrice + minGap)
      );
      setMaxPrice(newMaxPrice);
    },
    [minPrice, maxValue, minGap]
  );

  // Handle input change for sliders
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) handleMinChange(value);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) handleMaxChange(value);
  };

  // Effect to update thumb positions
  useEffect(() => {
    calculateThumbs();
  }, [minPrice, maxPrice, calculateThumbs]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        {/* Hidden Range Inputs */}
        <input
          type="range"
          step={step}
          min={minValue}
          max={maxValue}
          value={minPrice}
          onChange={handleMinInputChange}
          className="absolute pointer-events-none appearance-none z-20 w-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          step={step}
          min={minValue}
          max={maxValue}
          value={maxPrice}
          onChange={handleMaxInputChange}
          className="absolute pointer-events-none appearance-none z-20 w-full opacity-0 cursor-pointer"
        />

        {/* Track & Range */}
        <div className={`relative ${trackHeight}`}>
          <div
            className={`absolute left-0 right-0 top-0 bottom-0 rounded-md ${backgroundColor}`}
          />
          <div
            className={`absolute top-0 bottom-0 rounded-md ${rangeColor}`}
            style={{ left: `${minThumb}%`, right: `${maxThumb}%` }}
          />
        </div>

        {/* Thumb Controls */}
        <div
          className={`absolute z-30 w-5 h-5 border-2 border-[#828282] bg-[#FFFFFF] ${thumbColor} rounded-full -mt-3 cursor-pointer`}
          style={{ left: `${minThumb}%`, transform: 'translateX(-50%)' }}
        />
        <div
          className={`absolute z-30 w-5 h-5 border-2 border-[#828282] bg-[#FFFFFF] ${thumbColor} rounded-full -mt-3 cursor-pointer`}
          style={{ right: `${maxThumb}%`, transform: 'translateX(50%)' }}
        />
      </div>

      {/* Min & Max Input Fields */}
      <div className="flex justify-between items-center pt-5">
        <input
          type="text"
          maxLength={5}
          value={minPrice}
          onChange={handleMinInputChange}
          className="pl-[10px] pt-[5px] pb-[6px] border border-[#d7d7d7] rounded-lg w-20 text-left focus:outline-none focus:ring-0 text-base font-[400] leading-[120%] text-[#F8F8F8]"
        />
        <input
          type="text"
          maxLength={5}
          value={maxPrice}
          onChange={handleMaxInputChange}
          className="pl-[10px] pt-[5px] pb-[6px] border border-[#d7d7d7] rounded-lg w-20 text-left focus:outline-none focus:ring-0 text-base font-[400] leading-[120%] text-[#F8F8F8]"
        />
      </div>
    </div>
  );
};
