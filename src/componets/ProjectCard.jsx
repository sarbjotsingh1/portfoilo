const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FCF204] hover:text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
