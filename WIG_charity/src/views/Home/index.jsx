import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      {/* the navbar component */}
      <Navbar />
      <main>
        <section className="w-full h-full">
          {/* first div in the section */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex pt-2">
            <div className="w-full sm:w-1/2 block lg:flex relative p-3 sm:p-6">
              <div className="w-full sm:max-w-xs h-[380px] border-[#219D80]/[.40] border-[10px]">
                <img
                  className="w-full h-full object-cover"
                  src="./assets/login_bg.jpg"
                  alt=""
                />
              </div>
              <div className="w-[90%] mx-auto -mt-[130px] sm:ml-[10px] md:ml-20 sm:max-w-sm h-[260px] sm:h-[300px] border-[#219D80]/[.40] border-[10px] lg:-ml-24 lg:mt-[35%] relative">
                <img
                  className="w-full h-full object-cover"
                  src="./assets/boxbg.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center">
              <div className="max-w-sm mx-auto sm:ml-4 sm:mr-4 md:ml-4 p-2">
                <h3>About Us</h3>
                <h2>Your Support Is Really Powerful</h2>
                <p className="text-pretty text-justify pb-3">
                  The secret to happiness lies in helping others. Never
                  underestimate the difference you can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <button className="bg-green-400 px-6 py-2">Read More</button>
              </div>
            </div>
          </div>

          {/* second div in the section */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex mt-5 sm:mt-14">
            <div className="w-full sm:w-1/2 block lg:flex relative p-2 sm:p-6 order-last">
              <div className="w-full sm:max-w-sm h-[380px] border-[#219D80]/[.40] border-[10px]">
                <img
                  className="w-full h-full object-cover"
                  src="./assets/openarm.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white w-[90%] mx-auto -mt-[130px] sm:ml-[10px] md:ml-20 sm:max-w-sm h-fit border-[#219D80]/[.40] border-[10px] lg:-ml-24 lg:mt-[35%] relative">
                <div className="p-5">
                  <ul className="list-disc text-justify">
                    <li className="text-[#219D80]">
                      Together, we're going to make the future
                    </li>
                    <li>Children where we are able to fulfill all</li>
                    <li>
                      Their requirements to keep them safe from withered world
                    </li>
                    <li>
                      We have already stepped out and start changing the world
                    </li>
                    <li>Keeping safe them from war, inhumanity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center">
              <div className="max-w-md mx-auto sm:ml-4 sm:mr-4 md:ml-4 p-2">
                <h3 className="pb-2">Welcome To Charity</h3>
                <h2 className="text-3xl pb-2">
                  Let Us Come Together <br />
                  To Make a Difference
                </h2>
                <p className="text-pretty pb-3">
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <div className="w-full flex flex-row gap-2 mb-4">
                  <div className=" w-1/2 bg-[#219D80]/[.10] p-2">
                    <p className="flex gap-2 items-center text-lg pb-2">
                      {" "}
                      <img src="./assets/shild.png" alt="" />
                      <span>Our Mission</span>
                    </p>
                    <p className="text-pretty">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="w-1/2 bg-[#219D80]/[.10] p-2">
                    <p className="flex gap-2 items-center text-lg pb-2">
                      {" "}
                      <img src="./assets/shild.png" alt="" />
                      <span>Our Vision</span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className=" mb-4">
                  <div className="flex justify-between pb-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>

                  <div className="flex justify-between pb-2 pt-2">
                    <p>Donate</p> <p>100%</p>
                  </div>
                  <div className="h-3 w-full bg-green-400"></div>
                </div>

                <button className="bg-green-400 px-6 py-2">Read More</button>
              </div>
            </div>
          </div>

          {/* the third div in the section */}
          <div className="h-full w-full mt-6 lg:w-[80%] mx-auto p-2">
            <h3 className="text-base pb-2 tracking-wider">Latest Causes</h3>
            <h2 className="text-2xl pb-8">
              Find The Popular Cause <br /> And Donate To Them
            </h2>
            <div className="block sm:flex justify-between flex-wrap gap-x-4">
              <div className="h-max w-full sm:w-[260px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
                <div className="h-[50%] w-full bg-green-200">
                  <img
                    className="w-fit h-fit object-center object-cover"
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
                    className="w-fit h-fit object-center object-cover"
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
                    className="w-fit h-fit object-center object-cover"
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

        {/* second section--------------- */}
        {/* testimonials------------------ */}
        <section className="h-full sm:h-[60vh] w-full bg-footer_theme">
          <div className="h-full w-full sm:w-[80%] mx-auto flex justify-center items-center">
            <div className="w-full sm:w-[60%] p-2 mx-auto text-center text-white">
              <h3 className="text-base pb-2 tracking-wider">Testimonials.</h3>
              <p className="text-2xl pb-8">What People Say About Us</p>
              <div className="h-[90px] w-[90px] mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  className=" w-full h-full object-cover object-center"
                  src="./assets/girlHolder.jpg"
                  alt=""
                />
              </div>
              <p className="pt-2 text-base">Tony Stark</p>
              <p className=" pb-2 text-lg">CEO</p>
              <p className="text-lg space-x-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                minus, saepe dolor sapiente provident non? Quia, error maiores?
                Facilis, itaque.
              </p>
            </div>
          </div>
        </section>

        {/* third section ------------------------------- */}
        <section className="h-full w-full">
          {/* first div------------------------ */}
          <div className="w-full lg:w-[75%] mx-auto p-2 pt-[5%]">
            <h3 className="text-base pb-2 tracking-wider">Our Fun Facts</h3>
            <p className="text-2xl pb-8">
              We Believe We Can Save <br />
              More Lives With Your Support!
            </p>
            <div className="w-full mx-auto">
              <div className="block sm:flex gap-10">
                <div className="w-full mb-4 sm:w-[360px] lg:max-w-xs h-[250px] bg-green-200 text-center p-6 ">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className="w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2">People Helped</p>
                </div>

                <div className="w-full mb-4 sm:w-[360px] lg:max-w-xs h-[250px] bg-green-200 text-center p-6">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2">People Helped</p>
                </div>

                <div className="w-full mb-4 sm:w-[360px] lg:max-w-xs h-[250px] bg-green-200 text-center p-6">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2">People Helped</p>
                </div>

                <div className="w-full mb-4 sm:w-[360px] lg:max-w-xs h-[250px] bg-green-200 text-center p-6">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2">People Helped</p>
                </div>
              </div>
            </div>
          </div>

          {/* second div......................... */}
          <div className="w-full lg:w-[75%] mx-auto mt-[5%] mb-[4%] p-2">
            <h3 className="text-base pb-2 tracking-wider">Our Fun Facts</h3>
            <p className="text-2xl pb-8">Articles You Might Like.</p>
            <div className="block sm:flex sm:gap-10 flex-wrap">
              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full bg-green-200">
                  <img
                    className="w-full h-full object-center object-cover"
                    src=" ./assets/arabic-businessman.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-max p-3">
                  <p className="pb-3 flex justify-between">
                    Jon Snow <span>20th, Jun 2020</span>
                  </p>
                  <h3 className="text-lg pb-3">
                    Charity, Expectations vs. Reality
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam corrupti enim repellat dolorum atque dolore esse
                    tempora suscipit ratione tenetur?
                  </p>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>

              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full bg-green-200">
                  <img
                    className="w-full h-full object-center object-cover"
                    src=" ./assets/arabic-businessman.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-max p-3">
                  <p className="pb-3 flex justify-between">
                    Jon Snow <span>20th, Jun 2020</span>
                  </p>
                  <h3 className="text-lg pb-3">
                    Charity, Expectations vs. Reality
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam corrupti enim repellat dolorum atque dolore esse
                    tempora suscipit ratione tenetur?
                  </p>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>

              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full bg-green-200">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="./assets/arabic-businessman.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-max p-3">
                  <p className="pb-3 flex justify-between">
                    Jon Snow <span>20th, Jun 2020</span>
                  </p>
                  <h3 className="text-lg pb-3">
                    Charity, Expectations vs. Reality
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam corrupti enim repellat dolorum atque dolore esse
                    tempora suscipit ratione tenetur?
                  </p>
                  <button className="px-5 py-2 bg-green-400 mt-8">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* third div---------------------------------------------------- */}
          {/* sponsors-------------------- */}
          <div className="mt-6 mb-10 w-full">
            <div className="w-full sm:w-[75%] mx-auto flex justify-between gap-2 p-2 flex-wrap">
              <div className="w-[180px] h-[70px] flex-grow">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/sponsor1.png"
                  alt=""
                />
              </div>
              <div className="w-[180px] h-[70px] flex-grow">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/sponsor2.png"
                  alt=""
                />
              </div>
              <div className="w-[180px] h-[70px] flex-grow">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/sponsor2.png"
                  alt=""
                />
              </div>
              <div className="w-[180px] h-[70px] flex-grow">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/sponsor1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* the footer component */}
      <Footer />
    </>
  );
}

export default Home;
