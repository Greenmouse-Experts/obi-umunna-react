import BtnPrimary from "../Buttons/BtnPrimary";

const Donate = () => {
  return (
    <section className="grid grid-cols-2 items-center bg-[url('/img/donate-bg.png')] text-white">
      <div className=" w-full">
        <p className="text-xl font-semibold">Donate</p>
        <h4 className=" font-semibold font-syne mt-5 ">
          We Have Helped Over 200 Vulnerable Communities
        </h4>
        <p className=" mt-5">
          With your continued support, we'll reach even more communities,
          leaving a lasting legacy of compassion and change.
        </p>

        <div></div>
        <div>
          <BtnPrimary link="" color="">
            Donate Now
          </BtnPrimary>
        </div>
      </div>

      <div className="relative h-full">
        <img src="/img/donate.png" alt=" " className="  2xl:scale-75 scale-[0.6] absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2  object-cover object-center" />
      </div>
    </section>
  );
};

export default Donate;
