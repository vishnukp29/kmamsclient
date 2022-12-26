import React from "react";
import Logo from "../../../Logo/Design.png";
const AboutUs = () => {
  return (
    <>
      <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
        <div className="container px-4 mx-auto font-display">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className=" w-full sm:flex flex-wrap mt-8">
                <h2 className="mb-5 text-8xl text-lime-500 font-bold  mx-5">
                  About
                </h2>
                <h2 className="mb-5 text-8xl text-gray-900 font-bold mx-5">
                  Us
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 bg-gray-100">
              <img src={Logo} alt={Logo} />
            </div>
          </div>
          <div className="bg-slate-100 bg-center rounded">
            <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-slate-700 text-center font-semibold">
              About
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
