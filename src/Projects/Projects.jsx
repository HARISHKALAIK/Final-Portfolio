import React, { useState } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import skillimg from "../assets/skills.png";
import wavesmist from "../assets/waves.png"
import gymImg from "../assets/gyy.jpg";
import restaurantImg from "../assets/res.jpg";
import groceryImg from "../assets/gro.jpg";
import mobileImg from "../assets/mo.jpg";

const projectsData = [
  {
    title: "Gym Management System",
    desc: "Built a full-featured gym member management system with CRUD operations, member profiles, and personalized diet plan management.Created scalable Spring Boot REST APIs and responsive React.js interfaces optimized for administrative workflows. Leveraged MongoDB's flexible document model for efficient storage and fast retrieval of member data. ",
    github: "https://github.com/HARISHKALAIK/Gym-Management-Website.git",
    visit: "https://gym-management-website-lemon.vercel.app/",
    image: gymImg,
  },

  {
    title: "Restaurant Management System",
    desc: "A restaurant management application that handles table booking, food ordering, menu management, kitchen workflow, and billing operations with a modern responsive interface.Online reservation platform for breakfast, lunch & dinner sessions with booking confirmation and history management. Features include menu browsing, celebration/party reservations, and a centralized secure backend API.Responsive UI with scalable architecture to eliminate booking conflicts and reduce manual reservation inefficiencies. ",
    github: "https://github.com/HARISHKALAIK/restaurant_website",
    visit: "https://restaurantwebsite-hazel.vercel.app/",
    image: restaurantImg,
  },

  {
    title: "Deevipani Grocery Shop",
    desc: "Engineered a full-stack grocery e-commerce platform featuring product browsing, shopping cart, wishlist,and end-to-end order management.Built Admin and Super Admin dashboards covering inventory control, category management, billing, and order lifecycle tracking. Integrated AWS S3 for image storage, OTP-based authentication for secure login, and Razorpay for seamless online payment processing.",
    github: "https://github.com/yourprofile/deevipani-grocery",
    visit: "https://devwebapp.deevipani.com/",
    image: groceryImg,
  },

  {
    title: "Hello Mobile Shop",
    desc: "A mobile shop website developed to showcase smartphones, accessories, offers, customer orders, invoice generation, and responsive product management features.",
    github: "https://github.com/yourprofile/hello-mobile-shop",
    visit: "https://your-mobile-demo.com",
    image: mobileImg,
  },
  {
    title: "Skillsquare Act Assessment",
    desc: "SkillSquare is a comprehensive career development and talent assessment platform designed to help students, colleges, and organizations identify strengths, bridge skill gaps, and improve employability. The platform provides assessment-driven insights, personalized learning recommendations, career guidance, and placement readiness support through an intuitive web-based interface. It aims to connect education with industry requirements by enabling skill evaluation, career planning, mentoring, and workforce development solutions.",
    github: "https://github.com/yourprofile/gym-management",
    visit: "https://skillsquare-vvhj.vercel.app/",
    image: skillimg,
  },
  {
  title: "Waves and Mist",
  desc: "Waves and Mist is a serene coastal getaway designed to offer a relaxing escape surrounded by the beauty of the sea, misty landscapes, and refreshing natural surroundings. The platform showcases comfortable stays, scenic views, and memorable experiences for travelers looking to unwind away from the busy city life. It provides visitors with an easy way to explore accommodation options, discover nearby attractions, and plan a peaceful seaside stay.",
  github: "https://github.com/yourprofile/waves-and-mist",
  visit: "https://www.wavesmist.com/",
  image: wavesmist,
},
];

function ProjectCard({ project, onClick }) {
  const [showMore, setShowMore] = useState(false);
 
  const shortText =
    project.desc.length > 180
      ? project.desc.slice(0, 180) + "..."
      : project.desc;

  return (
    <div className="projects-content" onClick={onClick}>

      <div className="projects-left">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="projects-right">

        <h3 className="projects-subtitle">
          {project.title}
        </h3>

        <div className="project-details">
          <p>
            {showMore ? project.desc : shortText}
          </p>

          {project.desc.length > 180 && (
            <button
  className="view-more-btn"
  onClick={() => setShowMore(!showMore)}
>
  {showMore ? "View Less" : "View More"}
</button>
          )}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="link-btn github-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className="link-btn visit-btn"
          >
            <FaExternalLinkAlt />
            Visit Site
          </a>

        </div>

      </div>

    </div>
  );
}

function Projects() 
{
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="projects" id="projects">

      <div className="skills-header">
        <h1>My Projects</h1>
        <div className="skills-heading-line"></div>
      </div>

      <p className="projects-heading-desc">
        Here are some of the projects I have developed using React,
        Spring Boot, and MySQL with modern responsive designs.
      </p>

      <div className="projects-grid">

       {projectsData.map((project, index) => (
  <ProjectCard
  key={index}
  project={project}
  onClick={() => setSelectedProject(project)}
/>
))}
      </div>
      {selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
      />

      <h2>{selectedProject.title}</h2>

      <p>{selectedProject.desc}</p>

      <div className="project-links">
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noreferrer"
          className="link-btn github-btn"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href={selectedProject.visit}
          target="_blank"
          rel="noreferrer"
          className="link-btn visit-btn"
        >
          <FaExternalLinkAlt /> Visit Site
        </a>
      </div>
    </div>
  </div>
)}

    </section>
    

  );
}

export default Projects;