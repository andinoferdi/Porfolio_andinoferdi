import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="bg-bg_light_primary py-14">
      {" "}
      {/* Background abu-abu */}
      <div className="md:container px-5">
        <h2 className="title text-gray-900" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle text-gray-600" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-gray-300 rounded-xl text-center bg-white p-6 flex-1 group-hover:blur-sm hover:!blur-none shadow-md hover:shadow-lg"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3 text-gray-900 font-semibold">
                {content.title}
              </h6>
              <p className="leading-7 text-gray-600">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
