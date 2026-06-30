import "./about.css";
import profile from "../assets/harish.jpeg"; // Your image

function About() {
  return (
    <section className="about" id="about">
      <div className="skills-header">
        <h1>About Me</h1>
        <div className="skills-heading-line"></div>
      </div>
      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <img src={profile} alt="Harish" className="profile-image" />
        </div>

        {/* Right Side */}
        <div className="about-right">

          <div className="info-card">
            <h2>💼 Professional Experience</h2>

            <div className="experience">
              <h3>Junior Software Developer</h3>

              <span>
                Talent Turbo | Nagercoil, Tamil Nadu | Present
              </span>

              <p>
                Currently working as a Junior Software Developer at Talent Turbo,
                where I develop and maintain enterprise-grade web applications
                and e-commerce platforms using React.js, Spring Boot, Node.js,
                and MongoDB. I design and implement secure RESTful APIs with
                JWT-based authentication and role-based authorization. I also
                integrate AWS S3 cloud storage and Razorpay payment gateway into
                production applications while collaborating with cross-functional
                Agile teams to deliver scalable, secure, and high-quality
                software solutions within project timelines.
              </p>
            </div>

            <hr />

            <div className="experience">
              <h3>Software Developer (Promoted from Intern)</h3>

              <span>
                MaDuSOFT Solutions | Coimbatore | Dec 2024 – June 2025
              </span>

              <p>
                Promoted from Software Development Intern based on technical
                performance and successful project delivery. Developed Vehicle
                Service Management and Task Management applications using
                React.js, Spring Boot, Node.js, and MySQL. Worked across the
                complete software development lifecycle including frontend
                development, backend API integration, database design,
                debugging, testing, client requirement gathering, and deployment
                support while actively participating in Agile development
                practices.
              </p>
            </div>
          </div>

          <div className="info-card">
            <h2>🎓 Education</h2>

            <div className="education">
              <h3>Master of Computer Applications (MCA)</h3>
              <p>
                Mepco Schlenk Engineering College, Sivakasi
              </p>
              <span>Anna University</span>
            </div>

            <div className="education">
              <h3>Bachelor of Science (Computer Science)</h3>
              <p>
                S.T. Hindu College, Nagercoil
              </p>
              <span>Manonmaniam Sundaranar University</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;