import { Breadcrumb } from '@/components/molecules/Breadcumb';
import { ApplicantList } from '@/components/organisms';

const JobPosts = () => {
  return (
    <div className="mt-14 mb-10">
      <div className="flex flex-col gap-y-3 mb-10">
        <h1 className="text-[28px] font-semibold leading-[120%] text-[#0F2934]">
          Job Posts
        </h1>
        <div>
          <Breadcrumb
            items={[
              { label: 'Recruitment', href: '/recruitment' },
              { label: 'Job Posts' }
            ]}
          />
        </div>
      </div>
      <ApplicantList />
    </div>
  );
};

export default JobPosts;
