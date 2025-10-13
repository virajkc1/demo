import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import my_name from "../images/my_name.png";

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
        <h1 className="name">
          <img
            src={my_name}
            alt="Viraj Chapaneri"
            className="m-auto w-[80%] h-[80%] object-cover"
          />
        </h1>
        <h2 className="title pb-10">Junior Software Engineer</h2>

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
        <a
          href="https://github.com/virajkc1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/viraj-chapaneri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
