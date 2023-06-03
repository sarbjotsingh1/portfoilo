import Header from "../componets/Header";
import Hero from "../componets/Hero";

function Home() {
  return (
    <>
      <div className="bg-[#FCFCFCF0]/94 font-Poppins ">
        <div className="border-8 rounded-3xl  border-black mx-5 my-5 bg-[#D9D6D6]">
          <p className="pt-14  pb-4 text-right pr-7 tracking-wide  text-lg text-[#010101] font-popins">
            Subscibe to my developer newletter made for you.
          </p>
          <Header></Header>
          <Hero></Hero>
          <div className="bg-black text-white tracking-widest indent-24 [word-spacing:100px] py-6 text-4xl ">
            love creation love creation love
          </div>
          <div className="border-black border-4 ">
            <input
              type="email"
              placeholder="email@gmail.com"
              className="ml-14 my-10"
            />
            <input type="button" className="border-red-400 border-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
