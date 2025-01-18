import { content } from "../Content";
import Particles from "./Particles";
import Divider from "./Divider";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="bg-[#16162b] py-14 relative">
      <Particles id={"particles-service"} />
      {/* Background abu-abu */}
      <div className="md:container px-5">
        <h1
          className="text-center text-2xl md:text-3xl font-bold mb-4 text-white"
          data-aos="fade-down"
        >
          {services.title}
        </h1>
        <h6
          className="text-center text-sm md:text-base text-white mb-6"
          data-aos="fade-down"
        >
          {services.subtitle}
        </h6>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="relative border-2 border-white rounded-xl text-center p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-red-500 opacity-0 hover:opacity-100 hover:shadow-[0_0_20px_#FF0000] transition-all duration-300"
                aria-hidden="true"
              ></div>
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3 text-white font-semibold">{content.title}</h6>
              <p className="leading-7 text-white">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
