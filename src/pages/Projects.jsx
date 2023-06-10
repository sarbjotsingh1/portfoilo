import ProjectCard from "../componets/ProjectCard";
import Header from "../componets/Header";

const Projects = () => {
  return (
    <div>
      <div className="bg-[#FCFCFCF0]/94 font-Poppins h-screen overflow-hidden">
        <div className="border-8 rounded-3xl border-black mx-5 mt-4 h-[95%] bg-[#D9D6D6]">
          <div className="mt-[13vh]">
            <Header />
            <div className="relative">
              <div className="absolute inset-0 bg-[#04FC44] rounded-3xl" />
              <div className="bg-[#04FC44] h-[67vh] flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <ProjectCard
                    title="E - Commerce"
                    description="Full Stack MERN Website with good user interface and experince where user can view, buy compare products. "
                  />
                  <ProjectCard
                    title="Open-Funds"
                    description="Crypto Crowdfunding platform deployed on near blockchain where users can show case there projects and get funding in cryto."
                  />
                  <ProjectCard
                    title="Open-Funds"
                    description="Crypto Crowdfunding platform deployed on near blockchain where users can show case there projects and get funding in cryto."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
