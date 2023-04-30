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
    starbucks,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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

  ];
  
  const experiences = [
    {
      title: "FullStack Developer",
      company_name: "Branding Sparrow Software Solutions Pvt Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2022 - March 2023",
      points: [
        "Developing ecommerce projects using MERN stack.",
        "Participating in code reviews and contributing to team's coding standards.",
        "Troubleshooting and debugging code to maintain application functionality.",
        "Conducted manual testing of already built websites to ensure functionality and user experience.",
        "Collaborated with frontend design team and contributed to small tasks.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Kales Agro",
      description:
        "Kales Agro is an e-commerce platform for promoting sustainable, handmade, organic products.",
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
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://product.kalesagro.com/",
    },
    {
      name: "Kutti kidoos",
      description:
        "The project aimed at providing high-quality toys, superhero costumes, puzzles, study materials, and gifts for kid.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://kuttikidoos.com/",
    },   
  ];
  
  export { services, technologies, experiences, projects };