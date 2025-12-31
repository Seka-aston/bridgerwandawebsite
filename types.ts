
export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  objectives: string[];
  duration: string;
  requirements: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  imageUrl: string;
}

export interface Resource {
  id: number;
  type: 'Blog' | 'Webinar' | 'Mentorship Guide';
  title: string;
  summary: string;
  date: string;
  author?: string;
  link: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  website: string;
}

export interface ApplicationData {
  programId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  nationality: string;
  academicLevel: string;
  fieldOfStudy: string;
  institution: string;
  lastTrimesterScore: string;
  idDocument: File | null;
  proofOfPayment: File | null;
  transcript: File | null;
  preferredUniversity: string;
  hopedChange: string;
}
