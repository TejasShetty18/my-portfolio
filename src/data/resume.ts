import { Experience, Projects, SkillCategory } from "@/types";

export const personalInfo = {
  name: "Tejas S Shetty",
  title: "Full Stack Developer",
  location: "Bangalore, Karnataka",
  email: "tejas.s.shetty2000@gmail.com",
  socials: {
    github: "https://github.com/TejasShetty18", // Update with real link
    linkedin: "https://www.linkedin.com/in/tejas-s-shetty-12b15a23b/", // Update with real link
    portfolio: "#",
  },
  summary:
    "Full Stack Developer with expertise in Node.js, React, and Cloud technologies (AWS/GCP). Experienced in building scalable APIs, integrating complex payment systems like Stripe, and optimizing backend performance.",
};

export const experienceData: Experience[] = [
    {
    company: "Saigeware Technologies",
    role: "Full Stack Development",
    period: "May 2024 - Present",
    description: [
      "Developed and maintained backend APIs using Node.js, Firebase, and GCP.",
      "Integrated Stripe payments and Zoho CRM for seamless transaction workflows.",
      "Collaborated on frontend using React.js, TypeScript, Ant Design, and ShadCN UI.",
    ],
  },
  {
    company: "Freelance",
    role: "Backend Developer",
    period: "August 2025 - Present", // Note: Dates from resume kept as is
    description: [
      "Designed RESTful APIs consumed by React frontend applications.",
      "Built scalable data models using AWS DynamoDB and MySQL.",
      "Integrated AWS services for backend deployment and cloud scalability.",
    ],
  },
  {
    company: "Ganglia Technologies",
    role: "SDE Intern",
    period: "Jan 2024 - April 2024",
    description: [
      "Developed a digital Medical Log Book System to modernize record-keeping.",
      "Integrated features for experience logging, attendance, and internal marks tracking.",
      "Collaborated in Agile teams to deliver efficient software solutions.",
    ],
  },
]

export const projectData: Projects[] = [
  {
    title: "HealthCare App",
    description:
      "A platform allowing patients to book appointments and physicians to manage profiles. Features real-time status updates.",
    techStack: ["React.js", "Node.js", "Firebase", "Ant Design"],
    link: "https://github.com/TejasShetty18/HealtCare_Backend"
  },
  {
    title: "Badminton Score Master",
    description:
      "Android app for tracking badminton scores and managing tournaments seamlessly.",
    techStack: ["Android", "Java"],
    link: "https://github.com/TejasShetty18/BadmintonScore-App"
  },
  {
    title: "My Blog",
    description:
      "Blogging platform allowing users to upload posts and comment. Built with Django and SQLite.",
    techStack: ["Python", "Django", "HTML/CSS"],
    link: "https://github.com/TejasShetty18/MyBlog"
  },
  {
    title: "Second Chance",
    description:
      "Marketplace for buying and selling expendable items at economical prices.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/TejasShetty18/second_chance"
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
    ],
  },
  {
    category: "Cloud & Databases",
    skills: ["AWS", "GCP", "Firebase", "MongoDB", "MySQL", "DynamoDB"],
  },
];