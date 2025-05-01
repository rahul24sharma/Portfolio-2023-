import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    webcraft,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Full Stack Developer (MERN)",
      icon: web,
    },
    {
      title: "Frontend Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud & DevOps Enthusiast",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Webcraft IT",
      icon: webcraft,
      iconBg: "#383E56",
      date: "June 2023 - August 2024",
      points: [
        "Engineered and deployed secure authentication systems using Django REST + JWT, aligning with security compliance requirements.",
        "Optimized React healthcare dashboards with lazy loading and component-level tuning, improving performance by 45%.",
        "Designed and optimized responsive React UI/UX with accessibility best practices and Three.js, boosting engagement by 30% through intuitive workflows and performance enhancements like lazy loading.",
        "Reduced API response latency by 25% through Express middleware optimization, efficient route handling, and indexed SQL queries.",
        "Worked in Agile sprints to deliver 15+ user stories, conducting code reviews and pair programming."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Webcraft IT",
      icon: webcraft,
      iconBg: "#383E56",
      date: "December 2022 - May 2023",
      points: [
        "Increased SQL report generation speed by 35% by implementing optimized indexing in Django-admin reports.",
        "Built a RESTful API with Node to handle real-time data processing for 500+ users, achieving 99% up time on AWS.",
        "Containerized full-stack application with Docker, reducing setup time by 60% and easing cross-env deployments.",
        "Diagnosed and resolved RBAC conflicts, enhancing app-level security and access control integrity.",
        "Integrated third-party APIs for payments and data processing, improving system reliability and customer experience by 15% through collaboration and effective communication."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "This website is incredibly designed.",
      name: "Arihant Jain",
      designation: "CEO",
      company: "Webcraft",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rahul does.",
      name: "Saksham gupta",
      designation: "Senior Software Engineer",
      company: "Webcraft",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rahul optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Abhishek Sharma",
      designation: "Team Lead",
      company: "Webcraft",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job Application Portal",
      description:
        "A Job Application Portal is an online platform that allows job seekers to apply for various positions within an organization or across multiple companies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Inventory Management System",
      description:
        "An Inventory Management System (IMS) is a software solution designed to track and manage a company's inventory levels, orders, sales, and deliveries.",
      tags: [
        {
          name: "JAVAswing",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work with press, potential collaborators or employers.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
