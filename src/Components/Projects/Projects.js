import React from 'react';
import './Projects.css'
import Project from './../Project/Project';

const projectsData = [
  {
    "id": 1,
    "img": "https://image.cnbcfm.com/api/v1/image/101923547-451268432r.jpg?v=1602705921",
    "name": "❖ DeshiCar - Best Car Resale Shop",
    "website": " https://car-resale-8975e.firebaseapp.com/",
    "frontendGit": "https://github.com/toukircse77/Used-Cars-resale-commerce",
    "backendGit": " https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-toukircse77",
    "linkedin": "https://www.linkedin.com/in/toukircse777",
    "des": [
      "➣ A responsive, fully-functional niche website",
      "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
      "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "#MUI",
      "#JS",
      "#React",
      "#Aso",
      "#React router",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ]
  },
  {
    "id": 2,
    "img": "https://www.jll.be/images/teaser/jll-foodservice-the-post-covid-19-landscape-1200x628.jpg",
    "name": "❖ KhabarBari - Best Food Service Provider",
    "website": "https://khabarbari.web.app/",
    "frontendGit": "https://github.com/toukircse77/Food-Bank-Commerce",
    "backendGit": " https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-toukircse77",
    "linkedin": "https://www.linkedin.com/in/toukircse777",
    "des": [
      "➣ KhabarBari agency website with dynamic functions and responsive design.",
      "➣ Allows user to create an account, book packages, add custom packages, and delete them.",
      "➣ Google firebase authentication has been added.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ]
  },
  {
    "id": 3,
    "img": "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg",
    "name": "❖ Edutech - Online Educatin Learning Platform",
    "website": "https://educamp-45bf5.web.app/",
    "frontendGit": "https://github.com/toukircse77/Skill-Hunrer",
    "linkedin": "https://www.linkedin.com/in/toukircse777",
    "des": [
      "➣ A fully functional dynamic responsive website",
      "➣ User can see his name and profile picture in the header after signin with Google.",
      "➣ Navigate different pages is possible through navbar without reloading.",
    ],
    "Technology": [
      "#Html5",
      "#Css3",
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Firebase"
    ]
  },
  {
    "id": 4,
    "img": "http://pm1.narvii.com/6267/6f946bb9a20d6f8637ebcb62fa7a1bd687b95f8f_00.jpg",
    "name": "❖ Skill Hunter - Talent Hunting WebSite",
    "website": " https://imaginative-basbousa-0040ef.netlify.app",
    "frontendGit": "https://github.com/toukircse77/Skill-Hunrer",
    "linkedin": "https://www.linkedin.com/in/toukircse777",
    "des": [
      "➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript",
      "➣ Used fancy carousel & hosted on netlify",
      "➣ Amzging UI exprience",
    ],
    "Technology": [
      "#HTML5",
      "#CSS3",
      "#BootStrap",
      "#JavaScript",
    ]
  }
]
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-start pb-5 mb-5 container">My projects_</h2>
      {projectsData.map((project) => <Project key={project.id} project={project}></Project>)}
    </div>
  );
};

export default Projects;