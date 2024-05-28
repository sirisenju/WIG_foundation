import React from "react";
import Navbar from "../../components/Navbar";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";

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
        <div className="w-full md:w-[80%] h-full mx-auto p-2 sm:p-0">
          <h2 className="text-2xl font-bold tracking-wide pt-4 pb-4">
            Our blogging story. Join us and be a giver today.
          </h2>
          <div className="w-full flex flex-wrap">
            <div className="w-full xl:w-[70%]">
              <img
                src="./assets/childrenIllustration1.jpg"
                alt="blog1"
                className="w-full h-[380px] object-cover object-top"
              />

              {/* div for clock  */}
              <div className="w-full sm:max-w-sm flex justify-between pt-2 sm:p-2">
                <p className="flex items-center gap-2">
                  <span>
                    <FaUser />
                  </span>
                  Lois Lane
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCalendar />
                  </span>
                  15/12/2024
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaClock />
                  </span>
                  10 mins read
                </p>
              </div>

              <div className="mt-2">
                <h2 className=" text-2xl font-semibold tracking-wide pt-2 pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore quo, magnam aut dignissimos, commodi ad, quos iste
                  deserunt dolorem ut perferendis fugiat. Asperiores saepe minus
                  eum laborum perferendis fuga aliquid autem fugit natus. Nisi
                  enim numquam, nihil nemo consectetur expedita.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore officia exercitationem, modi necessitatibus ea fuga
                  soluta laboriosam. Libero vitae similique, tenetur, aut illum
                  ut atque, inventore nobis earum repellat eius repellendus.
                  Totam adipisci sapiente harum quia, ab dolores nostrum nobis
                  id obcaecati fuga voluptas, quae labore minus non? Impedit
                  consequatur aspernatur vero cumque sint. Explicabo natus iste
                  aut molestias praesentium perspiciatis harum! Earum
                  perspiciatis neque nesciunt repudiandae saepe. Quidem, ipsa?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  maiores quasi quam consequatur reiciendis eum ex dolore minima
                  itaque nisi! Cupiditate laudantium odit possimus rem, ducimus
                  ab voluptatum autem molestiae quaerat eius officia, cum
                  voluptates dignissimos dolorem ipsa voluptatibus mollitia!
                  Dolorem error dicta non a? Eaque, voluptatem quam voluptatibus
                  sed nostrum, impedit, eligendi facere voluptatum quas iusto
                  molestiae tempora id accusantium et. Commodi eos nisi magnam
                  repudiandae saepe voluptas, quaerat voluptatum animi fuga
                  optio quidem, ullam molestias sunt illo dolorem, eius incidunt
                  hic sapiente velit inventore totam sequi similique accusamus.
                  Quaerat ea nesciunt deserunt cum reiciendis repudiandae minus
                  ipsa quae labore expedita itaque aspernatur optio, magnam et
                  voluptatem quisquam provident, atque quis dolorum, esse harum
                  deleniti! Sed illum inventore distinctio provident! Corporis
                  qui, dolorum ea laudantium asperiores fuga commodi
                  repudiandae!
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
        </div>
      </section>
    </>
  );
}

export default Blog;
