import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "../../components/Navbar";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom"; 

function Blog() {
  const { blogtitle } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      setError(null);

      try {
        //const response = await axios.get('http://127.0.0.1:8000/api/summary/');
        const response = await axios.get(`http://127.0.0.1:8000/api/blog/${blogtitle}/`);
        setBlog(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [blogtitle]); // Re-run useEffect when projectId changes
  return (
    <>
      <Navbar
        variant="primary"
        intro="Our Stories."
        heading="Empowering Change: Building a Stronger Tomorrow Through Our Foundation"
        paragraph="We are committed to making a tangible difference in the lives of those in need. 
        Join us in shaping a brighter future for all."
      />

      {/* first section of the blog */}
      <section className="w-full h-full">
        <div className="w-full md:w-[80%] h-full mx-auto p-2 sm:p-0 2xl:max-w-7xl">
          <h2 className="text-2xl font-bold tracking-wide pt-4 pb-4">
            Our blogging story. Join us and be a giver today.
          </h2>
          {blog && (
          <div className="w-full flex flex-wrap">
            <div className="w-full xl:w-[70%]">
              <img
                src={blog.image}
                alt="blog1"
                className="w-full h-[380px] object-cover object-top"
              />

              {/* div for clock  */}
              <div className="w-full sm:max-w-sm flex justify-between pt-2 sm:p-2">
                <p className="flex items-center gap-2">
                  <span>
                    <FaUser />
                  </span>
                  {blog.author}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCalendar />
                  </span>
                  {blog.post_date}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaClock />
                  </span>
                  {blog.read_duration} mins read
                </p>
              </div>

              <div className="mt-2">
                <h2 className=" text-2xl font-semibold tracking-wide pt-2 pb-2">
                  {blog.title}
                </h2>
                <p>
                  {blog.content}
                </p> 
              </div>
            </div>

            {/* aside section */}
            <div className="px-2 flex-grow basis-[260px]">
              {/* cetegory div */}
              <div className="w-full h-[380px] pt-8 pb-8 p-2 bg-[#EDF7F5]">
                <h2 className="text-xl font-semibold tracking-wide font-mono pb-2">
                  Category
                </h2>
                <div className="text-lg flex justify-between border-black border-b-2 border-t-2 m-2 pt-2 pb-2">
                  <p>Education</p>
                  <p>(10)</p>
                </div>
                <div className="text-lg flex justify-between border-black border-b-2 m-2 pb-2">
                  <p>Food</p>
                  <p>(3)</p>
                </div>
                <div className="text-lg flex justify-between border-black border-b-2 m-2 pb-2">
                  <p>Medical</p>
                  <p>(4)</p>
                </div>
                <div className="text-lg flex justify-between border-black border-b-2 m-2 pb-2">
                  <p>Home</p>
                  <p>(8)</p>
                </div>
                <div className="text-lg flex justify-between border-black border-b-2 m-2 pb-2">
                  <p>Water</p>
                  <p>(6)</p>
                </div>
              </div>

              {/* recent posts div */}
              <div className="w-full h-fit pt-8 pb-8 p-2 bg-[#EDF7F5] mt-2">
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
                    <p className="text-base font-mono">
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
                    <p className="text-base font-mono">
                      Charity expectations.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

export default Blog;
