import { useEffect, useState } from "react";
import BtnPrimary from "../Buttons/BtnPrimary";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 4; // Total number of slides
  const transitionTime = 4000; // Transition time in milliseconds
  let slideInterval: number | undefined;

  useEffect(() => {
    // Auto change slide at intervals
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  console.log(currentSlide);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 1 ? slideLength : prevSlide - 1
  //   );
  // };

  return (
    <>
      
        <section className={` bg-[url('/img/hero-${currentSlide}.png')] bg-cover bg-center px-0 py-0   w-full  h-[45rem] overflow-hidden animate__animated  animate__fadeIn animate__delay-3`}>
          <div className=" px-[7%] h-full">
            <div className="  flex flex-col h-full    justify-center  pt-28 lg:w-[50%] w-full animate__animated  animate__fadeIn animate__delay-3">
              <p className=" uppercase tracking-widest text-white">
                Join Us in Making a Difference{" "}
              </p>
              <h3 className="xl:text-[4rem] lg:text-[3rem] text-3xl  font-bold xl:leading-[4.8rem] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
                Support Our Youth Growth Initiatives
              </h3>
              <p className="text-white mt-3">
                Your generosity fuels our mission of kindness and compassion.
                Join us in spreading hope and making a tangible difference in
                the lives of those in need.
              </p>
              <div className="mt-10">
                <BtnPrimary link="" color="">
                  Sponsor
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>
      
        {/* {currentSlide === 2 && (
        <section className=" bg-[url('/img/hero-2.png')] bg-cover bg-center px-0 py-0   w-full  h-[45rem] overflow-hidden animate__animated  animate__fadeIn animate__delay-3">
          <div className=" px-[7%] h-full">
            <div className="  flex flex-col h-full    justify-center  pt-28 lg:w-[50%] w-full animate__animated  animate__fadeIn animate__delay-3">
              <p className=" uppercase tracking-widest text-white">
                Join Us in Making a Difference{" "}
              </p>
              <h3 className="xl:text-[4rem] lg:text-[3rem] text-3xl  font-bold xl:leading-[4.8rem] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
                Support Our Youth Growth Initiatives
              </h3>
              <p className="text-white mt-3">
                Your generosity fuels our mission of kindness and compassion.
                Join us in spreading hope and making a tangible difference in
                the lives of those in need.
              </p>
              <div className="mt-10">
                <BtnPrimary link="" color="">
                  Sponsor
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>
      )}
        {currentSlide === 3 && (
        <section className=" bg-[url('/img/hero-3.png')] bg-cover bg-center px-0 py-0   w-full  h-[45rem] overflow-hidden animate__animated  animate__fadeIn animate__delay-3">
          <div className=" px-[7%] h-full">
            <div className="  flex flex-col h-full    justify-center  pt-28 lg:w-[50%] w-full animate__animated  animate__fadeIn animate__delay-3">
              <p className=" uppercase tracking-widest text-white">
                Join Us in Making a Difference{" "}
              </p>
              <h3 className="xl:text-[4rem] lg:text-[3rem] text-3xl  font-bold xl:leading-[4.8rem] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
                Support Our Youth Growth Initiatives
              </h3>
              <p className="text-white mt-3">
                Your generosity fuels our mission of kindness and compassion.
                Join us in spreading hope and making a tangible difference in
                the lives of those in need.
              </p>
              <div className="mt-10">
                <BtnPrimary link="" color="">
                  Sponsor
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>
      )}
        {currentSlide === 4 && (
        <section className=" bg-[url('/img/hero-4.png')] bg-cover bg-center px-0 py-0   w-full  h-[45rem] overflow-hidden animate__animated  animate__fadeIn animate__delay-3">
          <div className=" px-[7%] h-full">
            <div className="  flex flex-col h-full    justify-center  pt-28 lg:w-[50%] w-full animate__animated  animate__fadeIn animate__delay-3">
              <p className=" uppercase tracking-widest text-white">
                Join Us in Making a Difference{" "}
              </p>
              <h3 className="xl:text-[4rem] lg:text-[3rem] text-3xl  font-bold xl:leading-[4.8rem] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
                Support Our Youth Growth Initiatives
              </h3>
              <p className="text-white mt-3">
                Your generosity fuels our mission of kindness and compassion.
                Join us in spreading hope and making a tangible difference in
                the lives of those in need.
              </p>
              <div className="mt-10">
                <BtnPrimary link="" color="">
                  Sponsor
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>
      )} */}
    </>
  );
};

export default Banner;
