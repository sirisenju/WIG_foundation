import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DisplayProject() {
  const location = useLocation();
  const { post } = location.state;

  const percentage = parseInt(post.milestone);
  return (
    <>
      <Navbar
        variant="primary"
        intro="Our Projects"
        heading="Empowering Communities Through Sustainable Initiatives"
        paragraph="At the heart of our project lies a deep commitment to empowering communities through sustainable initiatives."
      />
      <section className="h-full w-full">
        {/* project content */}
        <div className="w-full md:w-[80%] h-full mx-auto p-2 sm:p-0 2xl:max-w-7xl">
          <div className="w-full flex flex-wrap">
            <div className="bg-[#EDF7F5] w-full xl:w-[70%] mb-2 xl:mb-0">
              <div className="overflow-hidden w-full mx-auto p-2">
                <img
                  className="w-full h-[380px] object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <h3 className="text-md font-medium mb-2">{post.sub_header}</h3>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex gap-2">
                  <p className="text-black self-center text-xl">
                    Milestone completed:
                  </p>
                  <div className="w-[50px] h-[50px]">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.0,
                        textSize: "25px", // Colors
                        pathColor: `rgba(33, 157, 128, ${percentage / 10})`,
                        textColor: "#22262F",
                        trailColor: "",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                </div>

                <button
                  onClick={() => window.history.back()}
                  className="mt-2 px-4 py-2 bg-primary_theme text-white rounded-md hover:bg-[#219D80]/[.90] focus:outline-none"
                >
                  Go Back
                </button>
              </div>
            </div>

            {/* aside section */}
            <div className="px-0 xl:px-2 flex-grow basis-[260px]">
              {/* recent posts div */}
              <div className="w-full h-fit pt-8 pb-8 p-2 bg-[#EDF7F5]">
                <h2 className="text-xl font-semibold tracking-wide font-mono pb-2">
                  Recent Posts
                </h2>
                {/* divs for recent jobs */}
                <div className="w-full flex gap-2 mb-2 bg-white">
                  <img
                    className="w-[160px] h-[160px] object-cover"
                    src="./assets/styleFood.jpg"
                    alt=""
                  />
                  <div className="">
                    <p className=" text-base font-mono">
                      Charity expectations.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-2 mb-2 bg-white">
                  <img
                    className="w-[160px] h-[160px] object-cover"
                    src="./assets/styleFood.jpg"
                    alt=""
                  />
                  <div className="">
                    <p className="text-base font-mono">Charity expectations.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-2 mb-2 bg-white">
                  <img
                    className="w-[160px] h-[160px] object-cover"
                    src="./assets/styleFood.jpg"
                    alt=""
                  />
                  <div className="">
                    <p className="text-base font-mono">Charity expectations.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DisplayProject;
