import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="w-full h-full bg-footer_theme">
      <div className="w-full sm:w-[75%] h-[65%] pt-[5%] mx-auto 2xl:max-w-7xl">
        <div className="grid grid-flow-row place-content-center sm:place-content-start sm:grid-cols-4 sm:auto-cols-auto gap-5 auto-cols-max">
          <div className="text-center sm:text-start text-white p-1">
            <h1 className="text-lg pb-2">WESTERNERS WORLDWIDE</h1>
            <ul className="pt-2">
              <li className="flex items-center justify-center md:items-start md:justify-start gap-2 pt-2">
                <span>
                  <FaEnvelope size={18}/>
                </span>
                thewesternersgroup@gmail.com
              </li>
              <li className="flex items-center justify-center sm:items-start sm:justify-start gap-2 pt-2">
                <span>
                  <FaPhone size={18} />
                </span>
                +234 806 8939 461
              </li>
              <li className="flex items-center justify-center sm:items-start sm:justify-start gap-2 pt-2">
                <span>
                  <FaPhone size={18} />
                </span>
                +234 810 9088 721
              </li>
              <li className="flex items-center justify-center sm:items-start sm:justify-start gap-2 pt-2">
                <span>
                  <FaPhone size={18} />
                </span>
                +234 706 2043 171
              </li>
            </ul>
          </div>
          {/* fix this later for proper alignment */}
          <div className="text-center sm:text-start text-white flex justify-center p-1">
            <div>
              <h3 className="text-lg pb-2">Quick Link</h3>
              <ul className="list-none">
                <Link>
                <li className="hover:scale-110 hover:translate-y-1 duration-300">Home</li>
                </Link>
                <Link>
                <li className="hover:scale-110 hover:translate-y-1 duration-300">About Us</li>
                </Link>
                <Link>
                <li className="hover:scale-110 hover:translate-y-1 duration-300">Causes</li>
                </Link>
                <Link>
                <li className="hover:scale-110 hover:translate-y-1 duration-300">Blog</li>
                </Link>
               
              </ul>
            </div>
          </div>
          <div className="text-center sm:text-start text-white flex justify-center p-1">
            <div>
              <h3 className="text-lg pb-2">Contact Us</h3>
              <ul className="list-none">
                <Link to={"/ourteam"}>
                  <li className="hover:scale-110 hover:translate-y-1 duration-300">Our Team</li>
                </Link>
                <Link>
                  <li className="hover:scale-110 hover:translate-y-1 duration-300">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-center sm:text-start text-white p-1">
            <h3 className="text-base pb-3">
              Address: 2, Jemide Avenue,
              <br />
              Giwa Amu Street, GRA, <br />
              Benin City, Edo state
            </h3>
            <h3 className="text-lg pb-2">Social Media</h3>
            <div className="w-full flex items-center justify-center sm:items-start sm:justify-start gap-2">
              <a href="">
                <FaFacebookSquare size={25} />
              </a>
              <a href="">
                <FaTwitterSquare size={25} />
              </a>
              <a href="">
                <FaInstagramSquare size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-12 border-t-[2px] text-white border-t-white mt-[5%]">
          <p>Designed by Siri @copyright 2020</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
