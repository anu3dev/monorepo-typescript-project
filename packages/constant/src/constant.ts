// Technical skills data for professional profile
export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Redux' },
      { name: 'Accessibility (WCAG/a11y)' },
    ],
  },
  {
    title: 'Build & Tooling',
    skills: [
      { name: 'Webpack' },
      { name: 'Vite' },
      { name: 'Babel' },
      { name: 'ESLint' },
      { name: 'Prettier' },
      { name: 'NPM' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    skills: [
      { name: 'Jenkins' },
      { name: 'SonarQube' },
      { name: 'Fortify' },
      { name: 'Black Duck' },
      { name: 'AEGIS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Node.js (Basic)', isLearning: true },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Splunk' },
      { name: 'Kibana' },
      { name: 'Site Cat' },
      { name: 'Git' },
      { name: 'JIRA' },
      { name: 'VS Code' },
      { name: 'Confluence' },
      { name: 'Netlify' },
      { name: 'Render' },
      { name: 'Neon' },
    ],
  },
];

// Route paths constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;
