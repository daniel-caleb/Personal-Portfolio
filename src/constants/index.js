import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  python,
  django,
  laravel,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Cybersecurity👨🏾‍💻',
    icon: ux,
  },
  {
    title: 'Software Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'FRS Africa - Karen',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - Dec 2023',
  },
  {
    title: 'Python Developer',
    company_name: 'Simulink Agencies - Nairobi Kenya',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Jan 2024',
  },
  {
    title: 'Freelancer',
    company_name: 'Nairobi Kenya',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sept 2022 - Oct 2023',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Mtaa Explorer',
    description: 'This project is of an adventure website that offers users the opportunity to discover and plan on adventure activities and experiences.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/daniel-caleb/-adventurewebsite.git',
    demo: 'https://mtaaexplorer.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'F1 - APP',
    description:
      'This project uses Java and Kotlin in the mobile application so that it provides users with information about the world of Formula 1 racing.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/daniel-caleb/Formula_1.git',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Clock Text',
    description: 'The text-based clock is a clock that displays the time in the form of text instead of using traditional clock hands or digital displays. clock will be a unique and functional piece of home decor that will provide an alternative way to display the time and add a touch of modernity to any living space.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/daniel-caleb/Clock-Text.git',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Fleet Manager',
    description: ``,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Still Cooking!',
    description:
      '',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/daniel-caleb',
    demo: 'https://github.com/daniel-caleb',
  },
];

export { services, technologies, experiences, projects };
