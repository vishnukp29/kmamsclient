import React from "react";
import bg from "../../../Logo/b1.png";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const ContactUs = () => {
  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
      <div className="container mx-auto font-display">
        <div className="flex flex-wrap items-center mb-10 w-full justify-center">
          <h2 className=" lg:text-6xl text-3xl text-gray-900 font-bold uppercase">
            Contact us
          </h2>
        </div>
        <img src={bg} alt="KMAMS" className="h-full w-full mt-4 rounded-md" />

        <div className="p-5 mt-4 flex flex-wrap bg-gray-50 bg-center rounded ">
          <div className="w-full lg:w-2/5 p-4">
            <h2 className="text-gray-600 font-semibold text-sm">
              ADDRESS INFO
            </h2>
            <h2 className="text-gray-800 font-semibold text-2xl">
              Have Questions? Get In Touch.
            </h2>
            <div className="flex mt-6">
              <div class="p-4 bg-gray-900 rounded-full">
                <label
                  htmlFor=""
                  className="text-lime-400 text-2xl font-medium "
                >
                  <FaAddressBook />
                </label>
              </div>
              <div class="p-6 py-3 flex justify-start">
                <h5 class="text-gray-800 text-base font-semibold">Address line 1</h5>
              </div>
            </div>

            <div className="flex mt-8">
              <div class="p-4 bg-gray-900 rounded-full">
                <label
                  htmlFor=""
                  className="text-lime-400 text-2xl font-medium "
                >
                  <BsFillTelephoneFill />
                </label>
              </div>
              <div class="p-6 py-3 flex justify-start">
                <h5 class="text-gray-800 text-base font-semibold">+91 0000 000 000</h5>
              </div>
            </div>
            <div className="flex mt-8">
              <div class="p-4 bg-gray-900 rounded-full">
                <label
                  htmlFor=""
                  className="text-lime-400 text-2xl font-medium "
                >
                  <SiGmail />
                </label>
              </div>
              <div class="p-6 py-3 flex justify-start">
                <h5 class="text-gray-800 text-base font-semibold">info.kmams@gmail.com</h5> <br />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-6 bg-white border border-gray-100 rounded-md">
            <h2 className="text-gray-600 font-semibold text-sm">
              GET IN TOUCH
            </h2>
            <h2 className="text-gray-800 font-semibold text-2xl">
              Fill The Form And Send Your Query.
            </h2>

            <div className="mt-6 ">
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      type="text"
                      placeholder=" Enter Your Name"
                    />
                    
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      type="text"
                      placeholder=" Enter Your Email"
                    />
                    
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <textarea
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div>
                  <button className=" p-3 bg-gray-900 text-lime-400 rounded-md transition transform hover:-translate-y-1">
                    Submit Now 
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
