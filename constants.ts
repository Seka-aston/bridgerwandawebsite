
import { Program, Testimonial, Resource, Partner } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'How to Apply', path: '/how-to-apply' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Resources', path: '/resources' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Contact', path: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'internship-training',
    title: 'Internship and Training Placement',
    description: 'Structured internships aligned with industry needs and the TVET curriculum.',
    longDescription: 'Our flagship program connects TVET students with leading companies for hands-on experience. We provide structured internship placements that are directly relevant to your field of study, ensuring you develop practical skills and build a professional network.',
    objectives: ['Gain practical, hands-on experience in your field.', 'Develop professional skills and workplace etiquette.', 'Build a network of industry contacts.', 'Apply academic knowledge to real-world challenges.'],
    duration: '3-6 Months',
    requirements: ['Enrolled in a TVET program', 'Minimum 60% academic score', 'English proficiency'],
    tracks: [
      'Wood Technology',
      'Software Development',
      'Internet Technologies',
      'Electrical Installation',
      'Plumbing',
      'Welding'
    ],
    intakeSchedule: [
      { intake: 'January Intake', eligible: 'Level 5 students only' },
      { intake: 'March Intake', eligible: 'Level 4 students only' }
    ]
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Personalized mentorship and career planning to help you navigate your future.',
    longDescription: 'Our Career Guidance program offers one-on-one mentorship, career counseling, and workshops to help you identify your strengths, explore career paths, and create a roadmap for success. We help you with resume building, interview preparation, and professional branding.',
    objectives: ['Identify career goals and create a strategic plan.', 'Develop a professional resume and cover letter.', 'Master interview skills.', 'Receive guidance from experienced industry mentors.'],
    duration: 'Ongoing',
    requirements: ['Open to all Bridge program participants']
  },
  {
    id: 'entrepreneurship-groundbreaking',
    title: 'Entrepreneurship Groundbreaking',
    description: 'Training and support for aspiring entrepreneurs to turn ideas into businesses.',
    longDescription: 'This program is designed for students with an entrepreneurial spirit. We provide training on business ideation, market research, financial planning, and pitching. Participants get access to mentors and resources to help launch and grow their ventures.',
    objectives: ['Learn the fundamentals of starting a business.', 'Develop a viable business plan.', 'Gain pitching and presentation skills.', 'Connect with a network of entrepreneurs and investors.'],
    duration: '12 Weeks',
    requirements: ['A strong business idea', 'Commitment to the program duration']
  },
  {
    id: 'job-opportunities',
    title: 'Job Opportunities',
    description: 'A portal connecting skilled graduates with employment opportunities.',
    longDescription: 'Upon completing our programs, students gain access to our exclusive job portal. We partner with companies across Rwanda to bring you relevant job openings, connecting you directly with employers seeking skilled TVET graduates.',
    objectives: ['Access to exclusive job listings.', 'Direct connections with employers.', 'Support in the job application process.', 'Transition smoothly from education to employment.'],
    duration: 'Ongoing Access',
    requirements: ['Successful completion of a Bridge program']
  }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Aline U.',
        program: 'Internship Placement - Software Development',
        quote: 'Bridge gave me the practical experience I needed. The internship was perfectly aligned with my studies and helped me secure a full-time job before I even graduated.',
        imageUrl: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=200&h=200&auto=format&fit=crop&face=true'
    },
    {
        id: 2,
        name: 'John K.',
        program: 'Entrepreneurship Groundbreaking',
        quote: 'The mentorship in the entrepreneurship program was invaluable. I went from having a simple idea to launching my own small business with confidence.',
        imageUrl: 'https://images.unsplash.com/photo-1610969966932-85093557e93c?q=80&w=200&h=200&auto=format&fit=crop&face=true'
    },
    {
        id: 3,
        name: 'Grace M.',
        program: 'Career Guidance',
        quote: 'I was unsure about my career path after my TVET course. The career guidance sessions at Bridge helped me understand my options and build a clear plan for my future.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop&face=true'
    }
];

export const RESOURCES: Resource[] = [
    {
        id: 1,
        type: 'Blog',
        title: '5 Tips for a Successful Internship',
        summary: 'Learn how to make the most of your internship experience, from setting goals to networking effectively.',
        date: '2023-10-26',
        author: 'Bridge Team',
        link: '#'
    },
    {
        id: 2,
        type: 'Webinar',
        title: 'Webinar: Building a Winning CV for TVET Graduates',
        summary: 'Join our upcoming webinar to learn the secrets of crafting a CV that stands out to employers.',
        date: '2023-11-15',
        link: '#'
    },
    {
        id: 3,
        type: 'Mentorship Guide',
        title: 'Guide for Mentees: How to Build a Great Mentoring Relationship',
        summary: 'This guide provides practical advice for students on how to engage with their mentors for maximum benefit.',
        date: '2023-10-10',
        author: 'Bridge Mentorship Program',
        link: '#'
    }
];

export const PARTNERS: Partner[] = [
    { id: 1, name: 'Company A', logoUrl: 'https://picsum.photos/seed/partner1/200/100', website: '#' },
    { id: 2, name: 'Institution B', logoUrl: 'https://picsum.photos/seed/partner2/200/100', website: '#' },
    { id: 3, name: 'Employer C', logoUrl: 'https://picsum.photos/seed/partner3/200/100', website: '#' },
    { id: 4, name: 'Company D', logoUrl: 'https://picsum.photos/seed/partner4/200/100', website: '#' },
];
