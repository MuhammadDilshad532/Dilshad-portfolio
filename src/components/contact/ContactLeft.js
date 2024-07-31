import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammad Dilshad</h3>
        <p className="text-lg font-normal text-gray-400">
          React.js/Next.js Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a React.js developer skilled in HTML, CSS, Tailwind CSS,
          Bootstrap, JavaScript, and React.js, focusing on user-friendly
          interfaces and responsive web apps.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3266125280</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mdtechnical47@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100080294441134">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/MuhammadDilshad532">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/muhammaddilshad542/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.instagram.com/muhammaddilshad7672/">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
