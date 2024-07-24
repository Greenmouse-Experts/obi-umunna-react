import { useState, useEffect } from "react";

import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full text-base font-montserrat transition-all ${
        isScrolled ? "bg-[#1f1f1f] shadow-md " : "bg-transparent"
      }`}
    >
      <div className="flex px-[7%] py-5 justify-between items-center">
        <NavLink to="/" className="w-56">
          <img src="/logo-white.png" alt="logo" className="" />
        </NavLink>
        <div
          className={`flex md:flex xl:flex-row md:px-0 md:py-0 flex-col 2xl:gap-[53px] fixed z-40 w-[24rem] h-screen xl:w-fit xl:h-auto md:items-center py-5 gap-[25px] px-5 ${
            menu ? "left-0 top-[0rem] bg-white" : "left-[-1000px] top-[0rem]"
          } left-0 unset transition-all`}
        >
          <nav className="w-full scroll lg:text-[1rem] xl:text-white text-black">
            <ul className="flex flex-col items-start gap-5 pt-3 pl-10 md:flex xl:flex-row xl:gap-14 xl:items-center xl:pt-0 xl:pl-0 sm:pl-20">
              <li className="">
                <NavLink
                  onClick={() => setMenu(false)}
                  className="w-full"
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li
                className="relative flex flex-col items-start justify-center"
               
              >
                <p
                  className=" text-base  py-2  cursor-pointer flex items-center gap-2 text-nowrap"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  About Us{" "}
                  <span>
                 { <MdKeyboardArrowDown/>}
                  </span>
                </p>
                <div
                    className={` py-3 absolute w-[18rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all   ${
                      open ? "top-10" : "-top-96"
                    }`}
                  >
                    <NavLink
                      className=" py-3 px-2 w-full flex items-center  gap-4 text-center group text-black text-base text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300 "
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setMenu(false);
                      }}
                      to="/about"
                    >
                      <span>
                        <FaUser
                          size={25}
                          className="text-colorPrimary group-hover:text-white"
                        />
                      </span>
                     About Us
                    </NavLink>
                    
                    <NavLink
                      className=" py-3 px-2 w-full flex items-center  gap-4 text-center group text-black text-base text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setMenu(false);
                      }}
                      to="/excos"
                    >
                      <span>
                        <RiTeamLine
                          size={25}
                          className="text-colorPrimary group-hover:text-white"
                        />
                      </span>
                      Excos / Leadership
                    </NavLink>
                  </div>
                  <div
                    className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all ${
                      open ? "flex" : "hidden"
                    }`}
                  >
                    <NavLink
                      className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary  font-medium text-nowrap "
                      onClick={() => {
                        setMenu(false);
                      }}
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  
                    <NavLink
                      className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary  font-medium text-nowrap"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to="/excos"
                    >
                      Excos / Leadership
                    </NavLink>
                  </div>

              </li>
              <li className="relative">
                <NavLink
                  onClick={() => setMenu(false)}
                  className="text-nowrap"
                  to="/programs"
                >
                  Programs
                </NavLink>
              </li>
              <li className="relative">
                <NavLink onClick={() => setMenu(false)} className="" to="/">
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMenu(false)} className="" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <NavLink
              to=""
              className="!px-6 py-3 text-sm text-white bg-colorPrimary text-nowrap btn btn-green 2xl:"
            >
              Become a Sponsor
            </NavLink>
            <NavLink
              to=""
              className="!px-6 py-3 text-sm text-white bg-colorPrimary text-nowrap btn btn-green 2xl:"
            >
              Apply For A skill
            </NavLink>
          </div>
        </div>
        <div
          className="block cursor-pointer 2xl:hidden xl:hidden"
          onClick={() => setMenu((open) => !open)}
        >
          <GiHamburgerMenu size={40} color="#015907" />
        </div>
      </div>
    </header>
  );
}

export default Header;
