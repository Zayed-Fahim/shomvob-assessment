export interface IEducation {
  degree: string;
  institution: string;
}

export interface IExperience {
  company: string;
  position: string;
}

export interface ICandidate {
  id: number;
  image: string;
  name: string;
  age: number;
  phone: string;
  location: string;
  matchPercentage: string;
  education: IEducation;
  experience: IExperience;
  applicationDate: string;
  actions: ('Interview' | 'Shortlist' | 'Confirm' | 'Reject')[];
}
