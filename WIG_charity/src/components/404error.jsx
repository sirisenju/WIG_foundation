import React from "react";
import Footer from "./Footer";
import HamburgerMenu from "./Hamburger";
import { NavLink, Link } from "react-router-dom";

const navlinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/causes", name: "Causes" },
  { id: 4, path: "/ourteam", name: "Our Team" },
  { id: 5, path: "/blog", name: "Blog" },
];

function ErrorPage() {
  return (
    <>
      <section className="w-full h-full bg-[#EDF7F5]">
        <div className="sm:pt-2 sm:block">
          <div className="w-full lg:w-[80%] text-white flex justify-between items-center h-14 mx-auto relative bg-footer_theme/[.80] sm:rounded-lg 2xl:max-w-7xl">
            <div className="pl-4">logo</div>
            <div className="block sm:hidden pr-4">
              <HamburgerMenu propData={navigation} />
            </div>
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
        <div className="min-h-screen sm:h-full p-14 flex justify-center items-center">
          <img className="object-cover" src="./assets/404.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPage;
