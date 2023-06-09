/* eslint-disable react/no-unescaped-entities */
import reactImg from "../assets/reactimg.png";
import jsImg from "../assets/js.png";
import tailwindImg from "../assets/tailwind.png";
import tsImg from "../assets/typescript.png";
import mongoImg from "../assets/mongo.png";
import gcpImg from "../assets/gcp.png";
import html5 from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/git.png";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex">
      <div className="bg-[#04FC44] h-[45vh] basis-1/2 border-r-4 border-black">
        <p className="px-3 pt-20 font-semibold text-6xl ">Hi I'm Sarbjot</p>
        <p className="px-3 pt-3 text-xl ">I am a Software Engineer</p>
        <Link to="/about">
          <button className="bg-black text-white mx-3 mt-3 px-4 py-3 rounded-lg mb-24">
            Learn More
          </button>
        </Link>
      </div>
      <div className="bg-[#FCF204] basis-1/2">
        <div className="flex flex-col items-center justify-center pt-8 space-y-4">
          <div className="flex justify-center">
            <img
              src={html5}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="HTML5"
            />
            <img
              src={css}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="CSS"
            />
            <img
              src={jsImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="JavaScript"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={reactImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="React"
            />
            <img
              src={tsImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="TypeScript"
            />
            <img
              src={mongoImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="MongoDB"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={tailwindImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="Tailwind CSS"
            />
            <img
              src={git}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="Git"
            />

            <img
              src={gcpImg}
              className="w-10 h-10 mx-2 border-4 border-white rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              alt="Google Cloud Platform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
