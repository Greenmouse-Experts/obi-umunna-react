import BtnPrimary from "../Buttons/BtnPrimary"


const Empower = () => {
  return (
    <section className="bg-[url('/img/empower.png')]">
        <div className="flex flex-col items-center gap-6 justify-center mx-auto text-center text-white lg:w-[60%] w-full ">
          <h3 className="">We Have Empowered Over 200+ Youths</h3>
          <p className=" lg:w-3/4">
          With your continued support, we'll reach even more communities, leaving a lasting legacy of compassion and change.
          </p>
          <BtnPrimary link="" color="">
            Sponsor
          </BtnPrimary>
        </div>
 

    </section>
  )
}

export default Empower