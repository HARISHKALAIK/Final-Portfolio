import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../src/assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/Skills" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">

        {/* LOGO */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* MOBILE RESUME BUTTON */}
          <li className="mobile-resume">
            <a href="/resume.pdf" className="resume-btn" download>
              Download Resume
            </a>
          </li>
        </ul>

        {/* DESKTOP RESUME BUTTON */}
        <a
          href="/resume.pdf"
          className="resume-btn desktop-resume"
          download
        >
          Download Resume
        </a>

        {/* MOBILE MENU */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;