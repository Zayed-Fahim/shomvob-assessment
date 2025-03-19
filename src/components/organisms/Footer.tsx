import { CopyRight } from '@/constants';

export const Footer = () => {
  return (
    <div className="w-full py-[18px]">
      <div className="leading-[120%] font-[400] text-[#828282] flex items-center justify-center gap-x-[10px]">
        <CopyRight className="h-5 w-5" />
        <p>
          {new Date().getFullYear()} Designed by Shomvob . All Right Reserved.
        </p>
      </div>
    </div>
  );
};
