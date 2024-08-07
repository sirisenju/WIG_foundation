import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Swipper from "../../components/Swipper";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

function About() {
  return (
    <>
      <Navbar
        variant="primary"
        intro="About us."
        heading="Empowering Change: Building a Stronger Tomorrow Through Our Foundation"
        paragraph="We are committed to making a tangible difference in the lives of those in need. 
        Join us in shaping a brighter future for all."
      />
      <main>
        {/* first section */}
        <section className="w-full h-full overflow-clip">
          {/* first div design */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex mt-5 sm:mt-14 2xl:max-w-7xl">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
              className="w-full sm:w-1/2 block lg:flex relative p-3 sm:p-6"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="w-full sm:max-w-sm h-[400px] border-[#219D80]/[.40] border-[10px]"
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src="./assets/iyamuST.jpg"
                  alt=""
                />
              </div>
              <div className="w-[90%] mx-auto -mt-[120px] sm:ml-[10px] md:ml-20 sm:max-w-sm h-[400px] border-[#219D80]/[.40] border-[10px] lg:-ml-20 lg:mt-[15%] relative">
                <img
                  className="w-full h-full object-cover object-top"
                  src="./assets/iyamuBW.jpg"
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
                  About Us
                </h3>
                <h2 className="text-4xl pb-1">The Westerners Creed.</h2>
                <p className="text-pretty text-justify pb-3">
                  We believe in the liberty of independent decision-making: The
                  Westerners Family cherishes individual freedom and autonomy.
                  While our collective values bind us together, we encourage
                  every member to express their independent thoughts, make sound
                  decisions, and contribute to the growth and development of our
                  family.
                </p>
              </div>
            </div>
          </div>

          {/* second div design */}
          <div className="w-full lg:w-[80%] mx-auto block sm:flex mt-5 sm:mt-14 2xl:max-w-7xl">
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
                  <h2 className="text-center text-2xl font-medium">
                    Objectives of the Westerners Family.
                  </h2>
                  <ul className="list-disc text-pretty text-base">
                    <li className="text-[#219D80] font-mono">
                      Identifying and developing future leaders, empowering them to drive change.
                    </li>
                    <li className="font-mono">
                      Investing in human capital development, enhancing skills and knowledge.
                    </li>
                    <li className="font-mono">
                      Supporting those in need, demonstrating compassion and empathy.
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
                <h3 className="font-mono text-3xl pb-1 tracking-wider">
                  Welcome To The Westerners Creed.
                </h3>
                <h2 className="text-xl pb-2">Its All About Love.</h2>
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
                      We believe in improving lives: Our purpose as Westerners
                      is to uplift and enhance the lives of like-minded
                      individuals who share our passion for making a positive
                      impact on humanity. We are committed to improving the
                      well-being of others in all aspects of life.
                    </p>
                  </div>
                  <div className="w-1/2 bg-[#219D80]/[.10] p-2">
                    <p className="flex gap-2 items-center text-lg pb-2">
                      {" "}
                      <img src="./assets/shild.png" alt="" />
                      <span>Our Vision</span>
                    </p>
                    <p>
                      We believe in a life of humility: As Westerners, we
                      understand the importance of humility in our interactions
                      with others. We strive to be modest in our thoughts,
                      actions, and achievements, as it fosters a sense of unity
                      and respect within our family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full overflow-clip">
          {/* about list div */}
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="w-full lg:w-[80%] h-full mx-auto pb-4 pt-10 p-2 2xl:max-w-7xl"
          >
            <h3 className="text-lg pb-2 tracking-wider pt-4">About</h3>
            <h2 className="text-3xl pb-8">Our Features</h2>
            <div className="w-full block sm:flex justify-between gap-2 flex-wrap">
              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="300"
                data-aos-easing="ease-in-out-sine"
                className="bg-[#219D80]/[.20] hover:bg-primary_theme p-6 rounded-xl mb-4 sm:mb-0 flex-grow basis-[240px]"
              >
                <img className="h-16 w-16" src="./assets/home.png" alt="" />
                <h3 className="text-2xl pt-2 pb-2 tracking-wide">
                  Food & Homeless Charity.
                </h3>
                <p className="text-base pb-2">
                  Join us in our mission to combat hunger and homelessness. Our
                  dedicated team works tirelessly to provide nutritious meals
                  and safe shelter to those in need.
                </p>
                <Link to={"/causes"}>
                  <p className="font-semibold text-base">
                    Join use in creating a better tomorrow.
                  </p>
                </Link>
              </div>

              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                className="bg-[#219D80]/[.20] hover:bg-primary_theme rounded-xl p-6 mb-4 sm:mb-0 flex-grow basis-[240px]"
              >
                <img className="h-16 w-16" src="./assets/icon2.png" alt="" />
                <h3 className="text-2xl pt-2 pb-2 tracking-wide">
                  Make a donation.
                </h3>
                <p className="text-base pb-2">
                  Help us make a difference. Your donation can provide meals,
                  shelter, and essential services to those in need. Donate now
                  and be a part of the solution.
                </p>
                <Link to={"/causes"}>
                  <p className="font-semibold text-base">
                    Join use in creating a better tomorrow.
                  </p>
                </Link>
              </div>

              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out-sine"
                className="bg-[#219D80]/[.20] hover:bg-primary_theme rounded-xl p-6 mb-4 sm:mb-0 flex-grow basis-[240px]"
              >
                <img className="h-16 w-16" src="./assets/ngo.png" alt="" />
                <h3 className="text-2xl pt-2 pb-2 tracking-wide">
                  Non profit.
                </h3>
                <p className="text-base pb-2">
                  We are a non-profit organization committed to transparency and
                  impact. Every donation directly supports our programs, helping
                  us to feed and house those in need. Together, we can create a
                  better future for all.
                </p>
                <Link to={"/causes"}>
                  <p className="font-semibold text-base">
                    Join use in creating a better tomorrow.
                  </p>
                </Link>
              </div>
            </div>


            {/* our leader card design */}
            <div className="pt-10">
              <h2 className="text-3xl pb-2">Our Brave Leader</h2>
            <div className="w-full lg:w-[90%] mx-auto block sm:flex 2xl:max-w-7xl">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
              className="w-full sm:w-[60%] block lg:flex relative p-3"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="w-full sm:max-w-md h-[470px] border-[#219D80]/[.40] border-[10px]"
              >
                <img
                  className="w-full h-full object-cover object"
                  src="./assets/iyamu.jpg"
                  alt=""
                />
              </div>
              <div className="w-[90%] mx-auto -mt-[130px] sm:ml-[10px] md:ml-20 sm:max-w-sm h-[440px] border-[#219D80]/[.40] border-[10px] lg:-ml-24 lg:mt-[35%] relative">
                <img
                  className="w-full h-full object-fill md:object-cover"
                  src="./assets/iyamu4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-full p-2 sm:w-[40%] flex items-center bg-white border-[#219D80]/[.40] border-[10px] ">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="max-w-md mx-auto sm:ml-4 sm:mr-4 md:ml-4"
              >
                <h2 className="text-2xl pb-1">Comrade Western Uwagbame<br /> Iyamu.</h2>
                <p className="text-pretty text-justify">
                  Fondly called Comrade West, is a renowned youth advocate, leadership enthusiast,
                  and trained social worker with extensive experience. As the founder of the Westerners 
                  School of Thought, he has inspired numerous young individuals and women with his unique 
                  leadership style and humane approach.
                  <br />
                  Comrade West has an impressive track record of student leadership, having served as 
                  Deputy Coordinator of Zone B and National Secretary General of the National Association 
                  of Nigerian Students (NANS). He has engaged in various dialogues and initiatives across Nigeria, 
                  fostering connections with emerging leaders.
                  <br />
                  Known for his reliable word and compassionate nature, Comrade West has established the Western 
                  Iyamu Global Foundation, a nonprofit organization dedicated to promoting education and supporting 
                  those in need.
                </p>
              </div>
            </div>
            </div>
          </div>

            {/* div for the counting cards */}
            <div
              // data-aos="fade-left"
              // data-aos-offset="200"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out-sine"
              className="w-full mx-auto mt-[5%] mb-5"
            >
              <div className="block sm:flex justify-between gap-10 flex-wrap">
                <div
                  // data-aos="fade-down"
                  // data-aos-offset="200"
                  // data-aos-delay="50"
                  // data-aos-duration="300"
                  // data-aos-easing="ease-in-out-sine"
                  className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]"
                >
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className="w-full h-full object-center"
                      src="./assets/iconImage.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2"><CountUp end={4500} duration={4}/>+</h4>
                  <p className="text-lg pt-2 font-mono">People Helped</p>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out-sine"
                  className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]"
                >
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/world-illu.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2"><CountUp end={10} duration={4}/>+</h4>
                  <p className="text-lg pt-2 font-mono">Country Member</p>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out-sine"
                  className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]"
                >
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/carry-box.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2"><CountUp end={80} duration={4}/>+</h4>
                  <p className="text-lg pt-2 font-mono">Volunteer</p>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out-sine"
                  className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]"
                >
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className="w-full h-full object-center"
                      src="./assets/dove-illu.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2"><CountUp end={7000} duration={3}/>+</h4>
                  <p className="text-lg pt-2 font-mono">People Saved</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* gallery section */}
        <section className="w-full h-full overflow-clip">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="w-full lg:w-[80%] h-full mx-auto mb-10 p-2 lg:p-0 2xl:max-w-7xl"
          >
            <h2 className="text-2xl pb-8 pt-2">Our Gallery</h2>
            <div className="row1 flex gap-2 justify-between flex-wrap">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover align-middle"
                  src="./assets/war-kids.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/zion-kids.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/romance.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="row2 flex flex-wrap gap-2 mt-2 mb-2">
              <div
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/boxbg.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/schoolkidsss.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/openarm.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-sine"
                className="flex-grow basis-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="./assets/top-school.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* testimonials........... */}
        <section className="h-full sm:h-[60vh] w-full mb-[3%] overflow-clip">
          <div className="h-full w-full sm:w-[80%] mx-auto bg-footer_theme flex justify-center items-center 2xl:max-w-7xl">
            <Swipper />
          </div>
        </section>

        {/* sponsors............................. */}
        {/* <section className="w-full h-full overflow-clip">
          <div className="mt-6 mb-10 w-full mx-auto 2xl:max-w-7xl">
            <div className="w-full sm:w-[60%] mx-auto flex justify-between gap-2 p-2 flex-wrap">
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
        </section> */}
      </main>

      {/* footer component */}
      <Footer />
    </>
  );
}

export default About;
