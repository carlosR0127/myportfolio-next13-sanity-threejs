const mobile = '/assets/mobile.png'
const backend = '/assets/backend.png'
const creator = '/assets/creator.png'
const web = '/assets/web.png'
const javascript = '/assets/tech/javascript.png'
const typescript = '/assets/tech/typescript.png'
const html = '/assets/tech/html.png'
const css = '/assets/tech/css.png'
const reactjs = '/assets/tech/reactjs.png'
const redux = '/assets/tech/redux.png'
const tailwind = '/assets/tech/tailwind.png'
const nodejs = '/assets/tech/nodejs.png'
const mongodb = '/assets/tech/mongodb.png'
const git = '/assets/tech/git.png'
const figma = '/assets/tech/figma.png'
const docker = '/assets/tech/docker.png'
const kodingnext = '/assets/company/Kodingnext.png'
const blank = '/assets/company/blank.png'
const bawp = '/assets/ba-wp.png'
const baone = '/assets/ba-one.png'
const tenzies = '/assets/tenzies.png'
const threejs = '/assets/tech/threejs.svg'

export const navLinks = [
  // {
  //   id: "home",
  //   title: "Home",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  // {
  //   id: "blog",
  //   title: "Blog",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "MERN stack Developer",
    company_name: "ZelaSoftware Co Ltd",
    icon: blank,
    iconBg: "#383E56",
    date: "June 2019 - Mar 2021",
    points: [
      "I've grown my skills with many projects.",
      "Code using HTML, SCSS, and ReactJS to develop reusable component features for mobile responsive and desktop. ",
      "Followed SDLC best practices within an Agile environment to produce rapid iterations for clients.",
    ],
  },
  {
    title: "Senior Fullstack Developer",
    company_name: "ZelaSoftware Co Ltd",
    icon: blank,
    iconBg: "#383E56",
    date: "Apr 2021 - Present",
    points: [
      "I have been working there as a Full Stack developer and have developed several Full Stack Solutions using C#, .NET Core, .NET Framework, ASP.NET MVC, Blazor, SQL Database, Entity Framework, CI/CD Pipelines, React js, Azure, AWS, JavaScript, Bootstrap, jQuery, Entity framework, React Native, Microservices, etc.",
    ],
  },
  {
    title: "Senior .Net Developer",
    company_name: "Freelance",
    icon: kodingnext,
    iconBg: "#383E56",
    date: "August 2022 - June 2023",
    points: [
      "Developed and maintained enterprise-level solution (Human Resource Management Solution) using ASP.NET MVC, C#, and SQL Server.",
      "Integrated Azure services such as Azure Storage and Azure SQL Database for data storage and retrieval.",
      "Implemented authentication and authorization mechanisms using Azure Active Directory and OAuth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Kitchen Visualizer",
    description:
      "This is the project visualizing the kitchen for the users' satisfy",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: bawp,
    source_code_link: "https://www.fabuwood.com/visualizer/",
  },
  // {
  //   name: "My first react website",
  //   description:
  //     "this is my first react headless wordpress cms that's was ever used in this domain",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "graphql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "wordpress",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: baone,
  //   source_code_link: "https://github.com/Bung-Adi/bungadi-front-end-2022",
  // },
  {
    name: "Last Supper",
    description:
      "The users thumb up the food or restaurant they taste or visit so that providing the popularity",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tenzies,
    source_code_link: "https://lastsupper.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
