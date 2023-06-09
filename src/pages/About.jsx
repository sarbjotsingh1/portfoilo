import Header from "../componets/Header";

const About = () => {
  return (
    <>
      <div className="bg-[#FCFCFCF0]/94 font-Poppins h-screen overflow-hidden">
        <div className="border-8 rounded-3xl border-black mx-5 mt-4 h-[95%] bg-[#D9D6D6]">
          <div className="mt-[13vh]">
            <Header />
            <div className="bg-[#04FC44] h-[45vh]">
              <p className="font-semibold px-4 pt-7 text-3xl">Sarbjot Singh</p>
            </div>
          </div>
          <div className="bg-black text-white tracking-widest indent-24 [word-spacing:100px] py-4 text-4xl ">
            love creation love creation love
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
