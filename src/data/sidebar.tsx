import {
  Attendance,
  Employee,
  Leave,
  Payroll,
  Profile,
  Recruitment,
  Settings
} from '@/constants';
import { ISidebarItem } from '@/types';

export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    label: 'Employee',
    icon: <Employee className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '#',
    children: true
  },
  {
    label: 'Recruitment',
    icon: <Recruitment className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '#',
    children: true,
    subItems: [
      {
        label: 'Job Posts',
        icon: null,
        href: '/recruitment/job-posts'
      },
      {
        label: 'Onboarding',
        icon: null,
        href: '/recruitment/onboarding'
      }
    ]
  },
  {
    label: 'Payroll',
    icon: <Payroll className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '#',
    children: true
  },
  {
    label: 'Attendance',
    icon: <Attendance className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '#',
    children: true
  },
  {
    label: 'Leave',
    icon: <Leave className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '#',
    children: true
  },
  {
    label: 'Profile',
    icon: <Profile className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '/profile',
    children: false
  },
  {
    label: 'Settings',
    icon: <Settings className="w-[26px] h-[26px] text-[#0F2934]" />,
    href: '/settings',
    children: false
  }
];
