
import BtnPrimary from "../Buttons/BtnPrimary";

const AboutUs = () => {
  return (
    <section>
      <div className="flex lg:flex-row flex-col  items-center justify-between">
        <div className="lg:w-[50%] w-full">
          <p className=" uppercase font-semibold text-greenPrimary">About Us</p>
          <h3 className=" font-semibold font-syne text-black">
            Our Aim Is to Empower <br /> Youths in Eastern Nigeria
          </h3>
          <p className=" mt-3">
            Join us in our mission to end poverty across the globe. Through
            sustainable initiatives and compassionate action, we're working
            tirelessly to create a future where every person has access to
            opportunity and dignity.
          </p>

          <div></div>
          <div className="mt-5">
            <BtnPrimary icon={false} link="" color="">
              Read More
            </BtnPrimary>
          </div>
        </div>
        <div className="">
          <img src="/img/about-home.png" alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
