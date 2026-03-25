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
  { id: 'resume', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'skills', label: 'Skills' },
];

export const hero = {
  title: "Hey! Welcome",
  description:
    "I strive to stay innovative, keep learning, solve problems, and always be curious.",
  primaryCta: {
    label: 'View Journey',
    href: '#resume',
  },
  secondaryCta: {
    label: 'Contact',
    href: '#contact',
  },
  signals: ['Economics', 'Computer Science', 'Mathematics', 'Artificial Intelligence'],
  socials: [
    { label: 'GitHub', href: 'https://github.com/arand013' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexander-aranda1' },
    { label: 'Email', href: 'mailto:alexanderaranda@ymail.com' },
  ]
};

export const about = {
  image: profileImage,
  eyebrow: 'ABOUT',
  title: 'Building With Intention',
  summary: "A software engineer with a foundation in economics, research, innovation, and full stack development.",
  paragraphs: [
    "I'm building my career one step at a time, combining formal study with hands-on development so the work stays grounded in both discipline and execution.",
    "After completing UCLA's full stack web development certificate, I kept pushing deeper into React, JavaScript, HTML, and CSS by building responsive applications and sharpening how I think about user experience.",
    'What matters most to me is steady progress. Every class, project, and research opportunity helps me communicate more clearly, think more critically, and build with more purpose.',
  ],
  highlights: [
    { label: 'Achieved', value: 'B.S., Economics {Foreign Policy} / Florida Atlantic University' },
    { label: 'Minor', value: 'Artificial Intelligence / Florida Atlantic University' },
    { label: 'Certificate', value: 'Full Stack Web Development / UCLA' },
    { label: 'Achieved', value: 'A.S., Economics / Chaffey Community College' },
  ],
};

export const skills = {
  eyebrow: 'SKILLS',
  title: 'Foundation',
  copy: 'A mix of frontend execution, backend fundamentals, and tools that support thoughtful product work.',
  groups: [
    {
      title: 'Frontend Technology',
      items: ['Responsive Design', 'React', 'TypeScript', 'Bootstrap', 'Tailwind', 'Three.js'],
    },
    {
      title: 'Backend Technology',
      items: ['Python', 'SQL', 'REST APIs', 'MongoDB', 'MySQL', 'Node', 'Postman'],
    },
    {
      title: 'Experience & Leadership',
      items: ['JPMorgan Chase & Co.', 'Tesla', 'American Express', 'UPS'],
    },
  ],
};

export const projects = {
  title: 'PROJECTS',
  copy: 'These projects show how I learn: by building, testing ideas, and turning curiosity into real interfaces.',
  items: [
    {
      title: 'NFT MintEngine',
      summary: 'A React project for minting JPEG or PNG artwork and pushing it into a Web3 publishing flow.',
      outcome: 'Built to simplify the path from image upload to NFT minting.',
      tags: ['React', 'NFT', 'Web3'],
      image: mintImage,
      repository: 'https://github.com/arand013/NFT-Minter',
      demo: 'https://arand013.github.io/NFT-Minter/',
    },
    {
      title: 'Visual Amp',
      summary: 'A Three.js audio visualizer that brings uploaded mp3, mp4, and wav files into a more immersive 3D experience.',
      outcome: 'Combines media playback with interactive visuals and motion.',
      tags: ['Three.js', 'Audio', 'Creative UI'],
      image: ampImage,
      repository: 'https://github.com/arand013/VisualAmp',
      demo: 'https://arand013.github.io/VisualAmp/',
    },
    {
      title: 'Shuffle',
      summary: 'A MERN application centered on discovering music and saving favorites in one place.',
      outcome: 'Explores full-stack product flow around search, discovery, and saved content.',
      tags: ['MERN', 'Discovery', 'Full stack'],
      image: shuffleImage,
      repository: 'https://github.com/arand013/Music-Finder',
      demo: 'https://shuffle-music.herokuapp.com/',
    },
    {
      title: 'New Gen Mechanic',
      summary: 'An MVC-based business site designed to help a growing mechanic brand reach a wider online audience.',
      outcome: 'Shows how practical web presence can support local business growth.',
      tags: ['MVC', 'Business site', 'Brand'],
      image: autoImage,
      repository: 'https://github.com/arand013/Auto-Technician-project-2',
      demo: 'https://www.newgenmechanics.com',
    },
    {
      title: 'Weather Dashboard',
      summary: 'A weather application that uses server-side APIs to generate weekly forecasts for cities around the world.',
      outcome: 'Focuses on pulling external data into a fast, readable interface.',
      tags: ['API', 'JavaScript', 'Forecasts'],
      image: weatherImage,
      repository: 'https://github.com/arand013/Weather-Dashboard',
      demo: 'https://arand013.github.io/Weather-Dashboard/',
    },
    {
      title: 'The Tech Spot',
      summary: 'An MVC blog platform built for writing, reading, and sharing posts online.',
      outcome: 'Explores content publishing through a structured MVC workflow.',
      tags: ['MVC', 'Blog', 'Content'],
      image: techImage,
      repository: 'https://github.com/arand013/The-Tech-Spot',
      demo: 'https://enigmatic-garden-76168.herokuapp.com',
    },
    {
      title: 'Employee Tracker System',
      summary: "A database-driven CLI application for adding, updating, and managing a business's employees.",
      outcome: 'Built around clear operational workflows and command-line management.',
      tags: ['Database', 'CLI', 'Operations'],
      image: trackerImage,
      repository: 'https://github.com/arand013/employee-tracker-system',
      demo: 'https://drive.google.com/file/d/1XsJXpi8bwNel1nLO6y0vbIPjEJ6Tr8mz/view',
    },
    {
      title: 'Password Generator',
      summary: 'A JavaScript utility for generating stronger random passwords based on user-selected rules.',
      outcome: 'Turns a simple security task into a focused utility experience.',
      tags: ['JavaScript', 'Utility', 'Security'],
      image: passImage,
      repository: 'https://github.com/arand013/PasswordGenerator',
      demo: 'https://arand013.github.io/PasswordGenerator/',
    },
    {
      title: 'Three JS Spiral',
      summary: 'A Three.js experiment focused on 3D space, motion, and immersive visual atmosphere.',
      outcome: 'Explores creative coding through animation and depth.',
      tags: ['Three.js', '3D', 'Creative coding'],
      image: spiralImage,
      repository: 'https://github.com/arand013/three-js-spiral',
      demo: 'https://arand013.github.io/three-js-spiral/',
    },
  ],
};

export const resume = {
  eyebrow: '',
  title: 'JOURNEY',
  resumeUrl: 'https://drive.google.com/file/d/1EUYuh-DPsu7Ny00Wg-OgkqRAz87_eKIm/view?usp=sharing',
  story:
    'My path into tech has been built step by step through education, personal projects, internship experiences, research, and collaboration. This steady commitment is what continues to move me forward!',
  timeline: [
    {
      period: '2017 - 2018',
      title: 'Academic Start',
      detail: 'California State University San Marcos',
      summary: 'This is where the longer-term path began to take shape.',
    },
    {
      period: '2020',
      title: 'A.S. in Economics',
      detail: 'Chaffey Community College',
      summary: 'Built a stronger analytical foundation through economics.',
    },
    {
      period: '2021',
      title: 'Full Stack Web Development Certificate',
      detail: 'University of California Los Angeles',
      summary: 'Turned technical interest into hands-on web development work.',
    },
    {
      period: '2025',
      title: 'B.S. in Economics',
      detail: 'Florida Atlantic University',
      summary: 'Continued building range through university study and long-term growth.',
    },
    {
      period: '2022 - 2025',
      title: 'Computer Science Minor / Undergraduate Student',
      detail: 'Department of Economics and Department of Electrical Engineering and Computer Science',
      summary: 'Bringing technical depth closer to the center of my academic path.',
    },
    {
      period: '2024 - 2025',
      title: 'Undergraduate Researcher of the Year',
      detail: 'College of Business, Allen E. Smith Awardee',
      summary: 'Recognition for the consistency and discipline behind the work.',
    },
  ],
  research: [
    'Machine Perception and Cognitive Robotics Laboratory',
    'Faculty Mentor: Eric Levy',
    'Florida Atlantic University',
  ],
  categories: [
  ],
};

export const contact = {
  eyebrow: 'CONTACT',
  title: "Let's connect",
  copy: "I'm open to conversations about growth, research, and building thoughtful digital experiences.",
  email: 'Alexanderaranda@ymail.com',
  linkedin: 'https://linkedin.com/in/alexander-aranda1',
  github: 'https://github.com/arand013',
  location: 'Phoenix, AZ',
};
