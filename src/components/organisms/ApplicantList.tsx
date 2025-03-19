import { candidates } from '@/data/candidates';
import { ApplicantCard } from '@/components/molecules';

export const ApplicantList = () => {
  return (
    <div className="max-w-[1544px] w-full p-8 bg-white drop-shadow-[0_0_27px_4px_rgba(228,231,234,1)] rounded flex flex-col gap-y-6 ">
      {candidates.map((candidate) => (
        <div key={candidate.id}>
          <ApplicantCard {...candidate} />
        </div>
      ))}
    </div>
  );
};
