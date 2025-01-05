import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react';

const Info = {
  name: 'Akash Verma',
  stack: [
    'Software Engineer',
    'Competetive Programmar',
    'Full Stack Web Developer',
    'Software Developer',
    'Open Source Contributor',
  ],
  bio: `I’m a Java Developer with 1.3 years of experience in building dynamic web applications using Java frameworks like Spring and Spring Boot. I’m passionate about writing clean, efficient code and collaborating with teams to turn ideas into functional solutions. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects. Let's connect!`,
};

const ProjectInfo = [
  {
    title: 'Todo Web Application',
    desc: 'This Todo Web Application is built with Java, JSP, and the Spring framework, providing an efficient task management solution. Users can create, update, and delete tasks with an easy-to-use interface. The app leverages Spring for backend management and JSP for dynamic content rendering, ensuring smooth functionality and a seamless user experience.',
    image: 'Icons/TodoApp.png',
    live: false,
    technologies: ['Java', 'Spring MVC', 'SpringBoot', 'Hibernate', 'Spring Data JPA'],
    link: '',
    github: 'https://github.com/akashverma004/JavaTodo',
  },
  {
    title: 'Todo CRUD Api',
    desc: `This CRUD API is built with Java and the Spring framework, offering a robust solution for managing data operations. The API allows users to Create, Read, Update, and Delete records efficiently. Leveraging Spring's powerful backend capabilities, it ensures smooth functionality, scalability, and seamless integration with client applications.`,
    image: 'Icons/TodoApp.png',
    live: false,
    technologies: ['Java', 'Spring Rest API', 'SpringBoot', 'Hibernate', 'Spring Data JPA'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Cloud Contact Manager',
    desc: `Cloud Contact Manager is a web-based application built with Java, Spring Boot, and Thymeleaf, designed to efficiently manage and organize contacts. It offers features like adding, editing, and deleting contact information with an intuitive and user-friendly interface. Thymeleaf is used for dynamic content rendering, ensuring a responsive and engaging user experience. The application is ideal for individuals or businesses seeking a secure and scalable solution for contact management.`,
    image: 'Icons/TodoApp.png',
    live: true,
    technologies: ['Java', 'SpringBoot', 'Thymleaf', 'Hibernate', 'Spring Data JPA', 'Spring Security'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  }
];

const SkillInfo = [
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Spring MVC',
      'Springboot',
      'Laravel',
      'Yii2',
      'Node JS',
      'Express JS',
      'MySQL',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'Languages',
    skills: ['C', 'Java', 'PHP', 'Python', 'JavaScript'],
  },
  {
    title: 'Tools',
    skills: [
      'Maven',
      'Gradle',
      'Spring Data JPA',
      'Hibernate',
      'Postman',
      'Git',
      'VS Code',
      'Eclipse',
      'PhpMyAdmin',
    ],
  },
];

const socialLinks = [
  { link: 'https://github.com/akashverma004', icon: IconBrandGithub },
  { link: 'https://linkedin.com/in/akashverma004', icon: IconBrandLinkedin },
  { link: 'https://leetcode.com/u/akash_verma_004/', icon: IconBrandLeetcode },
  { link: 'https://www.instagram.com/__akash_004', icon: IconBrandInstagram },
  { link: 'https://youtube.com/', icon: IconBrandYoutube },
];

const ExperienceInfo = [
  {
    role: 'Software Developer',
    company: 'ToXSL Technologies Pvt Ltd',
    date: 'March 2024 - Present',
    desc: 'Leveraged PHP Frameworks like Laravel and Yii2 and resources like composer for efficient backend operation. Conducted API implementation, fetching, mapping and posting of data including to different APIs, endpoints for PUT, GET, POST and DELETE methods.',
    skills: ['PHP', 'Yii2', 'Laravel', 'Bootstrap', 'MySQL'],
  },
  {
    role: 'Full Stack Developer Trainee',
    company: 'Geeta Pariwar',
    date: 'June 2023 - March 2024',
    desc: 'Developed and maintained full stack Ed-Tech web application using PHP and MySQL, focusing user-centric layout views. Worked on user management, exam management and content management portals. Designed and developed their multiple online portals which increases their global presence.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
];

const Slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
