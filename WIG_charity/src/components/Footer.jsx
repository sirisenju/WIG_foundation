import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <section className="w-full h-full bg-footer_theme">
      <div className="w-full sm:w-[75%] h-[65%] pt-[5%] mx-auto 2xl:max-w-7xl">
        <div className="grid grid-flow-row place-content-center sm:place-content-start sm:grid-cols-4 sm:auto-cols-auto gap-5 auto-cols-max">
          <div className="text-center sm:text-start text-white">
            <h1 className="text-lg pb-2">WESTERNERS WORLDWIDE</h1>
            <p>
              Email: thewesternersgroup@gmail.com 
            </p>
            <p>
              Phone: +2348068939461 <br />+2348109088721 <br /> +2347062043171
            </p>
          </div>
          {/* fix this later for proper alignment */}
          <div className="text-center sm:text-start text-white md:place-self-center">
            <h3 className="text-lg pb-2">Quick Link</h3>
            <ul className="list-none">
              <li>Home</li>
              <li>About Us</li>
              <li>Causes</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-center sm:text-start text-white">
            <h3 className="text-lg pb-2">Contact Us</h3>
            <ul className="list-none">
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-center sm:text-start text-white">
            <h3 className="text-base pb-2">Address: 2, Jemide Avenue, Giwa Amu Street, GRA, Benin City,Edo state</h3>
            <h3 className="text-lg pb-3">Social Media</h3>
            <a href="">face</a>
            <a href="">twitter</a>
            <a href="">instagram</a>
          </div>
        </div>
        <div className="flex justify-center items-center h-12 border-t-[2px] text-white border-t-white mt-[5%]">
            <p>
                Designed by Siri @copyright 2020
            </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
