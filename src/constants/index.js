import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Science Student",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI Enthusiast",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Technical Club Leader",
    company_name: "College Technical Club",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Leading technical initiatives and organizing coding workshops for students.",
      "Mentoring team members on software development best practices and emerging technologies.",
      "Coordinating technical events, hackathons, and collaborative learning sessions.",
      "Building a community of passionate developers and tech enthusiasts.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Personal Projects",
    icon: tekisky,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing full-stack web applications using modern technologies like React, Node.js, and MongoDB.",
      "Implementing AI-powered features using Gemini API for intelligent applications.",
      "Creating system-level programs in C including OS algorithms and data structures.",
      "Continuously learning and applying new technologies to solve real-world problems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shashvat's dedication to learning and problem-solving is exceptional. His work on AI integration shows great promise.",
    name: "Technical Mentor",
    designation: "Senior Developer",
    company: "Tech Community",
    image: firstTestimonial,
  },
  {
    testimonial:
      "A talented developer with strong fundamentals in C programming and system design. Always eager to take on new challenges.",
    name: "Project Collaborator",
    designation: "Fellow Developer",
    company: "Open Source",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Shashvat's leadership in our technical club has inspired many students to pursue software development seriously.",
    name: "Club Member",
    designation: "CS Student",
    company: "College",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "TrainPredictor",
    description:
      "An intelligent AI-powered application that forecasts train waitlist confirmation probabilities. Integrates Gemini API to analyze historical data and provide accurate predictions for railway ticket booking decisions.",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      
    ],
    image: project2,
    source_code_link: "https://github.com/imshashvat",
  },
  {
    name: "OS Algorithms",
    description:
      "Comprehensive implementation of fundamental Operating System algorithms in C, including CPU scheduling (FCFS, SJF, Round Robin), memory management, deadlock detection, and page replacement algorithms. Demonstrates deep understanding of system-level programming.",
    tags: [
      {
        name: "C Programming",
        color: "blue-text-gradient",
      },
      {
        name: "Operating Systems",
        color: "green-text-gradient",
      },
      {
        name: "Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/imshashvat",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS. Features 3D graphics, smooth animations, and an intuitive user interface to showcase projects, skills, and professional experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "3D Graphics",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/imshashvat/Portfolio-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
