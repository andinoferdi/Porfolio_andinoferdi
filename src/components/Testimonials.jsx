import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "./Particles";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      review: "This website is amazing! Super helpful and easy to navigate.",
      timestamp: "January 10, 2025 at 14:30",
    },
    {
      id: 2,
      name: "Michael Smith",
      review: "I love the design! Very user-friendly and visually appealing.",
      timestamp: "January 15, 2025 at 09:45",
    },
    {
      id: 3,
      name: "Sophia Lee",
      review: "Great experience! Everything works smoothly and fast.",
      timestamp: "January 18, 2025 at 16:10",
    },
    {
      id: 4,
      name: "Daniel Brown",
      review: "Incredible service! Would highly recommend to others.",
      timestamp: "January 22, 2025 at 20:00",
    },
    {
      id: 5,
      name: "Emma Wilson",
      review: "Top-notch support! The team was very responsive and helpful.",
      timestamp: "January 25, 2025 at 11:20",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#16162b] py-14 relative">
      <Particles id={"particles-Testimonials"} />
      <div className="md:container px-5" data-aos="fade-down">
        <div className="text-center" data-aos="fade-down">
          <h1
            className="text-center text-2xl md:text-3xl font-bold mb-4 text-white"
            data-aos="fade-down"
          >
            Testimonials
          </h1>
          <h6
            className="text-center text-sm md:text-base text-white mb-6"
            data-aos="fade-down"
          >
            HERE'S WHAT PEOPLE ARE SAYING ABOUT MY WEBSITE
          </h6>
        </div>
        <br />

        {testimonials.length === 1 ? (
          <div
            className="mx-auto max-w-lg p-8 border-2 rounded-2xl text-center bg-white"
            data-aos="fade-down"
          >
            <h6 className="text-black font-bold">{testimonials[0].name}</h6>
            <p className="text-black">{testimonials[0].review}</p>
            <p className="text-gray-500 text-sm mt-2">
              {testimonials[0].timestamp}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-down">
            {testimonials.map((content, index) => (
              <div
                key={content.id}
                className={`border-2 p-6 rounded-2xl bg-white text-center ${
                  testimonials.length % 2 !== 0 &&
                  index === testimonials.length - 1
                    ? "md:col-span-2 mx-auto w-1/2"
                    : ""
                }`}
                data-aos="fade-down"
              >
                <h6 className="text-black font-bold">{content.name}</h6>
                <p className="text-black">{content.review}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {content.timestamp}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
