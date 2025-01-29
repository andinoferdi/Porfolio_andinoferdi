import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "./Particles";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="bg-[#16162b] py-14 relative">
      <Particles id={"particles-testimonials"} />
      <div className="md:container px-5">
        <div className="text-center">
          <h1
            className="text-center text-2xl md:text-3xl font-bold mb-4 text-white"
            data-aos="fade-down"
          >
            {Testimonials.title}
          </h1>
          <h6
            className="text-center text-sm md:text-base text-white mb-6"
            data-aos="fade-down"
          >
            {Testimonials.subtitle}
          </h6>
        </div>
        <br />

        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 mx-8 border-2 p-8 h-full rounded-2xl flex flex-col items-center gap-6 border-slate-200 ${
                  activeIndex === i
                    ? "bg-white scale-100"
                    : "bg-bg_light_primary scale-90"
                }`}
              >
                <h6
                  className={`text-center font-bold ${
                    activeIndex === i ? "text-black" : "text-gray-400"
                  }`}
                >
                  {content.name}
                </h6>
                <p
                  className={`sm:text-base text-sm text-center ${
                    activeIndex === i ? "text-black" : "text-gray-400"
                  }`}
                >
                  {content.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
