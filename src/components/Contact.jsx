import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Particles from "./Particles";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [loading, setLoading] = useState(false); // State untuk animasi loading

  // Function untuk mengirim email dengan animasi loading
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Aktifkan loading sebelum mengirim

    emailjs
      .sendForm(
        "service_1798ijv", // Ganti dengan SERVICE_ID Anda
        "template_w52tpmi", // Ganti dengan TEMPLATE_ID Anda
        form.current,
        "EqDSFGWTm_aV6_QDj" // Ganti dengan PUBLIC_KEY Anda
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          form.current.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send email. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // Matikan loading setelah selesai
      });
  };

  return (
    <section id="contact" className="bg-[#16162b] text-white py-14 relative">
      <Particles id={"particles-Contact"} />
      <Toaster />
      <div className="md:container px-5">
        <h1
          className="text-center text-2xl md:text-3xl font-bold mb-4 text-white"
          data-aos="fade-down"
        >
          {Contact.title}
        </h1>
        <h6
          className="text-center text-sm md:text-base text-white mb-6"
          data-aos="fade-down"
        >
          {Contact.subtitle}
        </h6>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input sesuai dengan variabel EmailJS */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-slate-600 p-3 rounded"
              autoComplete="off"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Your Email"
              required
              className="border border-slate-600 p-3 rounded"
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border border-slate-600 p-3 rounded h-44"
              autoComplete="off"
              required
            ></textarea>
            <button
              className="btn self-start bg-white text-dark_primary flex items-center gap-2"
              type="submit"
              disabled={loading} // Disable tombol saat loading
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
