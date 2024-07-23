import { FaCircleArrowRight } from "react-icons/fa6";

const Donate = () => {
  return (
    <section className="">
      <div className="grid grid-cols-3 gap-10">
        <div className="bg-[#E9F6F2] px-3 py-8 flex gap-3 rounded-[10px] relative">
          <div className="bg-greenPrimary rounded-md py-2 px-6 place-content-center">
            <img src="/img/volunteer.png" alt="" />
          </div>
          <div>
            <h6>Become a Sponsor</h6>
            <p className="mt-3">
              The foundation stone of this Great body was laid in Stuttgart on
            </p>
          </div>
          <FaCircleArrowRight
            className="absolute bottom-4 right-4"
            size={25}
            color="#0B6F4F"
          />
        </div>

        <div className="bg-[#EAE7F5] px-3 py-8 flex gap-3 rounded-[10px] relative">
          <div className=" bg-colorPrimary rounded-md py-2 px-6 place-content-center">
            <img src="/img/skill.png" alt="" />
          </div>
          <div>
            <h6>Apply For Skill</h6>
            <p className="mt-3">
              The foundation stone of this Great body was laid in Stuttgart on
            </p>
          </div>
          <FaCircleArrowRight className="absolute bottom-4 right-4" size={25} color="#2708A5" />
        </div>

        <div className="bg-[#F8EADE] px-3 py-8 flex gap-3 rounded-[10px] relative">
          <div className=" bg-[#A4764C] rounded-md py-2 px-6 place-content-center">
            <img src="/img/youth.png" alt="" />
          </div>
          <div>
            <h6>Youth Empowerment</h6>
            <p className="mt-3">
              The foundation stone of this Great body was laid in Stuttgart on
            </p>
          </div>
          <FaCircleArrowRight className="absolute bottom-4 right-4" size={25} color="#A4764C" />
        </div>
      </div>
    </section>
  );
};

export default Donate;
