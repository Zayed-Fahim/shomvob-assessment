import { Breadcrumb, Tabs } from '@/components/molecules';
import { ApplicantList } from '@/components/organisms';
import { tabData } from '@/data';

const JobPosts = () => {
  return (
    <div className="mt-10 mb-6 lg:mt-14 lg:mb-10 w-full">
      <div className="flex flex-col gap-y-3 mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-semibold leading-[120%] text-[#0F2934]">
          Job Posts
        </h1>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
          <Breadcrumb
            items={[{ label: 'Recruitment' }, { label: 'Job Posts' }]}
            className="w-full md:w-auto"
          />

          <Tabs
            tabs={Object.values(tabData).map((tab) => ({
              id: tab.id,
              label: tab.label,
              count: tab.count
            }))}
            defaultActiveTab={0}
            className="w-full md:w-auto"
          />
        </div>
      </div>

      <ApplicantList />
    </div>
  );
};

export default JobPosts;
