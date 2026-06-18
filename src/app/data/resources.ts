export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  url: string;
}

export interface Creator {
  id: string;
  name: string;
  platform: string;
  category: string;
  description: string;
  url: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  free: boolean;
  url: string;
}

export interface FreelancingTip {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const articles: Article[] = [
  {
    id: 'art-1',
    title: 'How to Get Your First Freelance Client',
    description: 'A step-by-step guide to landing your first paying client as a beginner freelancer.',
    category: 'Freelancing',
    readTime: '5 min',
    url: '#',
  },
  {
    id: 'art-2',
    title: 'Building a Portfolio That Gets Results',
    description: 'Learn what clients look for in portfolios and how to showcase your best work.',
    category: 'Career',
    readTime: '7 min',
    url: '#',
  },
  {
    id: 'art-3',
    title: 'Pricing Your Services as a Beginner',
    description: 'How to set competitive rates without undervaluing your work.',
    category: 'Freelancing',
    readTime: '6 min',
    url: '#',
  },
  {
    id: 'art-4',
    title: 'Time Management for Student Freelancers',
    description: 'Balance school, learning, and freelancing with effective time management strategies.',
    category: 'Productivity',
    readTime: '8 min',
    url: '#',
  },
  {
    id: 'art-5',
    title: 'Overcoming Imposter Syndrome',
    description: 'Dealing with self-doubt as you start your freelance journey.',
    category: 'Mindset',
    readTime: '5 min',
    url: '#',
  },
  {
    id: 'art-6',
    title: 'Using Social Media to Find Clients',
    description: 'Leverage platforms like Twitter, LinkedIn, and Instagram to attract clients.',
    category: 'Marketing',
    readTime: '6 min',
    url: '#',
  },
];

export const creators: Creator[] = [
  {
    id: 'cr-1',
    name: 'Ali Abdaal',
    platform: 'YouTube',
    category: 'Productivity & Skills',
    description: 'Doctor turned entrepreneur sharing productivity tips and skill-building advice.',
    url: 'https://www.youtube.com/@aliabdaal',
  },
  {
    id: 'cr-2',
    name: 'The Futur',
    platform: 'YouTube',
    category: 'Design & Business',
    description: 'Learn design thinking, business strategy, and creative entrepreneurship.',
    url: 'https://www.youtube.com/@thefutur',
  },
  {
    id: 'cr-3',
    name: 'Traversy Media',
    platform: 'YouTube',
    category: 'Programming',
    description: 'Practical web development tutorials for beginners and beyond.',
    url: 'https://www.youtube.com/@TraversyMedia',
  },
  {
    id: 'cr-4',
    name: 'Peter McKinnon',
    platform: 'YouTube',
    category: 'Photography & Video',
    description: 'Creative filmmaker sharing editing tips, gear reviews, and inspiration.',
    url: 'https://www.youtube.com/@PeterMcKinnon',
  },
  {
    id: 'cr-5',
    name: 'Gary Vaynerchuk',
    platform: 'YouTube',
    category: 'Entrepreneurship',
    description: 'Marketing expert and entrepreneur sharing business and hustle insights.',
    url: 'https://www.youtube.com/@garyvee',
  },
  {
    id: 'cr-6',
    name: 'Nathan Barry',
    platform: 'Twitter',
    category: 'Creator Economy',
    description: 'Founder of ConvertKit, teaching creators how to earn a living.',
    url: 'https://twitter.com/nathanbarry',
  },
];

export const tools: Tool[] = [
  {
    id: 'tool-1',
    name: 'Figma',
    description: 'Free design tool for creating graphics, UI/UX designs, and prototypes.',
    category: 'Design',
    free: true,
    url: 'https://www.figma.com/',
  },
  {
    id: 'tool-2',
    name: 'Canva',
    description: 'User-friendly design platform with templates for social media, presentations, and more.',
    category: 'Design',
    free: true,
    url: 'https://www.canva.com/',
  },
  {
    id: 'tool-3',
    name: 'DaVinci Resolve',
    description: 'Professional video editing software with a powerful free version.',
    category: 'Video',
    free: true,
    url: 'https://www.blackmagicdesign.com/products/davinciresolve',
  },
  {
    id: 'tool-4',
    name: 'CapCut',
    description: 'Easy-to-use video editor perfect for social media content.',
    category: 'Video',
    free: true,
    url: 'https://www.capcut.com/',
  },
  {
    id: 'tool-5',
    name: 'VS Code',
    description: 'Free code editor with extensions for all programming languages.',
    category: 'Development',
    free: true,
    url: 'https://code.visualstudio.com/',
  },
  {
    id: 'tool-6',
    name: 'GitHub',
    description: 'Version control and portfolio platform for developers.',
    category: 'Development',
    free: true,
    url: 'https://github.com/',
  },
  {
    id: 'tool-7',
    name: 'Grammarly',
    description: 'AI writing assistant for grammar checking and style improvements.',
    category: 'Writing',
    free: true,
    url: 'https://www.grammarly.com/',
  },
  {
    id: 'tool-8',
    name: 'Notion',
    description: 'All-in-one workspace for notes, planning, and project management.',
    category: 'Productivity',
    free: true,
    url: 'https://www.notion.so/',
  },
  {
    id: 'tool-9',
    name: 'Trello',
    description: 'Visual project management tool using boards and cards.',
    category: 'Productivity',
    free: true,
    url: 'https://trello.com/',
  },
];

export const freelancingTips: FreelancingTip[] = [
  {
    id: 'tip-1',
    title: 'Start with Friends and Family',
    description: 'Offer your services to people you know at a discounted rate to build testimonials and experience. This creates social proof for future clients.',
    category: 'Getting Started',
  },
  {
    id: 'tip-2',
    title: 'Create a Strong Portfolio',
    description: 'Even without client work, create 3-5 high-quality sample projects that showcase your abilities. Quality over quantity always wins.',
    category: 'Portfolio',
  },
  {
    id: 'tip-3',
    title: 'Set Clear Boundaries',
    description: 'Define your working hours, revision limits, and payment terms upfront. This prevents scope creep and ensures respect.',
    category: 'Client Management',
  },
  {
    id: 'tip-4',
    title: 'Underpromise, Overdeliver',
    description: 'Set realistic deadlines and then deliver early. This builds trust and increases the likelihood of repeat business.',
    category: 'Client Management',
  },
  {
    id: 'tip-5',
    title: 'Network Consistently',
    description: 'Engage with other freelancers and potential clients on social media daily. Relationships lead to referrals.',
    category: 'Marketing',
  },
  {
    id: 'tip-6',
    title: 'Track Your Time',
    description: 'Use tools like Toggl to understand how long tasks take. This helps with accurate pricing and productivity.',
    category: 'Productivity',
  },
  {
    id: 'tip-7',
    title: 'Ask for Testimonials',
    description: 'After every successful project, request a written testimonial or review. These are gold for attracting new clients.',
    category: 'Portfolio',
  },
  {
    id: 'tip-8',
    title: 'Invest in Learning',
    description: 'Dedicate 20% of your time to learning new skills and staying updated. The freelance market rewards specialists.',
    category: 'Growth',
  },
  {
    id: 'tip-9',
    title: 'Build an Email List',
    description: 'Even as a freelancer, having an email list of past clients and leads helps with repeat business and referrals.',
    category: 'Marketing',
  },
  {
    id: 'tip-10',
    title: 'Don\'t Compete on Price',
    description: 'Focus on the value you provide rather than being the cheapest option. Cheap rates attract difficult clients.',
    category: 'Pricing',
  },
  {
    id: 'tip-11',
    title: 'Use Contracts Always',
    description: 'Even for small projects, use a simple contract. It protects both you and the client and sets clear expectations.',
    category: 'Legal',
  },
  {
    id: 'tip-12',
    title: 'Celebrate Small Wins',
    description: 'Your first $10 is as important as your first $1000. Acknowledge progress to stay motivated on the journey.',
    category: 'Mindset',
  },
];
