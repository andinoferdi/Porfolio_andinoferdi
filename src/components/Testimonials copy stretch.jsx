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

          const formattedDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

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
            timestampValue: data.timestamp.seconds, // Menyimpan nilai asli untuk sorting
          };
        } else {
          return {
            id: doc.id,
            name: data.name,
            review: data.message,
            timestamp: "Unknown time",
            timestampValue: 0, // Default untuk data tanpa timestamp
          };
        }
      });

      // Urutkan berdasarkan timestampValue secara descending (terbaru ke atas)
      fetchedTestimonials.sort((a, b) => b.timestampValue - a.timestampValue);

      setTestimonials(fetchedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="testimonials" className="bg-[#16162b] py-14 relative">
      <Particles id={"particles-testimonials"} />
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

        {testimonials.length === 0 ? (
          <div className="text-center text-white text-lg" data-aos="fade-down">
            No comments yet, leave a comment below.
          </div>
        ) : testimonials.length === 1 ? (
          <div
            className="mx-auto max-w-lg p-8 border-2 rounded-2xl text-center bg-white"
            data-aos="fade-down"
          >
            <h6 className="text-black font-bold" data-aos="fade-down">
              {testimonials[0].name}
            </h6>
            <p className="text-black" data-aos="fade-down">
              {testimonials[0].review}
            </p>
            <p className="text-gray-500 text-sm mt-2" data-aos="fade-down">
              {testimonials[0].timestamp}
            </p>
          </div>
        ) : testimonials.length > 3 ? (
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
                <h6 className="text-black font-bold" data-aos="fade-down">
                  {content.name}
                </h6>
                <p className="text-black" data-aos="fade-down">
                  {content.review}
                </p>
                <p className="text-gray-500 text-sm mt-2" data-aos="fade-down">
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
            data-aos="fade-down"
            loop={testimonials.length > 1}
            spaceBetween={40}
            slidesPerView={2}
            onSlideChange={(e) => {
              setActiveIndex(e.realIndex);
            }}
            modules={[Pagination]}
            className="h-[25rem] md:h-96 max-w-3xl"
          >
            {testimonials.map((content, i) => (
              <SwiperSlide key={content.id} data-aos="fade-down">
                <div
                  className={`duration-500 mx-8 border-2 p-8 h-full rounded-2xl flex flex-col items-center gap-6 border-slate-200 ${
                    activeIndex === i
                      ? "bg-white scale-100"
                      : "bg-bg_light_primary scale-90"
                  }`}
                  data-aos="fade-down"
                >
                  <h6
                    className={`text-center font-bold ${
                      activeIndex === i ? "text-black" : "text-gray-400"
                    }`}
                    data-aos="fade-down"
                  >
                    {content.name}
                  </h6>
                  <p
                    className={`sm:text-base text-sm text-center ${
                      activeIndex === i ? "text-black" : "text-gray-400"
                    }`}
                    data-aos="fade-down"
                  >
                    {content.review}
                  </p>
                  <p
                    className="text-gray-500 text-sm mt-2"
                    data-aos="fade-down"
                  >
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
