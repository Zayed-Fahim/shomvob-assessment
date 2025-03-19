import { ICandidate } from '@/types';
import { Input, ActionButton, CustomImage } from '@/components/atoms';
import { Bag, Calendar, Education, Location, Phone } from '@/constants';

export const ApplicantCard: React.FC<ICandidate> = ({
  name,
  image,
  age,
  phone,
  location,
  matchPercentage,
  education,
  experience,
  applicationDate,
  actions
}) => {
  return (
    <div className="px-5 py-6 max-h-[228px] border border-[#d7d7d7] rounded-lg bg-white shadow-[0_4px_11px_0_rgba(0,0,0,0.15)] w-full">
      <div className="grid grid-cols-3">
        {/* Left Section: Checkbox, Profile Image, and Basic Info */}
        <div className="flex">
          <div className="flex">
            <Input
              type="checkbox"
              className="w-8 h-8 border-2 border-[#d7d7d7] rounded-lg"
            />

            <div className="ml-6 mr-[21px] w-full h-full max-w-[83px] max-h-[131px] flex flex-col items-center justify-center gap-y-[19px]">
              <CustomImage
                width={64}
                height={64}
                src={image}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center max-w-[83px] max-h-[48px]">
                <p className="text-[#0378E3] text-[20px] font-[500] leading-[120%]">
                  {matchPercentage}
                </p>
                <p className="text-[#0378E3] text-[20px] font-[500] leading-[120%]">
                  Matched
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-[14px]">
            <h3 className="text-xl text-[#0F2934] font-[400] leading-[120%] text-nowrap">
              {name} • {age} yrs
            </h3>

            <div className="flex flex-col justify-start items-start gap-y-4">
              <div className="flex items-center text-[18px] leading-[150%]">
                <Phone
                  aria-label="Phone"
                  className="h-[22px] w-[22px] mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] text-nowrap">{phone || 'N/A'}</p>
              </div>
              <div className="flex items-center text-[18px] leading-[150%]">
                <Location
                  aria-label="Location"
                  className="h-[22px] w-[22px] mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] text-nowrap">
                  {location || 'N/A'}
                </p>
              </div>
              <div className="flex items-center text-[18px] leading-[150%]">
                <Calendar
                  aria-label="Calendar"
                  className="h-[22px] w-[22px] mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] text-nowrap">
                  {applicationDate || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Education and Experience */}
        <div className="flex flex-col items-start gap-y-6 pl-[149.67px]">
          <div className="flex">
            <Education
              aria-label="Education"
              className="h-6 w-6 mr-[10px] text-[#5d5c5c]"
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-[400] text-xl text-[#0F2934] leading-[120%] text-nowrap">
                {education.degree}
              </p>
              <p className="text-[18px] leading-[150%] text-[#828282] ml-1 text-nowrap">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex">
            <Bag
              aria-label="Bag"
              className="h-[22px] w-[22px] mr-[10px] text-[#5d5c5c]"
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-[400] text-[#0F2934] text-xl leading-[120%] text-nowrap">
                {experience.company}
              </p>
              <p className="text-[18px] leading-[150%] text-[#828282] ml-1 text-nowrap">
                {experience.position}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="h-full flex gap-x-8 items-center justify-end pr-[65px]">
          {actions.map((action, index) => (
            <ActionButton key={index} text={action} />
          ))}
        </div>
      </div>
    </div>
  );
};
