import React from "react";
import HamburgerMenu from "./Hamburger";
import { Link, NavLink } from "react-router-dom";


const navlinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/causes", name: "Causes" },
  { id: 4, path: "/ourteam", name: "Our Team" },
  { id: 5, path: "/blog", name: "Blog" },
]

function Navbar() {
  return (
    <section className="w-full h-full">
      <div className="background-container">
        <div id="hero">
          <div id="tra">
            <HamburgerMenu />
            <div className="w-full sm:w-[80%] mt-4 text-white flex justify-between items-center h-14 mx-auto relative bg-footer_theme/[.80] rounded-lg">
              <div className="pl-4">logo</div>
              <nav className="max-w-xl hidden sm:block">
                <ul className="list-none flex gap-14">
                  {navlinks.map((item) => (
                    <li key={item.id} className="text-base hover:underline">
                      <NavLink to={item.path} className={({ isActive }) => (isActive ? "text-green-400 text-base font-bold" : " ")}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex gap-2 px-2">
              <Link to={"/login"}><button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                  Login
                </button></Link>
                
                <Link to={"/signup"}>
                  <button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div id="con" className="text-center w-full p-2">
            <p className="pb-2 tracking-wider text-lg">
              Give Hope To The Homeless.
            </p>
            <h1 className="text-5xl pt-3 pb-3">
              Helping each other <br /> can make the world better
            </h1>
            <p className="tracking-wider text-lg">
              We Seek out world changers and difference makers around the
              globe,and equip them to fulfill their unique purpose.
            </p>
            <div className="flex gap-4 justify-center mt-5">
              <button className="bg-green-400 px-5 py-2">Donate Now!</button>
              <button className="bg-green-400 px-5 py-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
