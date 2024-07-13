import { FiCheckCircle } from "react-icons/fi";
import BtnPrimary from "../Buttons/BtnPrimary";

const AboutUs = () => {
  return (
    <section>
      <div className="grid grid-cols-2 items-center">
        <div className="">
            <img src="/img/about-home.png" alt="" className="  scale-90" />
        </div>
        <div className=" w-full">
          <p className="text-xl font-semibold">About Us</p>
          <h4 className=" font-semibold font-syne text-black">
            Our Aim Is to Eradicate Poverty Worldwide
          </h4>
          <p className=" mt-3">
            Join us in our mission to end poverty across the globe. Through
            sustainable initiatives and compassionate action, we're working
            tirelessly to create a future where every person has access to
            opportunity and dignity.
          </p>
          <div className="flex gap-7 flex-wrap">
            <div>
                <p className="flex items-center gap-5 mt-4"><span><FiCheckCircle color="#A47449" /></span>Food & Water Charity</p>
                <p className="flex items-center gap-5 mt-4"><span><FiCheckCircle color="#A47449" /></span>Make Donation</p>
                <p className="flex items-center gap-5 mt-4"><span><FiCheckCircle color="#A47449" /></span>Send a Gift to Everyone</p>
            </div>
            <div>
                <p className="flex items-center gap-5 mt-4"><span><FiCheckCircle color="#A47449" /></span>Education For Children</p>
                <p className="flex items-center gap-5 mt-4"><span><FiCheckCircle color="#A47449" /></span>Become  a Volunteer</p>
             
            </div>
          </div>
         <div>

         </div>
          <div>
            <BtnPrimary icon={true} link="" color="">
              Learn More
            </BtnPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
