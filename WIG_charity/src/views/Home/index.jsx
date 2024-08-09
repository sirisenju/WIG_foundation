import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Swipper from "../../components/Swipper";
import SwipperTwo from "../../components/SwipperTwo";
import { Link } from "react-router-dom";
import axios from "axios";
import PostCards from "./PostCards";
import CountUp from 'react-countup';
//import { projectPosts } from "../../../lib/accordian_data";

function Home() {
  const [data, setData] = useState({});
  const [projectPosts, setProjectPosts] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://jcoleman8635.pythonanywhere.com/api/summary/');
              setData(response.data);
              setProjectPosts(response.data.projects);
              console.log(response.data)
              console.log(response.data.projects)
          } catch (error) {
            console.error('Error fetching users:', error);
          }
      };

    fetchData();
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

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
        <section className="w-full h-full overflow-clip">
          {/* first div in the section */}
          <div className="w-full mx-auto block sm:flex pt-2 2xl:max-w-7xl">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
              className="w-full sm:w-1/2 block lg:flex relative -z-[1] p-3"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="w-full sm:max-w-sm h-[550px] border-[#219D80]/[.40] border-[10px]"
              >
                <img
                  className="w-full h-full object-cover object-top"
                  src="./assets/iyamuBW.jpg"
                  alt=""
                />
              </div>
              <div className="w-[90%] h-full mx-auto -mt-[100px] sm:ml-[10px] md:ml-20 sm:max-w-md sm:h-[380px] border-[#219D80]/[.40] border-[10px] lg:-ml-20 lg:mt-[15%] relative">
                <img
                  className="w-full h-full object-cover object-top"
                  src="./assets/iyamuST.jpg"
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
                className="max-w-md mx-auto sm:ml-4 sm:mr-4 md:ml-4 p-2"
              >
                <h3 className="font-mono text-2xl pb-1 tracking-wider">
                  The Westerners Creed.
                </h3>
                <h2 className=" text-xl pb-1">Mission and vision statement.</h2>
                <p className="text-pretty text-justify pb-3">
                  We believe in a life of humility: As Westerners, we understand
                  the importance of humility in our interactions with others. We
                  strive to be modest in our thoughts, actions, and
                  achievements, as it fosters a sense of unity and respect
                  within our family.
                </p>
                <Link to={"/causes"}>
                  <button className="bg-green-400 px-6 py-2">Read More</button>
                </Link>
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
                className="bg-white w-[90%] mx-auto -mt-[130px] sm:ml-[10px] md:ml-20 sm:max-w-md h-fit border-[#219D80]/[.40] border-[10px] lg:-ml-24 lg:mt-[35%] relative"
              >
                <div className="p-5">
                  <h2 className="text-center text-2xl font-medium">
                    Objectives of the Westerners Family.
                  </h2>
                  <ul className="list-disc text-pretty">
                    <li className="text-[#219D80] font-mono">
                      Identifying and developing future leaders, empowering them to drive change.
                    </li>
                    <li className="font-mono">
                      Investing in human capital development, enhancing skills and knowledge.
                    </li>
                    <li className="font-mono">
                      Supporting those in need, demonstrating compassion and empathy.
                    </li>
                    <li className="font-mono">
                      Embodying selflessness, prioritizing the greater good over personal interests.
                    </li>
                    <li className="font-mono">
                      Fostering community development, building stronger, more resilient societies.
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
                  We believe in the power of giving: Generosity is the
                  cornerstone of the Westerners Family. We embrace a tradition
                  of selflessness, willingly extending a helping hand to those
                  in need, without hesitation or expectation of personal gain.
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
                    <p className="text-pretty">
                      We believe in the liberty of independent decision-making:
                      The Westerners Family cherishes individual freedom and
                      autonomy. While our collective values bind us together, we
                      encourage every member to express their independent
                      thoughts, make sound decisions, and contribute to the
                      growth and development of our family.
                    </p>
                  </div>
                </div>
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
            <div className="block sm:flex justify-between flex-wrap gap-x-4 w-full">
            {projectPosts &&
              projectPosts.length > 0 &&
              projectPosts.map((post) => (
                <PostCards key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        {/* second section--------------- */}
        {/* testimonials------------------ */}
        <section className="h-full w-full bg-footer_theme overflow-clip">
          <div className="h-full w-full sm:w-[80%] mx-auto flex justify-center items-center 2xl:max-w-7xl">
            <Swipper />
          </div>
        </section>

        {/* third section ------------------------------- */}
        <section className="h-full w-full overflow-clip">
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
            <div className="w-full mx-auto mt-5 mb-5">
              <div className="block sm:flex justify-between gap-10 flex-wrap">
                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
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

                <div className="w-full mb-4 lg:max-w-xs h-[250px] bg-[#219D80]/[.20] hover:bg-primary_theme text-center p-6 flex-grow basis-[220px]">
                  <div className="w-[80px] h-[80px] flex mx-auto">
                    <img
                      className=" w-full h-full object-center"
                      src="./assets/world-illu.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-2xl pt-2"><CountUp end={10} duration={3}/>+</h4>
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
                  <h4 className="text-2xl pt-2"><CountUp end={80} duration={4}/>+</h4>
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
                  <h4 className="text-2xl pt-2"><CountUp end={7000} duration={4}/>+</h4>
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
              {data.blogs &&
                data.blogs.length > 0 &&
                data.blogs.map((blog, index) => (
                  <div
                    key={blog.title}
                    className="h-max w-full sm:w-[290px] shadow-lg drop-shadow-xl mb-4 flex-grow basis-[170px]"
                  >
                    <div className="h-[50%] w-full">
                      <img
                        className="w-full h-full object-center object-cover"
                        src={blog.image}
                        alt=""
                      />
                    </div>
                    <div className="w-full h-max p-3">
                      <p className="pb-3 flex justify-between">
                        {blog.read_duration}
                        <span>{blog.date}</span>
                      </p>
                      <h3 className="text-lg pb-3">{blog.title}</h3>
                      <p>{truncateText(blog.content, 10)}</p>
                      <Link to={`/blog/${blog.title}`}>
                        <button className="px-5 py-2 bg-green-400 mt-4">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
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
