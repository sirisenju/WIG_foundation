import React from "react";
import Footer from "../../components/Footer";

function Signup() {
  return (
    <>
     <section className="h-full w-full">
      <div className="w-[70%] h-screen mx-auto flex flex-row p-3 mb-4 mt-4 glass">
        <div className="w-1/2 h-full p-8">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full text-center pb-4 pt-8">
              <h1 className="text-3xl font-semibold">Create Your Account.</h1>
              <p className=" text-base font-medium">Signup today.</p>
            </div>
            <form action="" className="flex flex-col gap-3">
              <div className="block">
                <label htmlFor="firstname">First Name</label>
                <input
                  placeholder="enter your name"
                  className="w-full mt-2 py-2 px-2 rounded-lg"
                  type="text"
                />
              </div>
              <div className="block">
                <label htmlFor="lastname">Last Name</label>
                <input
                  placeholder="enter your last name"
                  className="w-full mt-2 py-2 px-2 rounded-lg"
                  type="text"
                />
              </div>
              <div className="block">
                <label htmlFor="email">Email Address</label>
                <input
                  placeholder="you@email.com"
                  className="w-full mt-2 py-2 px-2 rounded-lg"
                  type="text"
                />
              </div>

              <div className="flex gap-2 w-full">
                <div className="block w-full">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    placeholder="080 *** *** 57"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="block w-full">
                  <label htmlFor="role">Role</label>
                  <input
                    placeholder="enter your role"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <div className="block w-full">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="enter a strong password"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="block gap-2 w-full">
                  <label htmlFor="confirmPass">Confirm Password</label>
                  <input
                    placeholder="confirm passowrd"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <button className="py-2 mt-4 mb-4 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">Sign up</button>
            </form>
            <p className="text-center">Allready have an account? <span className=" hover:text-green-600"> <a href="#">Login here!</a></span></p>
          </div>
        </div>
        <div className="w-1/2 h-full">
            <img className="w-full h-full object-cover rounded-md " src="./assets/signup_bg.jpg" alt="" />
        </div>
      </div>
    </section>

    {/* footer component */}
    <Footer/>
    </>
  );
}

export default Signup;
