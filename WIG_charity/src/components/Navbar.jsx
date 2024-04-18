import React from "react";
import HamburgerMenu from "./Hamburger";

function Navbar() {
  return (
    <section className="w-full h-full">
      <div id="hero">
        <div id="tra">
        <HamburgerMenu/>
        <div className="w-full sm:w-[80%] mt-4 text-white hidden flex justify-between items-center h-12 mx-auto relative">
        <div className=" pl-4">logo</div>
        <nav className="w-[40%]">
          <ul className="list-none flex justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Causes</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="flex gap-2 px-4">
          <button className="bg-green-400 px-6 py-2">Login</button>
          <button className="bg-green-400 px-6 py-2">Sign Up</button>
        </div>
      </div>
        </div>
        <div id="con" className="text-center w-full p-2">
          <p className="pb-2 tracking-wider text-lg">Give Hope To The Homeless.</p>
          <h1 className="text-5xl pt-3 pb-3">Helping each other <br /> can make the world better</h1>
          <p className="tracking-wider text-lg">We Seek out world changers and difference makers around the
            globe,and equip them to fulfill their unique purpose.
          </p>
          <div className="flex gap-4 justify-center mt-5">
          <button className="bg-green-400 px-5 py-2">Donate Now!</button>
          <button className="bg-green-400 px-5 py-2">Contact Us</button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
