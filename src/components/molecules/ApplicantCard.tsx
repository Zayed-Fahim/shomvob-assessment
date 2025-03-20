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
    <div className="px-3 sm:px-5 py-4 sm:py-6 border border-[#d7d7d7] rounded-lg bg-white shadow-[0_4px_11px_0_rgba(0,0,0,0.15)] w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-0">
        <div className="flex flex-col sm:flex-row">
          <div className="flex mb-4 sm:mb-0">
            <Input
              type="checkbox"
              className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#d7d7d7] rounded-lg flex-shrink-0"
            />

            <div className="ml-3 sm:ml-6 mr-3 sm:mr-[21px] flex flex-col items-center justify-center gap-y-2 sm:gap-y-[19px]">
              <CustomImage
                width={64}
                height={64}
                src={image}
                alt="Profile"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <div className="text-center max-w-[83px]">
                <p className="text-[#0378E3] text-base sm:text-[20px] font-[500] leading-[120%]">
                  {matchPercentage}
                </p>
                <p className="text-[#0378E3] text-base sm:text-[20px] font-[500] leading-[120%]">
                  Matched
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-2 sm:gap-y-[14px]">
            <h3 className="text-lg sm:text-xl text-[#0F2934] font-[400] leading-[120%] break-words sm:text-nowrap">
              {name} • {age} yrs
            </h3>

            <div className="flex flex-col justify-start items-start gap-y-2 sm:gap-y-4">
              <div className="flex items-center text-base sm:text-[18px] leading-[150%]">
                <Phone
                  aria-label="Phone"
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px] mr-2 sm:mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] break-all sm:text-nowrap">
                  {phone || 'N/A'}
                </p>
              </div>
              <div className="flex items-center text-base sm:text-[18px] leading-[150%]">
                <Location
                  aria-label="Location"
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px] mr-2 sm:mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] break-words sm:text-nowrap">
                  {location || 'N/A'}
                </p>
              </div>
              <div className="flex items-center text-base sm:text-[18px] leading-[150%]">
                <Calendar
                  aria-label="Calendar"
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px] mr-2 sm:mr-[10px] text-[#828282]"
                />
                <p className="text-[#5d5c5c] break-words sm:text-nowrap">
                  {applicationDate || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-4 sm:gap-y-6 lg:pl-4 xl:pl-[149.67px] mt-4 lg:mt-0">
          <div className="flex">
            <Education
              aria-label="Education"
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-[10px] text-[#5d5c5c] flex-shrink-0"
            />
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="font-[400] text-lg sm:text-xl text-[#0F2934] leading-[120%] break-words sm:text-nowrap">
                {education.degree}
              </p>
              <p className="text-base sm:text-[18px] leading-[150%] text-[#828282] ml-1 break-words sm:text-nowrap">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex">
            <Bag
              aria-label="Bag"
              className="h-5 w-5 sm:h-[22px] sm:w-[22px] mr-2 sm:mr-[10px] text-[#5d5c5c] flex-shrink-0"
            />
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="font-[400] text-[#0F2934] text-lg sm:text-xl leading-[120%] break-words sm:text-nowrap">
                {experience.company}
              </p>
              <p className="text-base sm:text-[18px] leading-[150%] text-[#828282] ml-1 break-words sm:text-nowrap">
                {experience.position}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:justify-end gap-x-4 sm:gap-x-8 mt-4 lg:mt-0 lg:pr-4 xl:pr-[65px]">
          {actions.map((action, index) => (
            <ActionButton key={index} text={action} />
          ))}
        </div>
      </div>
    </div>
  );
};
