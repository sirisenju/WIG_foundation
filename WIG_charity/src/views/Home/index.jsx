import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Swipper from "../../components/Swipper";
import SwipperTwo from "../../components/SwipperTwo";

function Home() {
  return (
    <>
      {/* the navbar component */}
      <Navbar
        intro="Welcome to WESTERNERS WORLDWIDE."
        heading="Selfless Service, Endless Possibilities."
        paragraph="We Seek out world changers and difference makers around the
                globe, and equip them to fulfill their unique purpose."
      />
      <main>
        <section className="w-full h-full">
          {/* first div in the section */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex pt-2 2xl:max-w-7xl">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
              className="w-full sm:w-1/2 block lg:flex relative -z-[1] p-3 sm:p-6"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="w-full sm:max-w-xs h-[380px] border-[#219D80]/[.40] border-[10px]"
              >
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
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="max-w-sm mx-auto sm:ml-4 sm:mr-4 md:ml-4 p-2"
              >
                <h3 className="font-mono text-base pb-1 tracking-wider">
                  The Westerners Creed.
                </h3>
                <h2 className=" text-xl pb-1">
                  Mission and vision statement.
                </h2>
                <p className="text-pretty text-justify pb-3">
                  We believe in a life of humility: As Westerners, we understand the importance of humility in our 
                  interactions with others. We strive to be modest in our thoughts, actions, and achievements, 
                  as it fosters a sense of unity and respect within our family.
                </p>
                <button className="bg-green-400 px-6 py-2">Read More</button>
              </div>
            </div>
          </div>

          {/* potential slider */}
          <div className="h-full w-full mx-auto flex justify-center items-center">
            <SwipperTwo />
          </div>

          {/* second div in the section */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex mt-5 sm:mt-5 2xl:max-w-7xl">
            <div className="w-full sm:w-1/2 block lg:flex relative p-2 sm:p-6 order-last">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="w-full sm:max-w-sm h-[380px] border-[#219D80]/[.40] border-[10px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/openarm.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="bg-white w-[90%] mx-auto -mt-[130px] sm:ml-[10px] md:ml-20 sm:max-w-sm h-fit border-[#219D80]/[.40] border-[10px] lg:-ml-24 lg:mt-[35%] relative"
              >
                <div className="p-5">
                  <h2 className="text-center text-xl font-medium">Objectives of the Westerners Family.</h2>
                  <ul className="list-disc text-pretty">
                    <li className="text-[#219D80] font-mono">
                      Foster and maintain a close-knit community of individuals dedicated 
                      to progressive thought and benevolence.
                    </li>
                    <li className="font-mono">
                      Develop and promote personal relationships with our leader, Supremo Western Iyamu, 
                      built on mutual respect and trust.
                    </li>
                    <li className="font-mono">
                      Embrace the values, customs, and traditions cherished by the Westerners Family, 
                      demonstrating our commitment to a way of life rooted in serving others.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center">
              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="max-w-md mx-auto sm:ml-4 sm:mr-4 md:ml-4 p-2"
              >
                <h3 className="font-mono text-base pb-1 tracking-wider">
                  Welcome To The Westerners Creed.
                </h3>
                <h2 className="text-3xl pb-2">
                  Coming Together <br />
                  To Make a Difference.
                </h2>
                <p className="text-pretty pb-3">
                  We believe in the power of giving: Generosity is the cornerstone of the Westerners Family.
                  We embrace a tradition of selflessness, willingly extending a helping hand to those in need, 
                  without hesitation or expectation of personal gain.
                </p>
                <div className="w-full flex flex-row gap-2 mb-4">
                  <div className=" w-1/2 bg-[#219D80]/[.10] p-2">
                    <p className="flex gap-2 items-center text-lg pb-2">
                      {" "}
                      <img src="./assets/shild.png" alt="" />
                      <span>Our Mission</span>
                    </p>
                    <p className="text-pretty">
                      We believe in improving lives: Our purpose as Westerners is to uplift and enhance the lives 
                      of like-minded individuals who share our passion for making a positive impact on humanity. 
                      We are committed to improving the well-being of others in all aspects of life.
                    </p>
                  </div>
                  <div className="w-1/2 bg-[#219D80]/[.10] p-2">
                    <p className="flex gap-2 items-center text-lg pb-2">
                      {" "}
                      <img src="./assets/shild.png" alt="" />
                      <span>Our Vision</span>
                    </p>
                    <p className="text-pretty">
                      We believe in the liberty of independent decision-making: The Westerners Family cherishes 
                      individual freedom and autonomy. While our collective values bind us together, we encourage 
                      every member to express their independent thoughts, make sound decisions, and contribute to 
                      the growth and development of our family.
                    </p>
                  </div>
                </div>
                <button className="bg-green-400 px-6 py-2">Read More</button>
              </div>
            </div>
          </div>

          {/* the third div in the section the cause section.*/}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="h-full w-full mt-6 lg:w-[80%] mx-auto p-2 2xl:max-w-7xl"
          >
            <h3 className="font-mono text-base pb-1 tracking-wider">
              Latest Causes
            </h3>
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
                    <div className="flex justify-between pt-2">
                      <p>Raised:$600</p> <p>Goal:$600</p>
                    </div>
                    <div className="h-3 w-full bg-green-400"></div>
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
                    <div className="flex justify-between pt-2">
                      <p>Raised:$600</p> <p>Goal:$600</p>
                    </div>
                    <div className="h-3 w-full bg-green-400"></div>
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
                    <div className="flex justify-between pt-2">
                      <p>Raised:$600</p> <p>Goal:$600</p>
                    </div>
                    <div className="h-3 w-full bg-green-400"></div>
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
                    <div className="flex justify-between pt-2">
                      <p>Raised:$600</p> <p>Goal:$600</p>
                    </div>
                    <div className="h-3 w-full bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* second section--------------- */}
        {/* testimonials------------------ */}
        <section className="h-full w-full bg-footer_theme">
          <div className="h-full w-full sm:w-[80%] mx-auto flex justify-center items-center 2xl:max-w-7xl">
            <Swipper />
          </div>
        </section>

        {/* third section ------------------------------- */}
        <section className="h-full w-full">
          {/* first div------------------------ */}
          <div className="w-full lg:w-[75%] mx-auto p-2 pt-[5%] 2xl:max-w-7xl">
            <h3 className="font-mono text-base pb-2 tracking-wider">
              Our Fun Facts
            </h3>
            <p className="text-2xl pb-8">
              We Believe We Can Save <br />
              More Lives With Your Support!
            </p>
            {/* status cards */}
            <div className="w-full mx-auto mt-[10%] mb-5">
              <div className="block sm:flex justify-between gap-10 flex-wrap">
                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className="w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2 font-mono">People Helped</p>
                </div>

                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/world-illu.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2 font-mono">Country Member</p>
                </div>

                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/carry-box.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2 font-mono">Volunteer</p>
                </div>

                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className="w-full h-full object-center"
                      src="./assets/dove-illu.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2">4500+</h4>
                  <p className="text-lg pt-2 font-mono">People Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* second div articles for the read......................... */}
          <div className="w-full lg:w-[75%] mx-auto mt-[5%] mb-[4%] p-2 2xl:max-w-7xl">
            <h3 className="font-mono text-base pb-2 tracking-wider">
              Our Fun Facts
            </h3>
            <p className="text-2xl pb-8">Articles You Might Like.</p>
            <div className="block sm:flex sm:gap-10 flex-wrap">
              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full">
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
                  <button className="px-5 py-2 bg-green-400 mt-4">
                    Read More
                  </button>
                </div>
              </div>

              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full">
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
                  <button className="px-5 py-2 bg-green-400 mt-4">
                    Read More
                  </button>
                </div>
              </div>

              <div className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]">
                <div className="h-[50%] w-full">
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
                  <button className="px-5 py-2 bg-green-400 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* third div---------------------------------------------------- */}
          {/* sponsors-------------------- */}
          <div className="mt-6 mb-10 w-full ">
            <div className="w-full sm:w-[75%] mx-auto flex justify-between gap-2 p-2 flex-wrap 2xl:max-w-7xl">
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
