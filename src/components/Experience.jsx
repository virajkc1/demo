import unisun from "../images/Unisun_Logo.png";
import pmgroup from "../images/PM_Group_Logo.jpg";
import uob from "../images/uob_startup.png";

const Experience = () => {
  const experiences = [
    {
      dates: "June 2025 - Present",
      title: "Software Engineer / Founder",
      company: "Unisun",
      description:
        "Building a community platform for university students on the same course to connect, communicate and collaborate.",
      image: unisun,
    },
    {
      dates: "June 2025 - Sept 2025",
      title: "Co Founder",
      company: "UOB Startup Society",
      description:
        "Forming a community of ambitious students to help each other succeed in their startups.",
      image: uob,
    },
    {
      dates: "May 2025 - Aug 2025",
      title: "Data Analytics Intern",
      company: "PM Group",
      description:
        "Analyzing data to help the company make data-driven decisions.",
      image: pmgroup,
    },
    {
      dates: "Sept 2024 - June 2025",
      title: "Engineering Intern",
      company: "PM Group",
      description:
        "Collaborated on pro-bono projects for community organizations, focusing on clean code and user experience.",
      image: pmgroup,
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col max-w-[700px] mx-auto  mb-10 border-b-2 rounded-lg "
        >
          <div className="flex flex-row justify-between pt-5 mb-0">
            <div className="flex-row flex ml-4  ">
              <img
                className="w-[60px] h-[60px] object-cover rounded-full"
                src={exp.image}
              />
              <h4 className="mt-2 ml-2 text-lg  text-gray-900 font">
                {exp.company}
              </h4>
            </div>
            <h3 className="mr-5 text-gray-900 ">{exp.dates}</h3>
          </div>
          <div className="text-end -mt-5">
            <h3 className="mr-5 mb-8 text-gray-700 ">{exp.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
