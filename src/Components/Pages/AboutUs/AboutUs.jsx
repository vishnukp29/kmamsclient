import React from "react";
import bg from "../../../Logo/b2.png";
import User from "../../../Logo/user.jpg";
const AboutUs = () => {
  return (
      <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
        <div className="container mx-auto font-display">

          <div className="flex flex-wrap items-center mb-10 w-full justify-center">
            <h2 className=" lg:text-6xl text-3xl text-lime-500 font-bold uppercase">
              About us
            </h2>
          </div>
          <img src={bg} alt="KMAMS"  className="h-full w-full mt-4 rounded-md"/>

          <div className="p-5 mt-4 flex flex-wrap bg-gray-50 bg-center rounded ">
            <div className="w-full lg:w-2/5 p-4">
              <h2 className="text-gray-800 font-semibold text-xl">What is KMAMS?</h2>
              <p className=" text-md text-slate-700  font-semibold text-justify leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full lg:w-3/5 p-4 ">
              <h2 className="text-gray-800 font-semibold text-xl">History</h2>
              <p className=" text-md text-slate-700  font-semibold text-justify leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="p-5 mt-4 flex flex-wrap bg-gray-50 bg-center rounded ">
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-gray-800 font-semibold text-xl">Mission</h2>
              <p className=" text-md text-slate-700  font-semibold text-justify leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-4 ">
              <h2 className="text-gray-800 font-semibold text-xl">Vision</h2>
              <p className=" text-md text-slate-700  font-semibold text-justify leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className=" mb-10 w-full">
            <div className="mt-6 flex flex-wrap items-center mb-10 w-full justify-center">
              <h2 className="text-2xl text-gray-800 font-bold uppercase">our team</h2>
            </div>
            <div className="flex flex-wrap justify-around">
              <div className="p-3">
                <img src={User} alt="KMAMS"  className="h-64 w-64 rounded-md"/>
                <h1>Name</h1>
                <h1>Position</h1>
              </div>
              
              <div className="p-3">
                <img src={User} alt="KMAMS"  className="h-64 w-64 rounded-md"/>
                <h1>Name</h1>
                <h1>Position</h1>
              </div>
              
              <div className="p-3">
                <img src={User} alt="KMAMS"  className="h-64 w-64 rounded-md"/>
                <h1>Name</h1>
                <h1>Position</h1>
              </div>
              
              <div className="p-3">
                <img src={User} alt="KMAMS"  className="h-64 w-64 rounded-md"/>
                <h1>Name</h1>
                <h1>Position</h1>
              </div>
              
            </div>
          </div>

        </div>
      </section>
  );
};

export default AboutUs;
