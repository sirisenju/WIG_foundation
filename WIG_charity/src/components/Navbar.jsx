import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./Hamburger";

const navlinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/causes", name: "Causes" },
  { id: 4, path: "/ourteam", name: "Our Team" },
  { id: 5, path: "/dashboard", name: "Blog" },
];

function Navbar() {
  const backgroundStyle = {
    backgroundImage: "url('./assets/schoolkidsss.jpg')",
    height: "100%",
    width: "100%", // Full viewport height
    backgroundSize: "cover", // Cover the entire container
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Do not repeat the image
  };

  return (
    <>
      <section className="h-full w-full">
        <div className="hero-bg">
          <div className="sm:pt-2 sm:block">
            <div className="w-full lg:w-[80%] text-white flex justify-between items-center h-14 mx-auto relative bg-footer_theme/[.80] sm:rounded-lg">
              <div className="pl-4">logo</div>
              <div className="block sm:hidden pr-4"><HamburgerMenu/></div>
              <nav className="max-w-xl hidden sm:block pr-4 lg:pr-0">
                <ul className="list-none flex gap-14">
                  {navlinks.map((item) => (
                    <li key={item.id} className="text-base hover:underline">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "text-green-400 text-base font-bold" : " "
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="gap-2 px-2 hidden md:flex">
                <Link to={"/login"}>
                  <button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center w-full p-2 pt-[20%] sm:pt-[120px]">
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
      </section>
    </>
  );
}

export default Navbar;
