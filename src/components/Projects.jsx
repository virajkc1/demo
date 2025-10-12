import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Build a Spotify Connected App",
      description:
        "A video course that teaches you how to build a web application using the Spotify Web API. Along the way, you'll build a project management app called Taskly.",
      stats: "★ 696",
      tech: ["React", "Express", "Spotify API", "Heroku"],
    },
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blog theme for Jekyll, Ghost and other static site generators. Built with vanilla JavaScript and Sass.",
      stats: "100k+ Installs",
      tech: ["JavaScript", "Sass", "Jekyll", "Ghost"],
    },
    {
      title: "brittanychiang.com (v4)",
      description:
        "The fourth iteration of my personal website built with Gatsby, Styled Components, and deployed on Netlify.",
      stats: "★ 8,086",
      tech: ["Gatsby", "Styled Components", "Netlify"],
    },
    {
      title: "Apple Music Web Player",
      description:
        "A web-based music player built with Ember.js and the Apple Music JavaScript SDK. Features include playlist management and offline playback.",
      stats: "Featured on Apple",
      tech: ["Ember", "JavaScript", "Apple Music SDK", "CSS"],
    },
  ];

  const additionalProjects = [
    {
      year: "2024",
      title: "5 Common Accessibility Pitfalls and How to Avoid Them",
      icon: "📝",
    },
    {
      year: "2020",
      title: "Building a Design System from Scratch",
      icon: "🎨",
    },
    {
      year: "2019",
      title: "The Complete Guide to React Hooks",
      icon: "⚛️",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <a href="#" className="project-title">
                {project.title}
                <FaExternalLinkAlt />
              </a>
              <div className="project-stats">{project.stats}</div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <a href="#" className="archive-link">
          View Full Project Archive
          <FaArrowRight />
        </a>
      </div>

      <div className="additional-projects">
        <h3
          style={{ color: "#ccd6f6", fontSize: "20px", marginBottom: "20px" }}
        >
          Other Noteworthy Projects
        </h3>

        {additionalProjects.map((project, index) => (
          <div key={index} className="additional-project">
            <div className="project-year">{project.year}</div>
            <div className="project-thumbnail">{project.icon}</div>
            <div className="project-info">
              <a href="#">
                {project.title}
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            Loosely designed in Figma and coded in Visual Studio Code by yours
            truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            All text is set in the Inter typeface.
          </div>
          <div className="footer-icon">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
