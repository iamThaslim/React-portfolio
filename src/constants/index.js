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
    calc_js,
    todo,
    tripguide,
    threejs,
    logo,
    portf,
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
    {
      name: "Simple-Calculator",
      description:
        "A simple calculator created using html, css and javascript.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: " css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calc_js,
      source_code_link: "https://github.com/iamThaslim/JS-Calculator",
    },  
    {
      name: "React-Todo List",
      description:
        "This project is a simple to-do list application built using ReactJS and Vite. Users can add new tasks to the list, mark tasks as completed, and delete completed tasks.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/iamThaslim/react-to-do-list",
    }, 
    {
      name: "React-Portfolio",
      description:
        "A 3D portfolio made using modern reactjs and Threejs.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "framerMotion",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: portf,
      source_code_link: "https://github.com/iamThaslim/React-portfolio",
    }, 
  ];
  
  export { services, technologies, experiences, projects };