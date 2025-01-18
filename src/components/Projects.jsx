import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Particles from "./Particles";

const Projects = () => {
  const { Projects } = content;
  return (
    <section id="projects" className="bg-[#ffff] relative">
      {/* Tambahkan Particles */}
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between relative z-10">
        <div className="text-center">
          {/* Align title and subtitle to the center */}
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
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
