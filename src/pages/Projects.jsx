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
                    title="Project 1"
                    description="Description of project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <ProjectCard
                    title="Project 2"
                    description="Description of project 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <ProjectCard
                    title="Project 3"
                    description="Description of project 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
