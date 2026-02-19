
export interface Mission {
  title: string;
  client: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights?: string[];
  missions?: Mission[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Certification {
  name: string;
  org: string;
  year: string;
}

export interface Project {
  name: string;
  description: string;
  impact: string;
}

export interface ResumeData {
  name: string;
  title: string;
  profile: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  experiences: Experience[];
  skills: SkillGroup[];
  softSkills: string[];
  education: Education[];
  certifications?: Certification[];
  projects?: Project[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}