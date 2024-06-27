import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import accordianData from "../../../lib/accordian_data";
import Accordian from "../../components/Accordian";
import Footer from "../../components/Footer";
import PostCards from "../Home/PostCards";

function Causes() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('message', message);

    try {
      const response = axiosInstance.post('api/contact/', formData);
      console.log(response)
    } catch(error){
      console.error("post failed", error)
    }
  };

  const projectPosts = [
    {id: 1, title: "Medicine", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "40%"},
    {id: 2, title: "Art", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "50%"},
    {id: 3, title: "Literature", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "60%"},
    {id: 4, title: "Science", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "70%"},
    {id: 5, title: "Geography", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "80%"},
    {id: 6, title: "Chemistry", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "90%"},
    {id: 7, title: "Physics", subHeading: "Donate medicine for the poor.", mainContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto modi quam id corporis! Facilis neque vel laudantium? Natus excepturi ab ipsam aliquid dolore veniam voluptas odit eos tenetur saepe!`, image: "./assets/kidd.jpg", milestone: "100%"},
  ]

  return (
    <>
      <Navbar
        variant="primary"
        intro="Our Cause."
        heading="Building Brighter Futures: Supporting Orphaned Children with Love and Care"
        paragraph="Join us in giving hope and a future to orphaned children. Your support transforms lives, 
        providing love, care, and opportunities for a brighter tomorrow."
      />

      <section className="h-full w-full">
        <div className="h-full w-full p-2 sm:w-[80%] mx-auto pt-5 sm:pt-10">
          {/* heading */}
          <div className="max-w-sm mb-5">
            <h3 className="text-lg pb-2 tracking-wider">Latest causes</h3>
            <p className="text-3xl pb-8">
              Find our popular cause and engage with them.
            </p>
          </div>
          {/* list of causes div 2 rows 4 column */}
          <div className="h-full w-full flex flex-wrap gap-x-4">
            {
              projectPosts.map((item) => (
                <PostCards key={item.id} title={item.title} subHeading={item.subHeading} mainContent={item.mainContent} image={item.image} milestone={item.milestone}/>
              ))
            }
          </div>
        </div>
      </section>

      {/* second section for the accordian and text/image */}
      <section className="w-full h-full bg-[#EDF7F5]">
        <div className="w-full p-2 md:w-[80%] mx-auto pb-5 sm:pb-16 pt-5 sm:pt-16">
          <div className="max-w-sm mb-5">
            <h3 className="text-lg pb-2 tracking-wider">Have any question?</h3>
            <p className="text-3xl pb-8">
              Frequently Asked Questions.
            </p>
          </div>
          <div className="w-full block sm:flex justify-between pb-4">
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
        <div className="w-full sm:w-[80%] mx-auto pb-10 p-2">
          <div className="max-w-xs mb-5 pt-10">
            <h3 className="text-3xl pb-4">Still need help?</h3>
            <p className="text-lg pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
            </p>
          </div>
          <div className="gap-3 flex flex-wrap">
            <div className="bg-[#EDF7F5] text-center p-4 mb-2 sm:mb-0 flex-grow basis-[200px]">
              <img className="h-16 w-16 mx-auto" src="./assets/callguy.png" alt="" />
              <h3 className="text-2xl pb-3 pt-2">Call support</h3>
              <p className="text-base pb-2">
              We enjoy adapting our strategies to offer
              every client the best solutions that are
              at the forefront of the industry.
              </p>
            </div>

            <div className="bg-[#EDF7F5] text-center p-4 mb-2 sm:mb-0 flex-grow basis-[200px]">
              <img className="h-16 w-16 mx-auto" src="./assets/chat-us.png" alt="" />
              <h3 className="text-2xl pb-3 pt-2">Chat with us</h3>
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
      <section  className="w-full h-full pb-20 p-2">
        <div className="w-full sm:w-[80%] h-full mx-auto">
          <div className="max-w-xs mb-5 pt-4 sm:pt-10">
            <h3 className="text-3xl pb-4">Get in touch today.</h3>
            <p className="text-lg pb-2">
              Send us a message
            </p>
          </div>
        <div className="mx-auto  sm:flex flex-row flex-wrap mb-4 mt-4">
        <div className="max-w-4xl h-full pr-0 sm:pr-16">
          <div className="h-full flex flex-col items-center justify-center flex-grow">
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
        <div className="max-w-sm bg-white max-h-min p-5 flex-grow">
            <h2 className="font-bold text-2xl pb-2">Address.</h2>
            <p className="pb-2">Address: 2, Jemide Avenue,
              <br />
              Giwa Amu Street, GRA, <br />
              Benin City, Edo state
            </p>
            <p><span className="font-bold">Phone: </span>+234 806 8939 461</p>
            <p><span className="font-bold">Email: </span>thewesternersgroup@gmail.com</p>
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
