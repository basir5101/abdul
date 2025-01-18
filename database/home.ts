import { AtSign, Facebook, Github, Linkedin, PhoneCall } from "lucide-react";

export const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Blogs", link: "#blogs" },
  { label: "Testimonials", link: "#testimonials" },
  { label: "Contact", link: "#contact" },
];

export const heroContent = {
  heading: "Hi, I'm Abdul Basir!",
  subheading:
    "Full-Stack Web Developer | Specializing in React.js, Next.js, Node.js, and Tailwind CSS",
  ctaButton: {
    label: "View My Projects",
    link: "/projects",
  },
  image: "/images/ab2.png", // Add your image path here
};

export const aboutContent = {
  title: "About Me",
  description: `
        I am a passionate full-stack web developer with over 3 years of experience working with modern technologies like Next.js, Node.js, and Tailwind CSS. 
        My journey began with web development, and over the years, I've built scalable applications for various industries, including fintech and SaaS.
        I love taking on challenging projects that push the boundaries of what’s possible on the web.`,
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap CSS",
    "Material-UL",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Prisma",
    "MySQL",
    "MongoDB",
    "Strapi",
    "Sanity",
    "Go",
    "Azure-Cloud",
    "AWS- S3, SES",
  ],
  cta: {
    label: "View My Experience",
    link: "/experience",
  },
};

export const projects = [
  {
    name: "Boya - Food Marketing Landing Page",
    description:
      "A visually appealing landing page for a food marketing brand, featuring dynamic content management and interactive elements.",
    technologies: ["Tailwind CSS", "Next.js", "Sanity", "Swiper JS"],
    image: "/images/boya.png",
    liveDemo: "https://boya-8sokujclv-basir5101s-projects.vercel.app/",
    github: "https://github.com/basir5101/boya",
  },
  {
    name: "Web Scraping with Go",
    description:
      "A web scraper built using Go and Colly, designed to extract data from multiple pages and output structured JSON results.",
    technologies: ["Go", "Colly", "Goquery"],
    image: "/images/web-scrapper.png",
    liveDemo: "",
    github: "https://github.com/basir5101/web_scrapper",
  },
  {
    name: "Multilingual Food E-commerce Website",
    description:
      "An e-commerce platform for food products with dual language support, secure payment integration, and modern UI features.",
    technologies: [
      "Next.js",
      "Next-auth",
      "Tailwind CSS",
      "Swiper JS",
      "ShadCN",
      "Prisma",
      "Firebase",
      "MangoPay",
      "Next18",
    ],
    image: "/images/bottle.png",
    liveDemo: "https://alakave-c45642oqk-basir5101s-projects.vercel.app",
    github: "https://github.com/basir5101/alakave",
  },
  {
    name: "Report Marking Website",
    description:
      "A platform that allows users to generate reports for market insights and visualize data, optimized for seamless user interaction.",
    technologies: ["Tailwind CSS", "Next.js"],
    image: "/images/dim.png",
    liveDemo: "https://www.datainsightsmarket.com",
    github: "",
  },
  {
    name: "Cover Page Generator",
    description:
      "A tool that generates custom cover pages for reports and documents, with flexible templates and user-friendly design.",
    technologies: ["Bootstrap", "Next.js"],
    image: "/images/cover.png",
    liveDemo: "https://cover-page-gw3jwcdx4-basir5101.vercel.app",
    github: "https://github.com/basir5101/cover_page",
  },
  {
    name: "Apps Factory",
    description:
      "A tool that do a lot of things like image resize, text formate, youtube thumbnail generation and a lot of other things",
    technologies: ["Tailwind css", "Next.js"],
    image: "/images/apps.png",
    liveDemo: "https://www.appsfactory.dev",
    github: "",
  },
];

export type Project = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  liveDemo: string | null;
  github: string | null;
};

export const blogDetails = [
  {
    id: 1,
    img: "/a.png",
    title: "The 10 Topics of JavaScript you should know in 2020",
    link: "https://medium.com/@basir.bsmrstu/the-10-topics-of-javascript-you-should-know-in-2020-a169185dfb28",
    des: "somThe list we are going to learn… 1. Variable (var, let) and const 2. For loop 3. Data types.....thing",
  },
  {
    id: 1,
    img: "/b.png",
    title: "10 Topics from ES6 you should know to be a web developer",
    link: "https://basir-bsmrstu.medium.com/10-topics-from-es6-you-should-know-to-a-web-developer-daf2aa8a54c6",
    des: "1.Var Declaration and Hoisting: what is hoisting? when we declare any variable or function name.....",
  },
  {
    id: 1,
    img: "/c.png",
    title: "10 React Fundamental Concept You Should Know",
    link: "https://basir-bsmrstu.medium.com/10-react-fundamental-concept-you-should-know-c54fde8d900c",
    des: "React is a JavaScript library. We can make single page application with react so easily. With react.....",
  },
  {
    id: 1,
    img: "/d.png",
    title: "10 JavaScript Array Methods You Should Know",
    link: "https://basir-bsmrstu.medium.com/10-javascript-methods-you-should-know-fbcf1eb285fe",
    des: "Array is one of the most important thing in JavaScript. Without array you cannot imagine JavaScript. Array is....",
  },
];

export const contactContent = {
  heading: "Get in Touch",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  formFields: [
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Message", type: "textarea", name: "message" },
  ],
  submitButton: {
    label: "Send Message",
    link: "/send-message", // Adjust to your form handling method
  },
  socialLinks: {
    github: "https://github.com/basir5101",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourprofile",
  },
};

export const contactDetails = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-basir-b087971b1/",
    Icon: Linkedin,
  },
  {
    title: "Github",
    link: "https://github.com/basir5101",
    Icon: Github,
  },
  {
    title: "Email",
    link: "basir.bsmrstu@gmail.com",
    Icon: AtSign,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/basir5101",
    Icon: Facebook,
  },
  {
    title: "Phone",
    link: "https://wa.me/1774066225",
    Icon: PhoneCall,
  },
];
