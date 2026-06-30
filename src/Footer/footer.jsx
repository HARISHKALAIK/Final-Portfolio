import "./footer.css";
import logo from "../assets/logoo.png"; // Your logo

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
        <h3>© 2026 Harish K Portfolio</h3>
        <p>Made by Harish K</p>
      </div>

    </footer>
  );
}

export default Footer;