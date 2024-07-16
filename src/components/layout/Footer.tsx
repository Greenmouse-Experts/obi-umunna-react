import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#141414] pt-[4rem] ">
      <div className="grid grid-cols-4 md:justify-between justify-center items-start  md:gap-0 gap-10 ">
        <div className=" relative h-full ">
          <img
            src="/img/footer-img.png"
            alt=""
            className=" absolute -bottom-[5rem] left-0 z-50 "
          />
         
        </div>

        <div className="mx-auto text-white">
          <p className="  text-white uppercase font-semibold">
            Quick links
          </p>
          <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
            <li className="   capitalize">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Excos / Leadership</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Membership Criteria</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Gallery</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Events</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Upcoming Events</NavLink>
            </li>
          </ul>
        </div>

        <div className="mx-auto text-white">
          <p className="  text-white uppercase font-semibold">
          Learn More
          </p>
          <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
            <li className="   capitalize">
              <NavLink to="/">Upcoming Events</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/">Past Events</NavLink>
            </li>
            {/* <li className="   capitalize">
                <NavLink to="">help</NavLink>
              </li> */}
            <li className="   capitalize">
              <NavLink to="/">Contact Us</NavLink>
            </li>
            <li className="   capitalize">
              <NavLink to="/contact">contact us</NavLink>
            </li>
          </ul>
        </div>
      

      <div className="bg-white rounded-xl p-4 py-10">
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
      </div>
      </div>

      <div className=" flex justify-center items-center 2xl:py-10 py-6 border-t-[0.7px] border-grayPrimary mt-16 text-white">
        <p className="2xl:text-base text-sm font-pSans px-1 text-center">
         Copyright  &copy;  2024 . All Rights Reserved
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
