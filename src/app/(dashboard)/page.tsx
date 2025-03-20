import { Flower } from '@/constants';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
      <Flower className="w-[200px] h-[200px]" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#0F2934] text-[28px] leading-[120%] font-semibold">
          Thanks for coming here!
        </h1>
        <p className="text-[24px] text-[#0F2934] font-[400]">
          A flower for your effort!
        </p>
      </div>
    </div>
  );
}
