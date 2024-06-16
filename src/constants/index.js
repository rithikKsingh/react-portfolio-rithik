import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable web applications. I have honed my skills in technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My technical proficiency includes building efficient server-side applications, designing flexible NoSQL databases, and managing relational database systems. Additionally, I have a moderate understanding of C++ and Java, which enhances my ability to apply object-oriented programming principles. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a software developer with a Master of Science in Information Technology from Dhirubhai Ambani Institute of Information and Communication Technology. I specialize in Node.js, Express.js, MongoDB, PostgreSQL, and MySQL, with proficiency in C++, Java, HTML, JavaScript,React.js and SQL. My interests include OOP, Database Management Systems, Software Project Management, and Backend Development. I am proficient with developer tools like VS Code, IntelliJ IDEA, and Atom.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - June 2024",
    role: "Full Stack Developer Intern",
    company: "Business Web Solutions",
    description: `Collaborated with the team in developing and maintaining web applications using JavaScript, React.js, Node.js and MongoDB. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "May 2023 - July 2023",
    role: "Backend Developer Intern",
    company: "Dhirubhai Ambani Institute Of Information And Communication Technology",
    description: `Designed and developed API's and database schemas for web applications using Node.js. Worked closely with frontend developers to integrate backend with frontend. Followed MVC architecture during the development of the application`,
    technologies: ["MongoDb", "Express.js", "React.js", "Node.js"],
  },
];

export const EDUCATION = [
  {
    year: "July 2022 - May 2024",
    role: "M.Sc Information Technology",
    company: "DA-IICT",
    description: "Subjects : C++, Java, OOPs, DBMS, Web Development, Cloud Computing, System Programming, Computer Networks, SDLC",
    technologies: [],
  },
  {
    year: "August 2019 - July 2022",
    role: "B.Sc(Hons) Chemistry",
    company: "Hansraj College, University of Delhi",
    description: "Subjects : Computational Chemistry, Inorganic Chemistry, Organic Chemistry, Physical Chemistry, Analytical Thinking",
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart,user authentication and payment functionality using PayPal.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "WanderNest",
    image: project2,
    description:
      "Developed an online marketplace and hospitality service, leading to a fully functional platform that facilitated over 100 short-term lodging rentals",
    technologies: ["NextJs", "Prisma", "MongoDb", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "singhrithik651@gmail.com",
};
