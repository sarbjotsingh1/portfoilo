/* eslint-disable react/no-unescaped-entities */
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
import reactImg from "../assets/reactimg.png";
import jsImg from "../assets/js.png";
import tailwindImg from "../assets/tailwind.png";
import tsImg from "../assets/typescript.png";
import mongoImg from "../assets/mongo.png";
import gcpImg from "../assets/gcp.png";

const Hero = () => {
  return (
    <div className="flex">
      <div className="bg-[#04FC44] basis-1/2 border-r-4 border-black">
        <p className="px-3 pt-20 font-semibold text-6xl ">Hi I'm Sarbjot</p>
        <p className="px-3 pt-3 text-xl ">I am Software Engineer</p>
        <button className="bg-black text-white mx-3 mt-3 px-4 py-3 rounded-lg mb-24 ">
          Learn More
        </button>
      </div>
      <div className="bg-[#FCF204] basis-1/2">
        {/* <img
          src={img1}
          alt="img1"
          className=" absolute object-contain h-72 w-72 pt-10 pl-10 z-0"
        />
        <img
          src={img2}
          alt="img2"
          className="  absolute object-contain pl-40 pt h-72 w-72 z-10"
        /> */}
        <div className="flex object-scale-down w-20 h-20  gap-4 pt-8 pl-3 border-white border-4 px-4">
          <img src={reactImg} className=" "></img>
          <img src={tsImg}></img>
          <img src={mongoImg}></img>
          <img src={tailwindImg}></img>
          <img src={jsImg}></img>
          <img src={gcpImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
