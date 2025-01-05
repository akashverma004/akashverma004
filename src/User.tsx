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
    image: 'Icons\TodoApp.png',
    live: false,
    technologies: ['Java', 'Spring MVC', 'Springboot', 'Hibernate', 'Spring Data JPA'],
    link: '',
    github: 'https://github.com/akashverma004/JavaTodo',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
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
