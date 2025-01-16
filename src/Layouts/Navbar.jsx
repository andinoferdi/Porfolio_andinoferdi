import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // Fungsi untuk mendeteksi elemen yang sedang di viewport
  const handleScroll = () => {
    nav.forEach((item, i) => {
      const section = document.querySelector(item.link); // Misalnya #home, #about, dll.
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -50 && rect.top <= window.innerHeight / 2) {
          setActive(i);
        }
      }
    });
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* Tombol Toggle Menu */}
      <div
        className="sm:cursor-pointer fixed top-5 left-5 z-[999] rounded-lg bg-white/40 p-2 transition-all duration-300 transform hover:scale-110"
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* Ikon dengan transisi halus */}
        <div className="transition-all duration-300">
          {showMenu ? <HiX size={25} /> : <HiMenuAlt2 size={25} />}
        </div>
      </div>

      {/* Navigasi */}
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            key={i} // Pastikan untuk memberikan `key` agar tidak ada error React
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer transition-all duration-300 ${
              i === active && "bg-dark_primary text-white"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
