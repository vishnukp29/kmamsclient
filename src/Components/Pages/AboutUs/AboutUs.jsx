import React from "react";
import Logo from "../../../Logo/logoblack.png";
const AboutUs = () => {
  return (
    <>
      <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
        <div className="container px-4 mx-auto font-display">
          <div className="flex flex-wrap items-center -mx-4 mb-10 ">
            <div className="w-full lg:w-1/2 px-4  lg:mb-0">
              <div className=" w-full sm:flex flex-wrap mt-8">
                <h2 className=" lg:text-8xl text-5xl text-lime-500 font-bold lg:mx-60">
                  About
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img src={Logo} alt={Logo} />
            </div>
          </div>
          <div className="bg-slate-100 bg-center rounded p-5">
            <p className=" text-md text-slate-700  font-semibold text-justify leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
             a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
             Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including 
             versions of Lorem Ipsum.
            </p>
            <p className="text-md text-slate-700  font-semibold text-justify mt-2 leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
             a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
             Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including 
             versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
