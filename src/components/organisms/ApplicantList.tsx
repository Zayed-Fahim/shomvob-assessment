import { candidates } from '@/data/candidates';
import { ApplicantCard, ApplicantListHeader } from '@/components/molecules';

export const ApplicantList = () => {
  return (
    <div className="max-w-[1544px] w-full p-8 bg-white shadow-[0_0_27px_4px_rgba(228,231,234,1)] rounded">
      <div className="flex flex-col gap-y-4">
        <ApplicantListHeader />
        {candidates.map((candidate) => (
          <div key={candidate.id} className="flex flex-col gap-y-6">
            <ApplicantCard {...candidate} />
          </div>
        ))}
      </div>
    </div>
  );
};
