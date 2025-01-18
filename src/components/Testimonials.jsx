import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "./Particles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="testimonials" className="bg-[#16162b] relative">
      <Particles id={"particles-testimonials"} />
      <div className="md:container px-5 pt-14">
        <div className="text-center">
          {/* Align title and subtitle to the center */}
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
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 mx-8 border-2 
          p-8 h-full rounded-2xl flex items-center gap-6
          border-slate-200 md:flex-row flex-col 
          ${
            activeIndex === i
              ? "bg-white scale-100"
              : "bg-bg_light_primary scale-90"
          }`}
              >
                <img
                  src={content.img}
                  alt="..."
                  className="h-24 rounded-full"
                />
                <div>
                  <p
                    className={`sm:text-base text-sm ${
                      activeIndex === i ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {content.review}
                  </p>
                  <br />
                  <h6
                    className={`${
                      activeIndex === i ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {content.name}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
