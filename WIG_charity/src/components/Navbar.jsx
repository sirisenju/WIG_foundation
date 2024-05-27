import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import styles from '../CSS/Styledhero.module.css';
import navigation from "../../lib/navigationCtr";
import { useState } from "react";
import DonateModel from "./DonateModel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const navlinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/causes", name: "Causes" },
  { id: 4, path: "/ourteam", name: "Our Team" },
  { id: 5, path: "/blog", name: "Blog" },
];

function Navbar(props) {

  const heroStyle = props.variant === 'primary' ? styles.heroBgPrimary : styles.heroBg;

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <section className="h-full w-full">
        <div className={heroStyle}>
          <div className="sm:pt-2 sm:block">
            <div className="w-full lg:w-[80%] text-white flex justify-between items-center h-14 mx-auto relative bg-footer_theme/[.80] sm:rounded-lg 2xl:max-w-7xl">
              <div className="pl-4">logo</div>
              <div className="block sm:hidden pr-4"><HamburgerMenu propData={navigation}/></div>
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
          <div className="flex max-w-3xl h-full items-center justify-center mx-auto pb-10">
            <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine" className="text-center w-full">
              <p className="pb-2 tracking-wider text-lg">
                {props.intro}
              </p>
              <h1 className="text-5xl pt-3 pb-3">
                {props.heading}
              </h1>
              <p className="tracking-wider text-lg">
                {props.paragraph}
              </p>
              <div className="flex gap-4 justify-center mt-5">
                <button className="bg-green-600 px-5 py-2" onClick={openModal}>Donate Now!</button>
                <Link to={"/causes"}>
                  <button className="border-2 border-green-600 hover:bg-green-600 px-5 py-2">Contact Us</button>
                </Link>
              </div>
              <div className="w-full h-full">
                <DonateModel isVisible={isModalVisible} onClose={closeModal}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
