import React from "react";
import Navbar from "../../components/Navbar";
import accordianData from "../../../lib/accordian_data";
import Accordian from "../../components/Accordian";
import Footer from "../../components/Footer";

function Causes() {
  return (
    <>
      <Navbar />
      <section className="h-full w-full">
        <div className="h-full w-[80%] mx-auto pt-10">
          {/* heading */}
          <div className="max-w-sm mb-5">
            <h3 className="text-lg pb-2 tracking-wider">Latest causes</h3>
            <p className="text-3xl pb-8">
              Find our popular cause and donate to them.
            </p>
          </div>

          {/* list of causes div 2 rows 4 column */}
          <div className="h-full w-full flex flex-wrap gap-x-4">
            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
              <div className="h-[50%] w-full bg-green-200">
                <img
                  className="w-full h-full"
                  src=" ./assets/kidd.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-max p-3">
                <h3 className="text-lg pb-3">Medical</h3>
                <p className=" pb-3">
                  Donate For Poor People Treatment and Medicine
                </p>
                <p className=" pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore distinctio qui.
                </p>
                <div className="">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                  <div className="flex justify-between pt-2">
                    <p>Raised:$600</p> <p>Goal:$600</p>
                  </div>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section for the accordian and text/image */}
      <section className="w-full h-full bg-[#EDF7F5]">
        <div className="w-[80%] mx-auto pb-16 pt-16">
          <div className="max-w-sm mb-5">
            <h3 className="text-lg pb-2 tracking-wider">Have any question?</h3>
            <p className="text-3xl pb-8">
              Frequently Asked Questions.
            </p>
          </div>
          <div className="w-full flex justify-between pb-4">
            <div className="w-full sm:max-w-lg h-[380px] border-[#219D80]/[.40] border-[10px]">
              <img
                className="w-full h-full object-cover"
                src="./assets/login_bg.jpg"
                alt=""
              />
            </div>

            <div className="accordion w-full">
              {accordianData.map(({ title, message, id, number }) => (
                <Accordian
                  title={title}
                  message={message}
                  key={id}
                  number={number}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* third section for more communication */}
      <section className="w-full h-full">
        <div className=" w-[80%] mx-auto pb-10">
          <div className="max-w-xs mb-5 pt-10">
            <h3 className="text-3xl pb-4">Still need help?</h3>
            <p className="text-lg pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
            </p>
          </div>
          <div className="flex justify-between">
            <div className=" max-w-sm bg-[#EDF7F5] text-center p-4">
              <img className="h-16 w-16 mx-auto" src="./assets/callguy.png" alt="" />
              <h3 className="text-2xl pb-3 pt-2">Call support</h3>
              <p className="text-base pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
              </p>
            </div>

            <div className=" max-w-sm bg-[#EDF7F5] text-center p-4">
              <img className="h-16 w-16 mx-auto" src="./assets/callguy.png" alt="" />
              <h3 className="text-2xl pb-3 pt-2">Call support</h3>
              <p className="text-base pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
              </p>
            </div>

            <div className=" max-w-sm bg-[#EDF7F5] text-center p-4">
              <img className="h-16 w-16 mx-auto" src="./assets/callguy.png" alt="" />
              <h3 className="text-2xl pb-3 pt-2">Call support</h3>
              <p className="text-base pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*contact form section*/}
      <section  className="w-full h-full pb-24">
        <div className=" w-[80%] h-full mx-auto">
          <div className="max-w-xs mb-5 pt-10">
            <h3 className="text-3xl pb-4">Get in touch today.</h3>
            <p className="text-lg pb-2">
              Send us a message
            </p>
          </div>
        <div className="mx-auto flex flex-row mb-4 mt-4">
        <div className="max-w-4xl h-full pr-16">
          <div className="h-full flex flex-col items-center justify-center">
            <form action="" className="flex flex-col gap-3">
              <div className="flex gap-2 w-full">
                <div className="block w-full">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    placeholder="firstname"
                    className="w-full mt-2 py-2 px-2"
                    type="text"
                  />
                </div>
                <div className="block w-full">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    placeholder="lastname"
                    className="w-full mt-2 py-2 px-2"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <div className="block w-full">
                  <label htmlFor="mail">Mail</label>
                  <input
                    placeholder="Your email"
                    className="w-full mt-2 py-2 px-2"
                    type="text"
                  />
                </div>
                <div className="block gap-2 w-full">
                  <label htmlFor="phonenumber">Phone number</label>
                  <input
                    placeholder="080 *** *** 57"
                    className="w-full mt-2 py-2 px-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <textarea className="w-full mt-2 py-2 px-2" name="text" rows="3"></textarea>
              </div>
              <div className="w-full">
                <button className="py-2 px-4 mt-4 mb-4 border-2 border-green-500 hover:bg-green-600 hover:text-white">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-xs bg-white max-h-min p-5">
            <h2 className=" font-bold text-2xl pb-2">Address.</h2>
            <p className=" pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio 
              non nostrum odio explicabo, soluta repudiandae quasi sequi?
            </p>
            <p><span className="font-bold">Location:</span>  Paris, France</p>
            <p><span className="font-bold">Phone:</span>+234 806 789 0957</p>
            <p><span className="font-bold">Email address:</span>heritagefoundation@gmail.com</p>
        </div>
      </div>
        </div>
      </section>

      {/* footer */}
      <Footer/>
    </>
  );
}

export default Causes;
