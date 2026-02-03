import { Education, Experience, Projects, Certification, SkillCategory } from "@/types";

export const personalInfo = {
  name: "Tejas S Shetty",
  title: "Full Stack Developer",
  location: "Bangalore, Karnataka",
  email: "tejas.s.shetty2000@gmail.com",
  socials: {
    github: "https://github.com/TejasShetty18",
    linkedin: "https://www.linkedin.com/in/tejas-s-shetty-12b15a23b/",
  },
  summary:
    "Full Stack Developer with expertise in Node.js, React, and Cloud technologies (AWS/GCP). Experienced in building scalable APIs, integrating complex payment systems like Stripe, and optimizing backend performance.",
};

export const educationData: Education = {
  college: "MIT, Manipal Institute of Technology, Manipal ",
  degree: "MCA - Master of Computer Application",
  period: "2022 – 2024",
  percent: "CGPA- 7.53"
}

export const experienceData: Experience[] = [
  {
    company: "Saigeware Technologies",
    role: "Full Stack Development",
    period: "May 2024 - Present",
    description: [
      "Developed and maintained backend APIs using Node.js, Firebase, and GCP.",
      "Integrated Stripe payments and Zoho CRM for seamless transaction and communication workflows.",
      "Collaborated on frontend development using React.js, TypeScript, Ant Design, and ShadCN UI.",
      "Gained expertise in Firestore, Firebase Cloud Functions, and cloud-based data management.",
      "Improved full-stack development skills, including end-to-end integration of frontend, backend, and cloud services.",
      "Strengthened cross-team communication and collaboration in Agile development environments."
    ],
  },
  {
    company: "Freelance",
    role: "Backend Developer",
    period: "August 2025 - Present", // Note: Dates from resume kept as is
    description: [
      "Developed and maintained backend services using Node.js and AWS for production applications",
      "Designed and implemented RESTful APIs consumed by React frontend applications",
      "Built scalable data models and performed CRUD operations using AWS DynamoDB and MySQL",
      "Integrated AWS services for backend deployment, data storage, and cloud scalability"
    ],
  },
  {
    company: "Ganglia Technologies",
    role: "SDE Intern",
    period: "Jan 2024 - April 2024",
    description: [
      "Developed robust backend features using MERN stack technologies.",
      "Collaborated in Agile teams to deliver timely and efficient software solutions.",
      "Developed a digital Medical Log Book System to modernize traditional record-keeping for administrators, HODs, faculty, and students by integrating experience logging, attendance management, internal marks tracking, marks sheet generation, and feedback mechanisms, enhancing transparency, data-driven decision-making, and administrative efficiency in medical education.",
    ],
  },
]

export const projectData: Projects[] = [
  {
    title: "HealthCare App",
    description:
      "A platform allowing patients to book appointments and physicians to manage profiles. Features real-time status updates.",
    techStack: ["React.js", "Node.js", "Firebase", "Ant Design"],
    link: "https://github.com/TejasShetty18/HealtCare_Backend",
    demoLink: "https://main--tejas-healthcare.netlify.app/"
  },
  {
    title: "Badminton Score Master",
    description:
      "Android app for tracking badminton scores and managing tournaments seamlessly.",
    techStack: ["Android", "Java"],
    link: "https://github.com/TejasShetty18/BadmintonScore-App",
    demoLink: "https://drive.google.com/file/d/1rXVlhsU_6NVjqe2F-WzS2k-y7fi9e-FP/view"
  },
  {
    title: "My Blog",
    description:
      "Blogging platform allowing users to upload posts and comment. Built with Django and SQLite.",
    techStack: ["Python", "Django", "HTML/CSS"],
    link: "https://github.com/TejasShetty18/MyBlog",
    demoLink: "#"
  },
  {
    title: "Second Chance",
    description:
      "Marketplace for buying and selling expendable items at economical prices.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/TejasShetty18/second_chance",
    demoLink: "https://secondchance.onrender.com"
  },
  {
    title: "My Portfolio",
    description:
      "A modern and responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It showcases my experience, projects, and technical skills with a clean UI and fast performance.",
    techStack: ["Next.js", "TypeScript", "Shadcn","Tailwind"],
    link: "https://github.com/TejasShetty18/my-portfolio",
    demoLink: "https://tejas-s-shetty-portfolio.vercel.app/"
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Tech",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Django",
      "ShadCN UI",
      "Ant Design",
      "HTML5",
      "CSS3",
      "Next.js"
    ],
  },
  {
    category: "Cloud & Databases",
    skills: ["AWS", "GCP", "Firebase", "MongoDB", "MySQL", "DynamoDB"],
  },
  {
    category: "Developer Tools",
    skills: ["VS Code", "Juypter", "Figma", "GitHub", "GitLab", "Bitbucket"]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Python Django",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-a5d8805c-ecaf-44d5-9599-5175d14f1ca6/", // Update these!
  },
  {
    title: "MongoDB with NodeJS",
    issuer: "MongoDB",
    link: "https://learn.mongodb.com/c/M_zGrypcRyiKk7_9TPJzxA",
  },
  {
    title: "Python Flask",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-649f9903-bb76-44d2-a196-22d7f18690c5/",
  },
  {
    title: "Node.js, Express & MongoDB",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-846016dc-f968-41fa-80ec-7782a26bb9d5/",
  },
];

