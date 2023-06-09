import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Hero from "../componets/Hero";

function Home() {
  return (
    <>
      <div className="bg-[#FCFCFCF0]/94 font-Poppins min-h-screen overflow-hidden">
        <div className="border-8 rounded-3xl border-black mx-5 mt-4 h-[95%] bg-[#d9d6d6]">
          <p className="pt-14 pb-4 text-right pr-7 tracking-wide text-lg text-[#010101] font-popins">
            Subscribe to my developer newsletter made for you.
          </p>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1">
              <Hero />
              <div className="bg-black text-white tracking-widest indent-24 [word-spacing:100px] py-4 text-4xl ">
                love creation love creation love
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
