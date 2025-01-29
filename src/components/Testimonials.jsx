import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "./Particles";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
      const fetchedTestimonials = snapshot.docs.map((doc) => {
        const data = doc.data();
        if (data.timestamp && data.timestamp.seconds) {
          const dateObj = new Date(data.timestamp.seconds * 1000);

          // Format date as "January 30, 2025"
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          // Format time as "13:08" (24-hour format)
          const formattedTime = dateObj.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          });

          return {
            id: doc.id,
            name: data.name,
            review: data.message,
            timestamp: `${formattedDate} at ${formattedTime}`,
          };
        } else {
          return {
            id: doc.id,
            name: data.name,
            review: data.message,
            timestamp: "Unknown time",
          };
        }
      });

      setTestimonials(fetchedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="testimonials" className="bg-[#16162b] py-14 relative">
      <Particles id={"particles-testimonials"} />
      <div className="md:container px-5">
        <div className="text-center">
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
            MY CLIENT REVIEWS
          </h6>
        </div>
        <br />

        {testimonials.length === 0 ? (
          <div className="text-center text-white text-lg" data-aos="fade-down">
            No comments yet, leave a comment below.
          </div>
        ) : testimonials.length === 1 ? (
          <div className="mx-auto max-w-lg p-8 border-2 rounded-2xl text-center bg-white">
            <h6 className="text-black font-bold">{testimonials[0].name}</h6>
            <p className="text-black">{testimonials[0].review}</p>
            <p className="text-gray-500 text-sm mt-2">
              {testimonials[0].timestamp}
            </p>
          </div>
        ) : testimonials.length > 3 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((content, index) => (
              <div
                key={content.id}
                className={`border-2 p-6 rounded-2xl bg-white text-center ${
                  testimonials.length % 2 !== 0 &&
                  index === testimonials.length - 1
                    ? "md:col-span-2 mx-auto w-1/2"
                    : ""
                }`}
              >
                <h6 className="text-black font-bold">{content.name}</h6>
                <p className="text-black">{content.review}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {content.timestamp}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            data-aos="fade-up"
            loop={testimonials.length > 1}
            spaceBetween={40}
            slidesPerView={1.7}
            onSlideChange={(e) => {
              setActiveIndex(e.realIndex);
            }}
            modules={[Pagination]}
            className="md:h-96 h-[40rem] max-w-3xl"
          >
            {testimonials.map((content, i) => (
              <SwiperSlide key={content.id}>
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
                  <p className="text-gray-500 text-sm mt-2">
                    {content.timestamp}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
