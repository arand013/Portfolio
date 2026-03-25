import profileImage from '../assets/image/Me-pic.jpg';
import mintImage from '../assets/image/nft-mint.png';
import ampImage from '../assets/image/visual-amp.png';
import shuffleImage from '../assets/image/shuffle_music.png';
import autoImage from '../assets/image/auto-tech.png';
import weatherImage from '../assets/image/weather-dash.png';
import techImage from '../assets/image/tech-spot.png';
import trackerImage from '../assets/image/tracker.png';
import passImage from '../assets/image/password-gen.png';
import spiralImage from '../assets/image/spiralJS.png';

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'SOFTWARE ENGINEER / EDUCATION JOURNEY',
  title: 'An ambitious individual creating opportunities to build more creative user experiences.',
  description: 'A certified Full Stack Web Developer working towards a career in software engineering.',
  primaryCta: {
    label: 'View Journey',
    href: '#resume',
  },
  secondaryCta: {
    label: 'Contact',
    href: '#contact',
  },
  signals: ['Economics', 'Computer Science', 'React', 'Research'],
  socials: [
    { label: 'GitHub', href: 'https://github.com/arand013' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexander-aranda1' },
    { label: 'Email', href: 'mailto:Arandaresume23@gmail.com' },
  ],
  metrics: [
    { value: 'Florida Atlantic University', label: 'B.S. Economics' },
    { value: 'University of California Los Angeles', label: 'Full Stack Certificate' },
    { value: 'Chaffey Community College', label: 'A.S. Economics' },
  ],
  panel: {
    badge: 'CAREER STORY',
    headline: 'College foundation to software engineering.',
    copy:
      'Learning to increase programming technology skills such as React, Javascript, HTML and CSS, by building user responsive web applications.',
    timeline: [
      {
        period: '2017 - 2018',
        title: 'Associate Program',
        detail: 'California State University San Marcos',
      },
      {
        period: '2020',
        title: 'A.S., Economics',
        detail: 'Chaffey Community College',
      },
      {
        period: '2021',
        title: 'Certificate, Full Stack Web Development',
        detail: 'University of California Los Angeles',
      },
      {
        period: 'In Progress',
        title: 'B.S., Economics / Minor in Computer Science',
        detail: 'Florida Atlantic University',
      },
    ],
    cards: [
      { label: 'College', value: 'Economics', tone: 'blue' },
      { label: 'Certificate', value: 'Full Stack Web Development', tone: 'silver' },
      { label: 'Research', value: 'MPCR Lab', tone: 'slate' },
    ],
    metrics: [
      { label: 'Undergraduate Student', value: 'Department of Economics / EECS' },
      { label: 'Recognition', value: 'Undergraduate Researcher of the Year' },
      { label: 'Mentor', value: 'Eric Levy' },
    ],
  },
};

export const about = {
  image: profileImage,
  eyebrow: 'ABOUT',
  title: 'Building My Career',
  summary: 'A certified Full Stack Web Developer working towards a career in software engineering.',
  paragraphs: [
    'An ambitious individual creating opportunities to build more creative user experiences. A certified Full Stack Web Developer working towards a career in software engineering.',
    'After completing a full stack web development bootcamp from the University of California Los Angeles, learning to increase programming technology skills such as React, Javascript, HTML and CSS, by building user responsive web applications.',
    'Through the past years of work and university one runs across hardships and faces many obstacles, however learning that by including grit and perseverance into your work there are possibilities to achieve many more successes.',
  ],
  highlights: [
    { label: 'In Progress', value: 'B.S., Economics / Florida Atlantic University' },
    { label: 'Minor', value: 'Computer Science' },
    { label: 'Certificate', value: 'Full Stack Web Development / UCLA' },
    { label: 'Foundation', value: 'A.S., Economics / Chaffey Community College' },
  ],
};

export const skills = {
  eyebrow: 'SKILLS',
  title: 'Skills & Experience',
  groups: [
    {
      title: 'Frontend Technology',
      items: ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'React', 'TypeScript', 'Bootstrap', 'Tailwind', 'Three.js'],
    },
    {
      title: 'Backend Technology',
      items: ['SQL', 'REST APIs', 'MongoDB', 'Mongoose', 'MySQL', 'Sequelize', 'MindsDB', 'Python', 'Node', 'GraphQL', 'Django', 'Postman', 'Insomnia', 'Solidity', 'WebGL'],
    },
  ],
};

export const projects = {
  eyebrow: 'PROJECTS',
  title: 'Recent Projects',
  items: [
    {
      title: 'NFT MintEngine',
      summary: 'This small project allows you to Mint any jpeg or png, then receive it on Rarible.io',
      tags: ['React', 'NFT', 'Web3'],
      image: mintImage,
      repository: 'https://github.com/arand013/NFT-Minter',
      demo: 'https://arand013.github.io/NFT-Minter/',
    },
    {
      title: 'Visual Amp',
      summary: 'This visualizer is a simple way. To import 3D effects to your favorite mp3, mp4, wav files with a music player and 3D graphics.',
      tags: ['Three.js', 'Audio', 'Creative UI'],
      image: ampImage,
      repository: 'https://github.com/arand013/VisualAmp',
      demo: 'https://arand013.github.io/VisualAmp/',
    },
    {
      title: 'Shuffle',
      summary: 'A MERN app for discovering and saving music',
      tags: ['MERN', 'Discovery', 'Full stack'],
      image: shuffleImage,
      repository: 'https://github.com/arand013/Music-Finder',
      demo: 'https://shuffle-music.herokuapp.com/',
    },
    {
      title: 'New Gen Mechanic',
      summary: 'An MVC app, designed for a business owner looking to reach an online audience to expand his growing business',
      tags: ['MVC', 'Business site', 'Brand'],
      image: autoImage,
      repository: 'https://github.com/arand013/Auto-Technician-project-2',
      demo: 'https://www.newgenmechanics.com',
    },
    {
      title: 'Weather Dashboard',
      summary: 'An html, css and server side api webpage, that will generate weekly weather reports for cities across the world',
      tags: ['API', 'JavaScript', 'Forecasts'],
      image: weatherImage,
      repository: 'https://github.com/arand013/Weather-Dashboard',
      demo: 'https://arand013.github.io/Weather-Dashboard/',
    },
    {
      title: 'The Tech Spot',
      summary: 'An MVC app, created for a blogging and sharing post online',
      tags: ['MVC', 'Blog', 'Content'],
      image: techImage,
      repository: 'https://github.com/arand013/The-Tech-Spot',
      demo: 'https://enigmatic-garden-76168.herokuapp.com',
    },
    {
      title: 'Employee Tracker System',
      summary: "An database template application, designed to add, update or delete a business's employee",
      tags: ['Database', 'CLI', 'Operations'],
      image: trackerImage,
      repository: 'https://github.com/arand013/employee-tracker-system',
      demo: 'https://drive.google.com/file/d/1XsJXpi8bwNel1nLO6y0vbIPjEJ6Tr8mz/view',
    },
    {
      title: 'Password Generator',
      summary: 'A javascript built app created to generate random long term passwords',
      tags: ['JavaScript', 'Utility', 'Security'],
      image: passImage,
      repository: 'https://github.com/arand013/PasswordGenerator',
      demo: 'https://arand013.github.io/PasswordGenerator/',
    },
    {
      title: 'Three JS Spiral',
      summary: 'A 3D Space Animation using Three.js',
      tags: ['Three.js', '3D', 'Creative coding'],
      image: spiralImage,
      repository: 'https://github.com/arand013/three-js-spiral',
      demo: 'https://arand013.github.io/three-js-spiral/',
    },
  ],
};

export const resume = {
  eyebrow: 'JOURNEY',
  title: 'College and research milestones',
  resumeUrl: 'https://drive.google.com/file/d/1EUYuh-DPsu7Ny00Wg-OgkqRAz87_eKIm/view?usp=sharing',
  story:
    'Learning to increase programming technology skills such as React, Javascript, HTML and CSS, by building user responsive web applications.',
  timeline: [
    {
      period: '2017 - 2018',
      title: 'Associate Program',
      detail: 'California State University San Marcos',
    },
    {
      period: '2020',
      title: 'A.S., Economics',
      detail: 'Chaffey Community College',
    },
    {
      period: '2021',
      title: 'Certificate, Full Stack Web Development',
      detail: 'University of California Los Angeles',
    },
    {
      period: 'In Progress',
      title: 'B.S., Economics',
      detail: 'Florida Atlantic University',
    },
    {
      period: 'Current',
      title: 'Minor in Computer Science / Undergraduate Student',
      detail: 'Department of Economics and Department of Electrical Engineering and Computer Science',
    },
    {
      period: '2024 - 2025',
      title: 'Undergraduate Researcher of the Year',
      detail: 'College of Business, Allen E. Smith Awardee',
    },
  ],
  research: [
    'Machine Perception and Cognitive Robotics Laboratory',
    'Faculty Mentor: Eric Levy',
    'Florida Atlantic University',
  ],
  categories: [
    {
      title: 'Technical Growth',
      items: ['React', 'Javascript', 'HTML', 'CSS', 'Responsive web applications'],
    },
    {
      title: 'Education Path',
      items: ['Economics', 'Computer Science', 'Full Stack Web Development', 'Undergraduate research'],
    },
  ],
};

export const contact = {
  eyebrow: 'CONTACT',
  title: 'Contact Me',
  email: 'Arandaresume23@gmail.com',
  linkedin: 'https://linkedin.com/in/alexander-aranda1',
  github: 'https://github.com/arand013',
  location: 'Boca Raton, FL',
};
