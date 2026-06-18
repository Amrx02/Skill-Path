export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  keywords: string[];
  timeToIncome: string;
  requiredTime: string;
  difficulty: string;
}

export interface Roadmap {
  skillId: string;
  steps: RoadmapStep[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  resources: Resource[];
  tasks: Task[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'tool';
  free: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Create stunning visual content for brands, social media, and marketing',
    icon: '🎨',
    color: 'from-pink-500 to-purple-600',
    keywords: ['creative', 'visual', 'art', 'design', 'aesthetic', 'colors', 'branding'],
    timeToIncome: '2-3 months',
    requiredTime: '2-3 hours daily',
    difficulty: 'Beginner Friendly',
  },
  {
    id: 'programming',
    name: 'Web Development',
    description: 'Build websites and web applications for clients worldwide',
    icon: '💻',
    color: 'from-blue-500 to-cyan-600',
    keywords: ['logical', 'technical', 'problem-solving', 'coding', 'analytical', 'math', 'computer'],
    timeToIncome: '4-6 months',
    requiredTime: '3-4 hours daily',
    difficulty: 'Moderate',
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    description: 'Edit engaging videos for YouTube creators, brands, and businesses',
    icon: '🎬',
    color: 'from-red-500 to-orange-600',
    keywords: ['creative', 'storytelling', 'visual', 'media', 'content', 'entertainment'],
    timeToIncome: '2-3 months',
    requiredTime: '2-3 hours daily',
    difficulty: 'Beginner Friendly',
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    description: 'Write compelling content for blogs, websites, and marketing campaigns',
    icon: '✍️',
    color: 'from-green-500 to-teal-600',
    keywords: ['writing', 'communication', 'language', 'creative', 'reading', 'storytelling', 'expression'],
    timeToIncome: '1-2 months',
    requiredTime: '1-2 hours daily',
    difficulty: 'Beginner Friendly',
  },
];

export const roadmaps: Roadmap[] = [
  {
    skillId: 'graphic-design',
    steps: [
      {
        id: 'gd-step-1',
        title: 'Design Fundamentals',
        description: 'Learn the basics of color theory, typography, and layout principles',
        duration: '2 weeks',
        resources: [
          { title: 'Canva Design School', url: 'https://www.canva.com/designschool/', type: 'course', free: true },
          { title: 'The Futur - YouTube', url: 'https://www.youtube.com/@thefutur', type: 'video', free: true },
          { title: 'Figma for Beginners', url: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8', type: 'video', free: true },
        ],
        tasks: [
          { id: 'gd-task-1', title: 'Study color theory basics', description: 'Learn about color combinations and psychology' },
          { id: 'gd-task-2', title: 'Practice typography pairing', description: 'Create 5 font combination examples' },
          { id: 'gd-task-3', title: 'Design 3 simple posters', description: 'Apply what you learned about layout' },
        ],
      },
      {
        id: 'gd-step-2',
        title: 'Master Design Tools',
        description: 'Get comfortable with Figma, Canva, or Adobe tools',
        duration: '3 weeks',
        resources: [
          { title: 'Figma Official Tutorials', url: 'https://www.figma.com/resources/learn-design/', type: 'course', free: true },
          { title: 'Canva Free Version', url: 'https://www.canva.com/', type: 'tool', free: true },
          { title: 'Adobe Express', url: 'https://www.adobe.com/express/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'gd-task-4', title: 'Complete Figma tutorial', description: 'Learn all basic features' },
          { id: 'gd-task-5', title: 'Recreate 5 existing designs', description: 'Copy designs to practice' },
          { id: 'gd-task-6', title: 'Design a logo', description: 'Create a logo for a fictional brand' },
        ],
      },
      {
        id: 'gd-step-3',
        title: 'Build Portfolio',
        description: 'Create 5-10 portfolio pieces showcasing your skills',
        duration: '3 weeks',
        resources: [
          { title: 'Behance', url: 'https://www.behance.net/', type: 'tool', free: true },
          { title: 'Dribbble', url: 'https://dribbble.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'gd-task-7', title: 'Design social media templates', description: 'Create 5 Instagram post templates' },
          { id: 'gd-task-8', title: 'Create a brand identity', description: 'Logo, colors, and typography' },
          { id: 'gd-task-9', title: 'Upload to portfolio site', description: 'Share your work on Behance' },
        ],
      },
      {
        id: 'gd-step-4',
        title: 'Start Freelancing',
        description: 'Find your first clients and earn money',
        duration: '2 weeks',
        resources: [
          { title: 'Fiverr', url: 'https://www.fiverr.com/', type: 'tool', free: true },
          { title: 'Upwork', url: 'https://www.upwork.com/', type: 'tool', free: true },
          { title: '99designs', url: 'https://99designs.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'gd-task-10', title: 'Create Fiverr profile', description: 'Set up your freelance account' },
          { id: 'gd-task-11', title: 'Offer free work', description: 'Get 2-3 testimonials from friends/family' },
          { id: 'gd-task-12', title: 'Apply to 10 jobs', description: 'Start bidding on beginner-friendly projects' },
        ],
      },
    ],
  },
  {
    skillId: 'programming',
    steps: [
      {
        id: 'prog-step-1',
        title: 'HTML & CSS Basics',
        description: 'Learn the building blocks of web pages',
        duration: '3 weeks',
        resources: [
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'course', free: true },
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'article', free: true },
          { title: 'Kevin Powell - YouTube', url: 'https://www.youtube.com/@KevinPowell', type: 'video', free: true },
        ],
        tasks: [
          { id: 'prog-task-1', title: 'Complete HTML basics', description: 'Learn all HTML tags and structure' },
          { id: 'prog-task-2', title: 'Master CSS styling', description: 'Flexbox, Grid, and responsive design' },
          { id: 'prog-task-3', title: 'Build 3 landing pages', description: 'Practice what you learned' },
        ],
      },
      {
        id: 'prog-step-2',
        title: 'JavaScript Fundamentals',
        description: 'Add interactivity to your websites',
        duration: '4 weeks',
        resources: [
          { title: 'JavaScript.info', url: 'https://javascript.info/', type: 'course', free: true },
          { title: 'Traversy Media - YouTube', url: 'https://www.youtube.com/@TraversyMedia', type: 'video', free: true },
          { title: 'Eloquent JavaScript (Free Book)', url: 'https://eloquentjavascript.net/', type: 'article', free: true },
        ],
        tasks: [
          { id: 'prog-task-4', title: 'Learn JS syntax', description: 'Variables, functions, loops, objects' },
          { id: 'prog-task-5', title: 'DOM manipulation', description: 'Change webpage content dynamically' },
          { id: 'prog-task-6', title: 'Build 5 mini projects', description: 'Todo list, calculator, etc.' },
        ],
      },
      {
        id: 'prog-step-3',
        title: 'React Framework',
        description: 'Learn the most popular JavaScript framework',
        duration: '4 weeks',
        resources: [
          { title: 'React Official Docs', url: 'https://react.dev/', type: 'course', free: true },
          { title: 'Scrimba React Course', url: 'https://scrimba.com/learn/learnreact', type: 'course', free: true },
        ],
        tasks: [
          { id: 'prog-task-7', title: 'Understand components', description: 'Learn props, state, and hooks' },
          { id: 'prog-task-8', title: 'Build a portfolio site', description: 'Showcase your projects' },
          { id: 'prog-task-9', title: 'Create 3 React apps', description: 'Weather app, quiz app, etc.' },
        ],
      },
      {
        id: 'prog-step-4',
        title: 'Get Freelance Work',
        description: 'Start earning as a web developer',
        duration: '3 weeks',
        resources: [
          { title: 'Upwork', url: 'https://www.upwork.com/', type: 'tool', free: true },
          { title: 'Freelancer', url: 'https://www.freelancer.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'prog-task-10', title: 'Deploy 5 projects', description: 'Use Vercel or Netlify for hosting' },
          { id: 'prog-task-11', title: 'Create GitHub profile', description: 'Show your code publicly' },
          { id: 'prog-task-12', title: 'Apply to 15 jobs', description: 'Target entry-level web dev positions' },
        ],
      },
    ],
  },
  {
    skillId: 'video-editing',
    steps: [
      {
        id: 've-step-1',
        title: 'Editing Fundamentals',
        description: 'Learn cuts, transitions, and basic editing techniques',
        duration: '2 weeks',
        resources: [
          { title: 'DaVinci Resolve (Free)', url: 'https://www.blackmagicdesign.com/products/davinciresolve', type: 'tool', free: true },
          { title: 'CapCut (Free)', url: 'https://www.capcut.com/', type: 'tool', free: true },
          { title: 'Ali Abdaal - Editing Tips', url: 'https://www.youtube.com/@aliabdaal', type: 'video', free: true },
        ],
        tasks: [
          { id: 've-task-1', title: 'Learn basic cuts', description: 'Practice J-cuts and L-cuts' },
          { id: 've-task-2', title: 'Master transitions', description: 'Create smooth scene changes' },
          { id: 've-task-3', title: 'Edit 3 short videos', description: 'Use royalty-free footage' },
        ],
      },
      {
        id: 've-step-2',
        title: 'Advanced Techniques',
        description: 'Color grading, sound design, and effects',
        duration: '3 weeks',
        resources: [
          { title: 'Peter McKinnon - YouTube', url: 'https://www.youtube.com/@PeterMcKinnon', type: 'video', free: true },
          { title: 'Epidemic Sound (Free Trial)', url: 'https://www.epidemicsound.com/', type: 'tool', free: false },
        ],
        tasks: [
          { id: 've-task-4', title: 'Learn color grading', description: 'Apply LUTs and adjust colors' },
          { id: 've-task-5', title: 'Practice audio mixing', description: 'Balance music and dialogue' },
          { id: 've-task-6', title: 'Add motion graphics', description: 'Create animated text and effects' },
        ],
      },
      {
        id: 've-step-3',
        title: 'Build Portfolio',
        description: 'Create a showreel and sample edits',
        duration: '2 weeks',
        resources: [
          { title: 'YouTube', url: 'https://www.youtube.com/', type: 'tool', free: true },
          { title: 'Vimeo', url: 'https://vimeo.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 've-task-7', title: 'Create a showreel', description: '60-90 second highlights of your best work' },
          { id: 've-task-8', title: 'Edit 5 different styles', description: 'Vlogs, tutorials, ads, etc.' },
          { id: 've-task-9', title: 'Upload to YouTube', description: 'Start your portfolio channel' },
        ],
      },
      {
        id: 've-step-4',
        title: 'Find Clients',
        description: 'Work with YouTubers and businesses',
        duration: '2 weeks',
        resources: [
          { title: 'YT Jobs (Reddit)', url: 'https://www.reddit.com/r/CreatorServices/', type: 'tool', free: true },
          { title: 'Upwork', url: 'https://www.upwork.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 've-task-10', title: 'Reach out to small YouTubers', description: 'Offer free editing for testimonials' },
          { id: 've-task-11', title: 'Create service packages', description: 'Define your pricing and offerings' },
          { id: 've-task-12', title: 'Apply to 10 jobs', description: 'Find video editing gigs' },
        ],
      },
    ],
  },
  {
    skillId: 'content-writing',
    steps: [
      {
        id: 'cw-step-1',
        title: 'Writing Fundamentals',
        description: 'Master grammar, structure, and storytelling',
        duration: '2 weeks',
        resources: [
          { title: 'Grammarly (Free)', url: 'https://www.grammarly.com/', type: 'tool', free: true },
          { title: 'Hemingway Editor', url: 'https://hemingwayapp.com/', type: 'tool', free: true },
          { title: 'Writing Tips - YouTube', url: 'https://www.youtube.com/results?search_query=content+writing+tips', type: 'video', free: true },
        ],
        tasks: [
          { id: 'cw-task-1', title: 'Study article structure', description: 'Learn hooks, body, and conclusions' },
          { id: 'cw-task-2', title: 'Practice daily writing', description: 'Write 500 words every day' },
          { id: 'cw-task-3', title: 'Analyze great content', description: 'Study successful blog posts' },
        ],
      },
      {
        id: 'cw-step-2',
        title: 'SEO & Marketing Writing',
        description: 'Learn to write content that ranks and converts',
        duration: '2 weeks',
        resources: [
          { title: 'Ahrefs Blog', url: 'https://ahrefs.com/blog/', type: 'article', free: true },
          { title: 'SEO for Beginners', url: 'https://www.youtube.com/watch?v=DvwS7cV9GmQ', type: 'video', free: true },
        ],
        tasks: [
          { id: 'cw-task-4', title: 'Learn keyword research', description: 'Find topics people search for' },
          { id: 'cw-task-5', title: 'Write SEO articles', description: 'Create 5 optimized blog posts' },
          { id: 'cw-task-6', title: 'Study copywriting', description: 'Learn persuasive writing techniques' },
        ],
      },
      {
        id: 'cw-step-3',
        title: 'Build Writing Portfolio',
        description: 'Create samples in different niches',
        duration: '2 weeks',
        resources: [
          { title: 'Medium', url: 'https://medium.com/', type: 'tool', free: true },
          { title: 'LinkedIn Articles', url: 'https://www.linkedin.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'cw-task-7', title: 'Write 10 articles', description: 'Cover different topics and styles' },
          { id: 'cw-task-8', title: 'Publish on Medium', description: 'Start building your audience' },
          { id: 'cw-task-9', title: 'Create a portfolio site', description: 'Showcase your best writing' },
        ],
      },
      {
        id: 'cw-step-4',
        title: 'Get Paid to Write',
        description: 'Find clients and writing gigs',
        duration: '1 week',
        resources: [
          { title: 'Upwork', url: 'https://www.upwork.com/', type: 'tool', free: true },
          { title: 'Contently', url: 'https://contently.com/', type: 'tool', free: true },
        ],
        tasks: [
          { id: 'cw-task-10', title: 'Create freelance profiles', description: 'Set up on Upwork and Fiverr' },
          { id: 'cw-task-11', title: 'Pitch to blogs', description: 'Reach out to 20 websites' },
          { id: 'cw-task-12', title: 'Apply to content jobs', description: 'Find ongoing writing opportunities' },
        ],
      },
    ],
  },
];

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(skill => skill.id === id);
};

export const getRoadmapBySkillId = (skillId: string): Roadmap | undefined => {
  return roadmaps.find(roadmap => roadmap.skillId === skillId);
};
