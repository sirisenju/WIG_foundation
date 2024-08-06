import React from "react";
import wf_Team from "../../../lib/ourteam";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function OurTeam() {
  return (
    <>
      <Navbar
        variant="primary"
        intro="Our Team."
        heading="Empowering Excellence: Meet Our Exceptional Team"
        paragraph="Our team is a dynamic blend of diverse talents and perspectives, united by a shared passion for innovation and excellence."
      />

      {/* start of the section */}
      <section className="w-full h-full overflow-clip">
        {/* div for the content */}
        <div className="w-full p-2 md:w-[70%] h-full mx-auto">
          {/* div for the heading message */}
          <div className="max-w-sm mb-2 pt-5">
            <h3 className="text-lg pb-2 tracking-wider">Meet our team.</h3>
            <p className="text-3xl pb-8">
                Get to know the individuals behind our success:
            </p>
          </div>
          {/* dive for image containers */}
          <div className="flex flex-wrap h-full justify-between gap-y-4 gap-4">
            {/* map through the team array of objects */}
            {wf_Team.map((item) => (
              <div
                // data-aos="fade-right"
                // data-aos-offset="200"
                // data-aos-delay="50"
                // data-aos-duration="500"
                // data-aos-easing="ease-in-out"
                key={item.id}
                className="min-h-min mx-auto shadow-md flex-grow basis-[280px] mb-3 sm:mb-0"
              >
                <img
                  src={item.imageUrl}
                  loading="lazy"
                  className="object-cover object-center h-[550px] w-full rounded-tl-xl rounded-tr-xl"
                  alt=""
                />
                <div className="w-full text-start p-2">
                  <p className="text-xl">{item.name}</p>
                  <p className="text-lg sm:text-base font-semibold">{item.position}</p>
                  <p className="text-base">{item.quoat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer/>
    </>
  );
}

export default OurTeam;
