import React from "react";
import Logo from "../../../Logo/Design.png";

const ContactUs = () => {
  return (
    <>
      <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
        <div className="container px-4 mx-auto font-display">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className=" w-full sm:flex  mt-8">
                <h2 className="mb-5 lg:text-8xl text-5xl text-lime-500 font-bold">
                  Contact<span className="mb-5 lg:text-8xl text-5xl text-gray-900 font-bold">Us</span>
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 bg-gray-100">
              <img src={Logo} alt={Logo} />
            </div>
          </div>
            <div className="bg-lime-500 bg-center p-4 w-2/3">
                <p className=" text-sm text-gray-900 text-center font-semibold p-2">
                Contact : +91 9876543210
                </p>
                <p className="text-sm text-gray-900 text-center font-semibold p-2">
                Email: kmams@gmail.com
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
