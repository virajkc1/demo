import unisun_homepage from "../images/Unisun_Homepage.png";
import glimpse_logo from "../images/glimpse_logo.png";
const Projects = () => {
  const featuredProjects = [
    {
      title: "Unisun Community Platform",
      description:
        "A forum site where students from the same course and university can communicate with peers and alumni asking for insight on course queries and career advice.",
      picture: unisun_homepage,
      link: "https://theunisun.com",
      tech: ["React", "Node.js", "NoSQL", "Express.js", "Tailwind CSS"],
    },
    {
      title: "Glimpse Browser Extension (TBF)",
      description:
        "A browser extension that allows you to call GPT-4 API from any website, sending instant zero shot responses.",
      picture: glimpse_logo,
      link: "https://github.com/virajkc1",
      tech: ["Manifest V3", "React.js", "Node.js", "GPT-4 API", "Tailwind CSS"],
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
      {featuredProjects.map((exp, index) => {
        return (
          <div
            key={index}
            className="max-w-[600px] mx-auto flex flex-col mb-10"
          >
            <div>
              <div className="flex flex-row justify-between">
                <h4 className="text-start mb-2 text-lg text-gray-700 font-semibold ">
                  {exp.title}
                </h4>
                <a
                  className="text-blue-600 hover:underline font-md"
                  href={exp.link}
                >
                  <span>... more</span>
                </a>
              </div>

              <h1 className="text-start leading-0 text-gray-700 text-sm ">
                {exp.description}
              </h1>
              <div className="mt-10 flex bg-[#f7f7f7] rounded-lg pb-10 p-5 justify-center">
                <img
                  className="w-[80%] h-[90%] mt-auto mb-auto justify-center object-cover border-gray-200  shadow-xl rounded-md"
                  src={exp.picture}
                />
              </div>
              {/* <p className="text-center text-gray-500  text-sm mt-5">
                {exp.tech}
              </p> */}
              <div className="flex flex-wrap gap-2 justify-center mt-5">
                {exp.tech.map((tech, index) => (
                  <p key={index} className="text-gray-500 text-sm">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex mx-auto max-w-[600px] flex-row mt-5">
        <a href="https://github.com/virajkc1">
          <span className="text-start text-blue-600 font-md ">
            ... <span className="hover:underline">other projects</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
