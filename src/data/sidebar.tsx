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
    icon: <Employee className="w-[26px] h-[26px]" />,
    href: '#',
    children: true,
    subItems: [
      {
        label: 'Employee List',
        icon: null,
        href: '/employee/list'
      },
      {
        label: 'Add Employee',
        icon: null,
        href: '/employee/add'
      },
      {
        label: 'Employee Reports',
        icon: null,
        href: '/employee/reports'
      }
    ]
  },
  {
    label: 'Recruitment',
    icon: <Recruitment className="w-[26px] h-[26px]" />,
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
    icon: <Payroll className="w-[26px] h-[26px]" />,
    href: '#',
    children: true,
    subItems: [
      {
        label: 'Salary Slips',
        icon: null,
        href: '/payroll/salary-slips'
      },
      {
        label: 'Payroll Reports',
        icon: null,
        href: '/payroll/reports'
      },
      {
        label: 'Tax Deductions',
        icon: null,
        href: '/payroll/tax-deductions'
      }
    ]
  },
  {
    label: 'Attendance',
    icon: <Attendance className="w-[26px] h-[26px]" />,
    href: '#',
    children: true,
    subItems: [
      {
        label: 'Attendance Log',
        icon: null,
        href: '/attendance/log'
      },
      {
        label: 'Leave Requests',
        icon: null,
        href: '/attendance/leave-requests'
      },
      {
        label: 'Attendance Reports',
        icon: null,
        href: '/attendance/reports'
      }
    ]
  },
  {
    label: 'Leave',
    icon: <Leave className="w-[26px] h-[26px]" />,
    href: '#',
    children: true,
    subItems: [
      {
        label: 'Leave Applications',
        icon: null,
        href: '/leave/applications'
      },
      {
        label: 'Leave Balance',
        icon: null,
        href: '/leave/balance'
      },
      {
        label: 'Leave Policies',
        icon: null,
        href: '/leave/policies'
      }
    ]
  },
  {
    label: 'Profile',
    icon: <Profile className="w-[26px] h-[26px]" />,
    href: '/profile',
    children: false
  },
  {
    label: 'Settings',
    icon: <Settings className="w-[26px] h-[26px]" />,
    href: '/settings',
    children: false
  }
];
