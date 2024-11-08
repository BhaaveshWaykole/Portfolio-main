/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Aastha Arora",
  logo_name: "Aastha Arora",
  // nickname: "",
  full_name: "Aastha Arora",
  subTitle1: "Software Developer.",
  subTitle2: "Tech Ethusiast.",
  subTitle: "Full Stack Developer, Life Long Learner.",
   resumeLink:
    "/Aastha Arora's Resume01.pdf",
  mail: "aastha.arora.btech2022@sitpune.edu.in",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Aastha2376",
  linkedin: "https://www.linkedin.com/in/aastha-arora-0a6b10317/",
  gmail: "aastha.arora.btech2022@sitpune.edu.in",
  twitter: "https://twitter.com/",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "My Tech Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing dynamic and responsive frontends using frameworks like React to deliver seamless user experiences",
        "⚡ Leveraging Python libraries for data analysis and pattern recognition to make data-driven decisions and insights",
        "⚡ Creating application backend in Node, Express, MongoDB and Rest API",
        "⚡ Java is my go-to language, where I combine technical finesse with creativity to turn ideas into solutions",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0769ad",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "Redux",
        //   fontAwesomeClassname: "simple-icons:redux",
        //   style: {
        //     color: "#593D88",
        //   },
        // },
        // {
        //   skillName: "Angular",
        //   fontAwesomeClassname: "simple-icons:angular",
        //   style: {
        //     color: "#dd0031",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        // {
        //   skillName: "Material UI",
        //   fontAwesomeClassname: "simple-icons:uikit",
        //   style: {
        //     color: "#007FFF",
        //   },
        // },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Framer Motion",
        //   fontAwesomeClassname: "logos:framer",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Bootstrap",
        //   fontAwesomeClassname: "simple-icons:bootstrap",
        //   style: {
        //     color: "#563d7c",
        //   },
        // },
        // {
        //   skillName: "Postman",
        //   fontAwesomeClassname: "simple-icons:postman",
        //   style: {
        //     color: "#FF6C37",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "Cloudinary",
        //   fontAwesomeClassname: "logos:cloudinary-icon",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Stripe",
        //   fontAwesomeClassname: "logos:stripe",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-brands:java",
          style: {
            color: "#00D4FF",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "Git",
        //   fontAwesomeClassname: "simple-icons:git",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Soft Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Strong communication and collaboration skills, ensuring seamless teamwork ",
        "⚡ Proven leadership abilities, guiding teams toward shared goals",
        "⚡ Time management, prioritization, creativity, and innovation",
      ],
      softwareSkills: [
        // {
        //   skillName: "Communication",
        //   fontAwesomeClassname: "",
        //   style: {
        //     backgroundColor: "transparent",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Team Management",
        //   fontAwesomeClassname: "",
        //   style: {
        //     color: "gray",
        //     fill: "gray",
        //     // backgroundColor: "white",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "Team Work",
          fontAwesomeClassname: "fa-solid fa-users",
          style: {
            color: "#38AFBB",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Innovation",
          fontAwesomeClassname: "fa-solid:lightbulb",
          style: {
            color: "#6863A6",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Time Management",
          fontAwesomeClassname: "fa-solid:clock",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Critical Thinking",
          fontAwesomeClassname: "fa-solid:brain",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Communication",
          fontAwesomeClassname: "simple-icons:teamspeak",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "GitHub Actions",
        //   fontAwesomeClassname: "simple-icons:githubactions",
        //   style: {
        //     color: "#5b77ef",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Symbiosis Institute of Technology, Pune",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "Symbiosis.jpg",
      alt_name: "Symbiosis University",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ GPA: 8.37/10",
        "⚡ Relevant Coursework: Data Structures, Web Development, MongoDB, Operating Systems, Machine Learning.",
      ],
      website_link: "https://www.sitpune.edu.in/",
    },
    {
      title: "Ryan International School, Vasant Kunj",
      subtitle: "Secondary School Education",
      logo_path: "ryan01.webp",
      alt_name: "RISVK",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ 10th Grade: 96% | 12th Grade: 94.2%",
        "⚡ Achievements: Best Research Paper at ICIMR 2021, Conrad Innovator 2020 for NeroAIR & SYKS OCEAN Secure, consecutive Gold/Bronze medals in International Maths & National Science Olympiads for 3 years."
      ],
      website_link: "https://www.ryaninternational.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Data Science-Academor",
      subtitle: "",
      logo_path: "c1.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "Data Science Zero to Hero",
      subtitle: "",
      logo_path: "c2.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "Automated Machine Learning for Beginners",
      subtitle: "",
      logo_path: "c1.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "GenAI: Beginner to Advanced in AI ",
      subtitle: "",
      logo_path: "c2.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    // {
    //   title: "Django Application Development with SQL and Databases",
    //   subtitle: "",
    //   logo_path: "ibm_logo.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/47d8c39642888094ad458b5e44a3c9f3",
    //   alt_name: "IBM",
    //   color_code: "#096ce1",
    // },
    // {
    //   title: "Developing AI Applications with Python and Flask",
    //   subtitle: "",
    //   logo_path: "ibm_logo.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/f4ce59c0d68e4569056faaf2fdb4c256",
    //   alt_name: "IBM",
    //   color_code: "#096ce1",
    // },
    // {
    //   title: "Frontend Developer Capstone",
    //   subtitle: "",
    //   logo_path: "meta_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
    //   alt_name: "Meta",
    //   color_code: "#096ce1",
    // },
    // {
    //   title: "Advanced React",
    //   subtitle: "",
    //   logo_path: "meta_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
    //   alt_name: "Meta",
    //   color_code: "#096ce1",
    // },
    {
      title: "Java Programming: Build a Recommendation System",
      subtitle: "",
      logo_path: "c1.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "c2.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "c1.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "c2.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Principles of Software Design",
      subtitle: "",
      logo_path: "c1.jpg",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    // {
    //   title: "Java Programming: Solving Problems with Software",
    //   subtitle: "",
    //   logo_path: "duke-logo.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/36411fcea7ea4fbb5c613ef4911f4668",
    //   alt_name: "Duke University",
    //   color_code: "#001a57",
    // },
    // {
    //   title: "Programming Foundations with JavaScript, HTML and CSS",
    //   subtitle: "",
    //   logo_path: "duke-logo.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/0269c76c33997304d1842d4eef16815b",
    //   alt_name: "Duke University",
    //   color_code: "#001a57",
    // },
    // {
    //   title: "Android Application Development - II",
    //   subtitle: "- Dr. Adam Porter",
    //   logo_path: "maryland_logo.svg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/GN48B7W9TU59",
    //   alt_name: "Stanford University",
    //   color_code: "#e11a2b",
    // },
    // {
    //   title: "Android Application Development - I",
    //   subtitle: "- Dr. Adam Porter",
    //   logo_path: "maryland_logo.svg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/2H59Z22DDSU8",
    //   alt_name: "Stanford University",
    //   color_code: "#e11a2b",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Christian Hur",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
    //   alt_name: "Coursera",
    //   color_code: "#0056d2",
    // },
    // {
    //   title: "ML and AI in GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
    //   alt_name: "GCP",
    //   color_code: "#2fa9508a",
    // },
    // {
    //   title: "Foundational Infrastructure in GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
    //   alt_name: "GCP",
    //   color_code: "#4087f08a",
    // },
    // {
    //   title: "Networking & Security in GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
    //   alt_name: "GCP",
    //   color_code: "#eb40308a",
    // },
    // {
    //   title: "Cloud Computing Fundamentals in GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2469792",
    //   alt_name: "GCP",
    //   color_code: "#fabd008a",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Extracurricular Involvement",
  description:
    "As a proactive and enthusiastic student, I've actively engaged in various club activities, developing skills in coding, teamwork, public speaking, and event management. Below is an overview of my key extracurricular experiences.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Tech Club Member",
        company: "Codex",
        company_url: "https://fractal.ai/",
        logo_path: "l1.jpeg",
        alt_name: "fractal-logo",
        duration: "(2022-2023)",
        location: "Symbiosis Institute of Technology",
        description: "<li> Organized coding workshops for over 50 students, sharing insights on data science and promoting collaborative learning.Led guided discussions on trending data science topics, enhancing knowledge-sharing within the club. </li>",
        color: "#ffffff",
      },
      {
        title: "Drama Club Member",
        company: "Mosaic",
        company_url: "https://ottonomy.io/",
        logo_path: "l2.jpg",
        alt_name: "ottonomy-logo",
        duration: "(2022-2023)",
        location: "Gurugram (Hybrid)",
        description: "<li> Developed communication and teamwork skills through collaborative drama exercises and club activities.</li><br><li>Participated in and organized club events that promoted creativity and self-expression, fostering a strong sense of community.</li>",
        color: "#000000",
      },
      {
        title: "Event Anchor",
        company: "College Events",
        company_url: "https://www.infosys.com/",
        logo_path: "l3.jpeg",
        alt_name: "infosys-logo",
        duration: "(Aug, 2021 - May, 2023)",
        location: "Mysore (Remote)",
        description: "<li> Hosted major college fests like Prota and Reverb, honing public speaking and event management abilities.</li><br><li>Engaged diverse audiences, ensuring smooth event flow and memorable experiences for participants.</li><br><li>Developed an web based AR/VR learning platform using Node, Express and socket for multi-user experience and other features like chat, screen, audio and video share for web based.</li>",
        color: "#0071C5",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. My best experiences have been in creating MERN stack projects that integrate Data Science and Artificial Intelligence. Below are some of my projects that showcase these technologies:",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Cerebro Sync",
      url: "",
      repoUrl: "https://github.com/Aastha2376/Cerebro_Sync.git",
      description:
        "A MERN stack web app that combines AI and data science to boost student productivity through task management, a Pomodoro timer, habit tracking, and personalized insights.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        // {
        //   name: "Redux",
        //   iconifyClass: "logos:redux",
        // },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        // {
        //   name: "Stripe",
        //   iconifyClass: "logos:stripe",
        // },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        // {
        //   name: "Cloudinary",
        //   iconifyClass: "logos:cloudinary-icon",
        // },
        // {
        //   name: "Framer Motion",
        //   iconifyClass: "logos:framer",
        // },
      ],
    },
    {
      id: "project-1",
      name: "University Unified Login System",
      url: "",
      repoUrl: "https://github.com/Aastha2376/University-Unified-Login-System.git",
      description:
        "The Unified University Login System is a centralized authentication portal designed to streamline access to university services, including a Faculty Directory, Timetable, Event Calendar, and Important Portals, while enhancing security, user experience, and continuous optimization.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        // {
        //   name: "Redux",
        //   iconifyClass: "logos:redux",
        // },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        // {
        //   name: "Framer Motion",
        //   iconifyClass: "logos:framer",
        // },
      ],
    },
    {
      id: "project-2",
      name: "Speech Therapy Clinical services",
      url: "",
      repoUrl: "https://github.com/Aastha2376/SIH24.git",
      description:
        "Web-based solution for managing speech therapy services, including patient allocation, therapy planning, and progress tracking, integrating AI/ML for personalized therapy recommendations.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        // {
        //   name: "Angular",
        //   iconifyClass: "logos:angular-icon",
        // },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        // {
        //   name: "Handlebars",
        //   iconifyClass: "vscode-icons:file-type-handlebars",
        // },
      ],
    },
    {
      id: "project-3",
      name: "Symbiosis Classifieds",
      url: "",
      repoUrl: "https://github.com/Aastha2376/Symbiosis-Classifieds.git",
      description: "DBMS-powered symbiosis classifieds, fueled by MySQL, stand as an efficient, user-centric solution, dedicated to simplifying college life through seamless interactions.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "Travel Item App",
      url: "",
      repoUrl: "https://github.com/Aastha2376/Travel-Item-App.git",
      description:
        "This is an interesting a very useful app, which helps you alot in preparing your packing list before going on a trip.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        // {
        //   name: "Redux",
        //   iconifyClass: "logos:redux",
        // },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aasthaphoto2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
