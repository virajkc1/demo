import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      dates: "2024 - PRESENT",
      title: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      description:
        "Building accessible UI components for Klaviyo's platform with a focus on inclusive design and WCAG compliance.",
      tech: ["JavaScript", "TypeScript", "React", "Storybook"],
      links: [],
    },
    {
      dates: "2018 - 2024",
      title: "Lead Engineer",
      company: "Upstatement",
      description:
        "Building high-quality websites, design systems, and mobile apps for various clients including Harvard Business School, Spotify, and The Boston Globe.",
      tech: [
        "JavaScript",
        "TypeScript",
        "HTML & SCSS",
        "React",
        "Next.js",
        "React Native",
        "WordPress",
        "Contentful",
        "Node.js",
        "PHP",
      ],
      links: [],
    },
    {
      dates: "July - Dec 2017",
      title: "UI Engineer Co-op",
      company: "Apple",
      description:
        "Developed web applications for Apple Music, including an embeddable player widget used by publications like 9to5Mac and The Verge.",
      tech: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
      links: [
        { text: "MusicKit.js", url: "#" },
        { text: "9to5Mac", url: "#" },
        { text: "The Verge", url: "#" },
      ],
    },
    {
      dates: "2016 - 2017",
      title: "Developer",
      company: "Scout Studio",
      description:
        "Collaborated on pro-bono projects for community organizations, focusing on clean code and user experience.",
      tech: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
      links: [],
    },
    {
      dates: "July - Dec 2016",
      title: "Software Engineer Co-op",
      company: "Starry",
      description:
        "Engineered features for a customer-facing Android app, working with Cordova and Backbone.js frameworks.",
      tech: ["Cordova", "Backbone", "JavaScript", "CSS"],
      links: [
        { text: "Android App", url: "#" },
        { text: "ScreenTime 2.0", url: "#" },
      ],
    },
    {
      dates: "July - Dec 2015",
      title: "Creative Technologist Co-op",
      company: "MullenLowe U.S.",
      description:
        "Developed and maintained client websites, working closely with designers and account managers.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      links: [],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-dates">{exp.dates}</div>
          <div className="experience-content">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
            <div className="tech-tags">
              {exp.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {exp.links.length > 0 && (
              <div className="experience-links">
                {exp.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url}>
                    <FaCheck />
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      <div style={{ marginTop: "40px" }}>
        <a href="#" className="archive-link">
          View Full Résumé
          <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  );
};

export default Experience;
