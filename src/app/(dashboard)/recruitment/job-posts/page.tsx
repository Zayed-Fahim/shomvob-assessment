import { Breadcrumb, Tabs } from '@/components/molecules';
import { ApplicantList } from '@/components/organisms';
import { tabData } from '@/data';

const JobPosts = () => {
  return (
    <div className="mt-14 mb-10 max-w-[1544px]">
      <div className="flex flex-col gap-y-3 mb-10">
        <h1 className="text-[28px] font-semibold leading-[120%] text-[#0F2934]">
          Job Posts
        </h1>

        <div className="flex items-center justify-between">
          <Breadcrumb
            items={[{ label: 'Recruitment' }, { label: 'Job Posts' }]}
          />

          <Tabs
            tabs={Object.values(tabData).map((tab) => ({
              id: tab.id,
              label: tab.label,
              count: tab.count
            }))}
            defaultActiveTab={0}
          />
        </div>
      </div>
      <ApplicantList />
    </div>
  );
};

export default JobPosts;
