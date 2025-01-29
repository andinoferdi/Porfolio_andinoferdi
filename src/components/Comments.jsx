import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { content } from "../Content";
import { FaCommentDots } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const Comments = () => {
  const { Comments } = content;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Tambah komentar ke Firestore dengan timestamp
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Name and Message cannot be empty!",
      });
      return;
    }

    await addDoc(collection(db, "comments"), {
      name,
      message,
      timestamp: serverTimestamp(),
    });

    // Notifikasi sukses menggunakan SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your comment has been submitted.",
      showConfirmButton: false,
      timer: 2000, // Popup akan hilang dalam 2 detik
    });

    setName("");
    setMessage("");
  };

  return (
    <section className="bg-[#ffff] py-14 relative">
      <div className="md:container px-4 md:px-6 lg:px-8 text-center">
        <h1
          className="text-2xl md:text-3xl font-bold mb-4 text-black"
          data-aos="fade-down"
        >
          {Comments.title}
        </h1>
        <h6
          className="text-sm md:text-base text-black mb-6"
          data-aos="fade-down"
        >
          {Comments.subtitle}
        </h6>
        <br />

        {/* Form Container */}
        <div
          className="w-full max-w-lg md:max-w-2xl bg-[#ffffff] text-white rounded-xl p-6 shadow-lg mx-auto border-2 border-purple-300"
          data-aos="fade-down"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-purple-300 pb-3 mb-4">
            <FaCommentDots className="text-2xl text-purple-400" />
            <h1 className="text-lg md:text-xl font-bold text-black">
              {Comments.title}
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div data-aos="fade-down">
              <label className="block text-sm font-semibold mb-1 text-black">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#ffffff] border-2 border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 ease-in-out text-black placeholder-gray-500"
              />
            </div>

            {/* Message Input */}
            <div data-aos="fade-down">
              <label className="block text-sm font-semibold mb-1 text-black">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#ffffff] border-2 border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 ease-in-out text-black placeholder-gray-500 resize-none h-24"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold rounded-md transition duration-300"
              data-aos="fade-up"
            >
              {Comments.btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Comments;
