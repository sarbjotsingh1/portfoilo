/* eslint-disable react/no-unescaped-entities */
import reactImg from "../assets/reactimg.png";
import jsImg from "../assets/js.png";
import tailwindImg from "../assets/tailwind.png";
import tsImg from "../assets/typescript.png";
import mongoImg from "../assets/mongo.png";
import gcpImg from "../assets/gcp.png";
import html5 from "../assets/html.png";
import css from "../assets/css.png";
import node from "../assets/node.png";

import { Link } from "react-router-dom";

const skills = [
  { src: html5, alt: "HTML5" },
  { src: css, alt: "CSS" },
  { src: jsImg, alt: "JavaScript" },
  { src: reactImg, alt: "React" },
  { src: tsImg, alt: "TypeScript" },
  { src: mongoImg, alt: "MongoDB" },
  { src: tailwindImg, alt: "Tailwind CSS" },
  { src: node, alt: "Git" },
  { src: gcpImg, alt: "Google Cloud Platform" },
];

const Hero = () => {
  return (
    <div className="flex">
      <div className="bg-[#04FC44] h-[45vh] basis-1/2 border-r-4 border-black flex flex-col justify-center pl-8">
        <p className="font-semibold text-6xl mb-2">Hi I'm Sarbjot</p>
        <p className="text-xl mb-8">I am a Software Engineer</p>
        <Link to="/about">
          <button className="bg-black text-white mx-3 mt-3 px-4 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            About Me
          </button>
        </Link>
      </div>
      <div className="bg-[#FCF204] basis-1/2 flex justify-center items-center pt-6 pl-6">
        <div className="grid grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="w-14 h-14 border-4 border-white rounded-md transition duration-300 ease-in-out transform hover:scale-125"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
