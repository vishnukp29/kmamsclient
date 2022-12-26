import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-gray-900 shadow md:flex items-center justify-between md:p-6 dark:bg-gray-800 font-display">
        <span className="text-sm text-lime-300 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" className="hover:underline">
            KMAMS™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-lime-300 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="about-us" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
