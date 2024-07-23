import {  BsSendFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#141414] py-[3rem] ">
      <div className="flex justify-between items-center lg:flex-row flex-col  md:gap-0 gap-10 ">
        <div className=" h-full flex flex-col items-center lg:w-[26%]">
          <img
            src="/img/logo-plain.png"
            alt=""
            className="  "
          />
         <p className="text-lg text-white font-semibold">Join Our Community</p>
         <div className="flex items-center h-12 mt-4 gap-3 w-full">
          <input type="text" placeholder="Enter email " className="h-full w-full  rounded-lg pl-3"/>
          <div className="bg-colorPrimary  px-5 h-full rounded-lg place-items-center place-content-center"><BsSendFill color="white"size={30}/></div>
         </div>
        </div>

        <div className=" text-white">
          <ul className="flex flex-wrap gap-10  mt-5">
            <li className="   capitalize">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Program</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">FAQ</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Contact Us</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Become a Sponsor</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Apply for  a Skill</NavLink>
            </li>
          </ul>
        </div>


        {/* <div className="bg-white rounded-xl p-4 py-10">
          <h6>Newsletter</h6>
          <div className="mt-3">
            <p>Subscribe to our newsletter for latest update</p>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-2 border bg-[#F4F4F4] rounded-lg placeholder:text-sm placeholder:italic"
            />
          </div>
          <button className="rounded-3xl bg-colorPrimary w-full py-3 mt-5 text-white font-medium">
            Subscribe
          </button>
        </div>  */}
      </div>

    
    </footer>
    <div className=" flex justify-center items-center py-6  text-white bg-[#2708A5]">
        <p className="2xl:text-base text-sm font-pSans px-1 text-center">
        Copyright © 2024Obiumunna na umuada . All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
