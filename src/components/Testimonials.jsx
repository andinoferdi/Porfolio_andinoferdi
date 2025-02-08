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
  const [idleTestimonial, setIdleTestimonial] = useState(false);
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
      setIdleTestimonial(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="testimonials" className="bg-[#16162b] py-14 relative">
      {idleTestimonial && <Particles id={"particles-Testimonials"} />}
      <div className="md:container px-5">
        <div className="text-center">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 text-white">
            Testimonials
          </h1>
          <h6 className="text-center text-sm md:text-base text-white mb-6">
            HERE'S WHAT PEOPLE ARE SAYING ABOUT MY WEBSITE
          </h6>
        </div>
        <br />

        {testimonials.length === 0 ? (
          <div className="text-center text-white text-lg">
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
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Testimonials;
