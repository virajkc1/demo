import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <aside className="sidebar">
      <div>
        <h1 className="name">Brittany Chiang</h1>
        <h2 className="title">Front End Engineer</h2>
        <p className="tagline">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#about"
                onClick={
                  location.pathname === "/"
                    ? handleSmoothScroll
                    : () => handleNavigation("/")
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={
                  location.pathname === "/"
                    ? handleSmoothScroll
                    : () => handleNavigation("/")
                }
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={
                  location.pathname === "/"
                    ? handleSmoothScroll
                    : () => handleNavigation("/")
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={
                  location.pathname === "/"
                    ? handleSmoothScroll
                    : () => handleNavigation("/")
                }
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavigation("/blog")}>
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
