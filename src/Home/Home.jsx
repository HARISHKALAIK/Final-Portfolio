import React from "react";
import "../../src/Home/Home.css";
import heroImg from "../../src/assets/harish.jpeg";
import { FaLinkedin,  FaGithub} from "react-icons/fa";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/about";
import Footer from "../Footer/footer";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <p className="tag">Hi I am, </p>
          <h1 className="contact-title"><span>Harish K</span></h1>
          <h1>Java Full Stack Developer</h1>
          <p className="desc">
            I love building clean and responsible modern web applications using React, Spring Boot, and MySQL.
          </p>

          {/* Social Icons */}
          <div className="social-icons">

  <a
    href="https://www.linkedin.com/in/harish2002"
    target="_blank"
    rel="noreferrer"
    data-name="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/HARISHKALAIK"
    target="_blank"
    rel="noreferrer"
    data-name="GitHub"
  >
    <FaGithub />
  </a>

</div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Harish K" />
        </div>
      </section>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;