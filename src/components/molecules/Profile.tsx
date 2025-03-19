import { CustomImage } from '@/components/atoms';
import { ArrowRight } from '@/constants';

export const Profile = () => {
  return (
    <div className="flex items-center gap-x-[10px] pr-7">
      <CustomImage
        src="/images/dp.png"
        alt="profile-pic"
        height={42}
        width={42}
        className="rounded-full cursor-pointer"
      />
      <div className="flex items-center cursor-pointer">
        <p className="text-[#0F2934] text-[18px] font-[500] leading-[120%] text-nowrap">
          Aleea Nur Tabassum
        </p>
        <ArrowRight className="h-5 w-5 text-[#0F2934] rotate-90" />
      </div>
    </div>
  );
};
