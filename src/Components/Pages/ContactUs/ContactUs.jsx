import React from "react";
import Logo from "../../../Logo/logoblack.png";

const ContactUs = () => {
  return (
    <>
      <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
        <div className="container px-4 mx-auto font-display">
        <div className="flex flex-wrap items-center -mx-4 mb-10 ">
            <div className="w-full lg:w-1/2 px-4  lg:mb-0">
              <div className=" w-full sm:flex flex-wrap mt-8">
                <h2 className=" lg:text-8xl text-5xl text-lime-500 font-bold lg:mx-60">
                  Contact
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img src={Logo} alt={Logo} />
            </div>
          </div>
          <div className="bg-gradient-to-r from-lime-300 to-lime-400 bg-center p-4 rounded mx-auto flex flex-wrap">
            <div className="w-full lg:w-2/2 px-4">
              <p className=" text-sm text-gray-900 text-start font-semibold p-2">
                Contact : +91 9876543210
              </p>
              <p className="text-sm text-gray-900 text-start font-semibold p-2">
                Email: info@kmams.com
              </p>
              <p className="text-sm text-gray-900 text-start font-semibold p-2">
                # 10/25/138,S.V.Towers,20th main Road,5th Block,WOC Road,Bangalore
                560 010
              </p>
              <p className="text-sm text-gray-900 text-start font-semibold p-2">
                Email: info@kmams.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
