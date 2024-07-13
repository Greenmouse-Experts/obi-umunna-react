import Breadcrumb from "../components/ui/Breadcrumb";
import handsImg from "../data/img/aboutus-hands.png"; 
import { SetStateAction, useState } from "react";
import Button from "../components/ui/Button";
import aboutPageImage from "../data/img/aboutpage2.png";
import Form from "../components/ui/Form";




export default function AboutUsPage() {


  const [   activeButton, setActiveButton] = useState("mission");

  const handleButtonClick = (target: SetStateAction<string>) => {
    setActiveButton(target);
  };


  return (
    <div className="">
      <Breadcrumb
        backgroundImage="./src/data/img/aboutus.png"
        breadcrumbText="About Us"
      />
      <section className="flex flex-col justify-between px-5 lg:px-32 2xl:px-40 md:flex-row">
        <div className="flex w-full md:w-[40%] justify-center md:justify-start  items-center ">
          <img
            src={handsImg}
            alt="About Us Hands"
            className=" w-2/3   2xl:w-[60%] "
          />
        </div>

        <div className="flex flex-col w-full md:w-[60%]">
          <div className="my-4">
            <h3 className="text-lg font-semibold ">
              About Obi Umunna Na Umuada United
            </h3>
            <h1 className="font-bold text-2xl md:text-4xl lg:max-w-full  2xl:max-w-[70%]  ">
              Our Aim Is to Eradicate Poverty Worldwide
            </h1>
            <p className="text-base 2xl:text-lg  mt-2 md:mt-4 max-w-[80%] ">
              Join us in our mission to end poverty across the globe. Through
              sustainable initiatives and compassionate action, we're working
              tirelessly to create a future where every person has access to
              opportunity and dignity.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-x-2 ">
              <Button
                text="Our Mission"
                isActive={activeButton === "mission"}
                onClick={() => handleButtonClick("mission")}
                target="mission"
              />

              <Button
                text="Our Vision"
                isActive={activeButton === "vision"}
                onClick={() => handleButtonClick("vision")}
                target="vision"
              />
              <Button
                text="Our Impact"
                isActive={activeButton === "impact"}
                onClick={() => handleButtonClick("impact")}
                target="impact"
              />
            </div>
            <p
              id="mission"
              className={activeButton === "mission" ? "2xl:text-lg" : "hidden"}
            >
              Our mission is the heartbeat of our existence, the guiding star
              that illuminates our path. It embodies our purpose, our values,
              and our aspirations. With unwavering dedication, we strive to make
              a meaningful impact, to inspire positive change, and to leave a
              lasting legacy.
            </p>
            <p
              id="vision"
              className={activeButton === "vision" ? "" : "hidden"}
            >
              Our vision is to create a future where every individual has the
              opportunity to thrive, where innovation and creativity drive
              progress, and where our collective efforts contribute to a better
              world.
            </p>
            <p
              id="impact"
              className={activeButton === "impact" ? "" : "hidden"}
            >
              Our impact is measured by the lives we touch, the changes we
              inspire, and the legacy we leave behind. Through our initiatives,
              we aim to make a tangible difference in communities, environments,
              and lives across the globe.
            </p>
          </div>
        </div>
      </section>

      <section
        className=" flex flex-col md:flex-row bg-cover   text-white bg-center bg-no-repeat sm:px-20 py-24 lg:px-32 2xl:px-40 min-h-[300px]  md:min-h-[300px]"
        style={{ backgroundImage: `url(${aboutPageImage})` }}
      >
        <Form />
        <div className="flex">
          <h1> We Have Been Tackling Poverty In Communities To Build Better Lives</h1>

          <div className="grid">
            
          </div>
        </div>
       
      </section>
    </div>
  );
}