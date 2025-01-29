import { content } from "../Content";
import Particles from "./Particles";

const Projects = () => {
  const { Projects } = content;
  return (
    <section id="projects" className="bg-[#ffff] py-14 relative">
      <div className="md:container px-5 flex flex-col items-center relative z-10">
        <div className="text-center">
          <h1
            className="text-center text-2xl md:text-3xl font-bold mb-4 text-black"
            data-aos="fade-down"
          >
            {Projects.title}
          </h1>
          <h6
            className="text-center text-sm md:text-base text-black mb-6"
            data-aos="fade-down"
          >
            {Projects.subtitle}
          </h6>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-left"
        >
          {Projects.project_content.map((content, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] shadow-lg"
            >
              <img
                src={content.image}
                alt="Project"
                className="w-full rounded-lg"
              />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <button className="font-bold text-gray self-end">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
