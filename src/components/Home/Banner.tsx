import { useEffect, useState } from "react";
import BtnPrimary from "../Buttons/BtnPrimary";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 3; // Total number of slides
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

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 1 ? slideLength : prevSlide - 1
  //   );
  // };

  return (
    <section className=" bg-greenPrimary  px-0 py-0   w-full relative grid grid-cols-2 grid-row-1 h-[45rem] overflow-hidden ">
      <div className="  flex flex-col h-fit    justify-start pl-[15%] pt-20 w-[80%] animate__animated  animate__fadeIn animate__delay-3">
        <h3 className="2xl:text-[3rem] lg:text-[3rem] text-3xl  font-bold 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
          Support Our Charity Efforts Today!
        </h3>
        <p className="text-white mt-3">
          Your generosity fuels our mission of kindness and compassion. Join us
          in spreading hope and making a tangible difference in the lives of
          those in need.
        </p>
        <BtnPrimary link="" color="">
          Sponsor a Cause
        </BtnPrimary>
      </div>
      <div className="w-full h-full">
      {currentSlide === 1 && ( <img src={`/img/hero-1.png`} alt=" "  className="w-full object-cover h-full object-bottom animate__animated  animate__fadeIn animate__delay-3"/>)}
      {currentSlide === 2 && ( <img src={`/img/hero-2.png`} alt=" "  className="w-full object-cover h-full object-bottom animate__animated  animate__fadeIn animate__delay-3"/>)}
      {currentSlide === 3 && ( <img src={`/img/hero-3.png`} alt=" "  className="w-full object-cover h-full object-bottom animate__animated  animate__fadeIn animate__delay-3"/>)}
      </div>
      <img src={`/img/hero-small-${currentSlide}.png`} className="animate__animated  animate__fadeIn animate__delay-3 absolute  top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:scale-[0.8] scale-50" />
      <img src="/img/curves.svg" className="absolute bottom-0 w-full right-0" />
    </section>
  );
};

export default Banner;
