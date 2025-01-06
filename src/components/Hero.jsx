import { useEffect } from "react";
import { content } from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Import ikon download

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-[50vh] relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        ></div>

        {/* Kolom Pertama */}
        <div className="pb-16 px-6 pt-5 md:mt-[-50px]" data-aos="fade-down">
          <h1 className="font-Poppins text-6xl font-bold">{hero.firstName}</h1>
          <h1 className="font-Poppins text-6xl font-bold">{hero.LastName}</h1>
          <br />
          <div className="flex justify-end">
            <a
              href="/CV Andino Ferdiansah.docx" // File harus ada di folder public
              download="CV_Andino_Ferdiansah.docx"
              className="btn flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} className="text-lg" />
              Download CV
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${
                  i === 1 && "flex-row-reverse text-right"
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kedua */}
        <div className="md:h-[30rem] h-80 flex items-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
