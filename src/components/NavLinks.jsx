import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const NavLinks = () => {
  return (
    <div className="flex items-center justify-center bg-black py-6 px-4 sm:px-6 md:px-8 flex-wrap w-screen">
      <ul className="flex flex-col sm:flex-row items-center bg-white p-5 sm:p-6 rounded-xl shadow-md space-y-4 sm:space-y-0 sm:space-x-6 ">
        {/* GitHub */}
        <li>
          <a
            href="https://github.com/NiravMathukiya"
            className="flex items-center relative text-gray-800 text-lg sm:text-base font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-teal-400 before:rounded-xl before:transition-all before:duration-300 hover:before:w-full pb-2  className='text-2xl"
          >
            <FaGithub className="mr-2 text-2xl" /> <h2  className='text-2xl'>GitHub</h2>
          </a>
        </li>

        {/* Instagram */}
        <li className="relative">
          <a
            href="https://www.instagram.com/nirav_mathukiya007?igsh=b2xqd2I3YTQ4dmhp"
            className="flex items-center relative text-gray-800 text-lg sm:text-base font-medium before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:h-[3px] before:w-0 before:bg-teal-400 before:rounded-xl before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-[-50%] pb-2"
          >
            <FaInstagram className="mr-2 text-2xl" /> <h2  className='text-2xl'>Instagram</h2>
          </a>
        </li>

        {/* LinkedIn */}
        <li className="relative">
          <a
            href="https://www.linkedin.com/in/nirav-mathukiya007"
            className="flex items-center relative text-gray-800 text-lg sm:text-base font-medium before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:h-[3px] before:w-full before:bg-teal-400 before:rounded-xl before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:bottom-0 pb-2"
          >
            <FaLinkedin className="mr-2 text-2xl" /> <h2  className='text-2xl'>LinkedIn</h2>
          </a>
        </li>

        {/* WhatsApp */}
        <li className="relative">
          <a
            href="https://wa.me/6354813652"
            className="flex items-center relative text-gray-800 text-lg sm:text-base font-medium before:content-[''] before:absolute before:bottom-0 before:right-0 before:h-[3px] before:w-full before:bg-teal-400 before:rounded-xl before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left pb-2"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> <h2  className='text-2xl'>WhatsApp</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
