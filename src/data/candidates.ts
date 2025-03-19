import { ICandidate } from '@/types';

export const candidates: ICandidate[] = [
  {
    id: 1,
    name: 'Md Azizul Islam',
    age: 28,
    image: '/images/candidate-1.png',
    phone: '01874098735',
    location: 'Banani, Dhaka',
    matchPercentage: '83%',
    education: {
      degree: 'Master’s in Computer Science',
      institution: 'University of Dhaka'
    },
    experience: {
      company: 'Excel IT AI',
      position: 'Frontend Developer (Continue)'
    },
    applicationDate: 'April 14, 2024',
    actions: ['Shortlist', 'Reject']
  },
  {
    id: 2,
    name: 'Md. Anisur Rahman Kabir',
    age: 30,
    image: '/images/candidate-2.png',
    phone: '01674098795',
    location: 'Gulshan 1, Dhaka',
    matchPercentage: '73%',
    education: {
      degree: 'HSC in Commerce',
      institution: 'Dhaka Imperial College'
    },
    experience: {
      company: 'Arclite System',
      position: 'Business Analyst (1.5 yrs)'
    },
    applicationDate: 'April 16, 2024',
    actions: ['Interview', 'Reject']
  },
  {
    id: 3,
    name: 'Nishat Sultana Ritu',
    age: 24,
    image: '/images/candidate-3.png',
    phone: '01574098705',
    location: 'Agargaon, Dhaka',
    matchPercentage: '70%',
    education: {
      degree: 'Master’s in Marketing',
      institution: 'Bangladesh University of Professional'
    },
    experience: {
      company: 'Sheba xyz',
      position: 'Sales Executive (Continue)'
    },
    applicationDate: 'April 18, 2024',
    actions: ['Confirm', 'Reject']
  },
  {
    id: 4,
    name: 'Zarin Tasnim Haque',
    age: 27,
    image: '/images/candidate-4.png',
    phone: '01974098738',
    location: 'Dhanmondi 27, Dhaka',
    matchPercentage: '63%',
    education: {
      degree: 'Bachelor’s in Computer Science',
      institution: 'Asha University'
    },
    experience: {
      company: 'Flyte Solutions Ltd',
      position: 'Office Executive (2+ yrs)'
    },
    applicationDate: 'April 20, 2024',
    actions: ['Interview', 'Reject']
  }
];
