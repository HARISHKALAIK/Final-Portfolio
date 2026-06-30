import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7cn5f3",
        "template_a6wlscb",
        form.current,
        "QW4WMAYSICUghyOeI"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FULL ERROR:", error);
          alert(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h1>Contact Me</h1>

          <p className="contact-desc">
            Let’s build something amazing together. Whether you have
            a project idea, freelance work, or just want to connect,
            feel free to send me a message.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Get In Touch
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

  <h2 className="contact-title">
    Let's <span>talk</span><br />
    Something special
  </h2>

  <p className="right-desc">
    I'm open to new opportunities, collaborations, and exciting
    projects. Feel free to reach out anytime!
  </p>

  {/* Email */}
  <a href="mailto:kharish23k@gmail.com" className="contact-link">
    <FaEnvelope className="contact-icon" />
    <span>kharish23k@gmail.com</span>
  </a>

  {/* Phone */}
  <a href="tel:+916369564771" className="contact-link">
    <FaPhoneAlt className="contact-icon" />
    <span>+91 6369564771</span>
  </a>

  {/* Social Icons */}
  <div className="social-links">

    <a
      href="https://www.linkedin.com/in/harish2002/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://github.com/HARISHKALAIK"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

  </div>

</div>

      </div>
    </section>
  );
}

export default Contact;