import React from "react";
import Navbar from "../../components/Navbar";

function Blog() {
  return (
    <>
      <Navbar
        variant="primary"
        intro="Our Stories."
        heading="Empowering Change: Building a Stronger Tomorrow Through Our Foundation"
        paragraph="Our foundation is committed to making a tangible difference in the lives of those in need. 
        Join us in shaping a brighter future for all."
      />

      {/* first section of the blog */}
      <section className="w-full h-full">
        <div className="w-[80%] h-full mx-auto bg-green-300">
          <h2>Our blogging story. Join us and be a giver today.</h2>
          <div className="w-full flex">
            <div className=" bg-red-300 w-[70%]">
              <img
                src="./assets/childrenIllustration1.jpg"
                alt="blog1"
                className="w-full h-[380px] object-cover object-top"
              />
              <div className="bg-orange-200 max-w-sm flex justify-between">
                <p>name</p>
                <p>date</p>
                <p>read time</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                quo, magnam aut dignissimos, commodi ad, quos iste deserunt
                dolorem ut perferendis fugiat. Asperiores saepe minus eum
                laborum perferendis fuga aliquid autem fugit natus. Nisi enim
                numquam, nihil nemo consectetur expedita.
              </p>
            </div>
            <div className=" bg-purple-300 w-[30%]">div 2</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
