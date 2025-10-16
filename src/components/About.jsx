import location from "../images/location.png";
import { FaMapMarker } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="section pt-1">
      <h2>About Me</h2>
      <div className="about-content max-w-2xl mx-auto">
        <p className="text-[17px] text-gray-700  text-left font-abold">Me:</p>
        <p className=" text-gray-600 leading-8">
          Hello! My name is Viraj, Welcome to the 2nd iteration of my portfolio.
          I am a junior<span> </span>
          <a href="https://github.com/virajkc1">
            <span className="text-blue-600 font-medium mb-6 hover:underline">
              software engineer
            </span>
          </a>
          <span> </span>and I enjoy creating web applications that add value for
          real users. Here I will showcase a few projects that I am proud of.
        </p>

        <p className="text-md text-gray-600 leading-8">
          The most recent project that i am working on is{" "}
          <a href="https://theunisun.com">
            <span className="text-blue-600 font-medium mb-6 hover:underline ">
              Unisun
            </span>
          </a>
          , a community platform for university students.
        </p>

        <p className="text-md text-gray-600 leading-relaxed">
          I have also started my own interactive <span> </span>
          <a
            href="https://virajchapaneri.substack.com/p/virajs-blog"
            className="inline-block mx-1"
          >
            <span className="text-blue-700 font-medium  hover:underline transition-all duration-200">
              blog
            </span>
          </a>
          , journaling all new concepts I learn daily. Feel free to check it
          out!
        </p>
      </div>
      <div className="mt-[100px] max-w-2xl mx-auto">
        <p className="text-[17px] text-gray-700  text-left">Where:</p>
        <img
          className=" rounded-lg mt-8 h-[15vw] shadow-md object-cover w-[30vw] mx-auto hover:shadow-lg"
          src={location}
        ></img>
        <div className="flex items-center justify-end mt-5">
          <FaMapMarker className="w-4 h-4 " />
          <p className="text-gray-600 ml-2">Leicester, UK</p>
        </div>
      </div>
    </section>
  );
};

export default About;
