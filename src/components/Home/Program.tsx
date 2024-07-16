import { IoArrowForwardCircleOutline } from "react-icons/io5";
import ProgramItem from "../ui/ProgramItem";

const Programs = () => {
  return (
    <section>
      <div className="flex justify-between  items-center lg:flex-row flex-col ">
        <div className="lg:w-[30%] w-full">
          <p className="text-xl font-semibold">Latest Programs</p>
          <h4 className=" font-semibold font-syne mt-3 ">
            Explore Our Programs
          </h4>
        </div>

        <div className="lg:w-[60%] w-full pl-5 border-l-[4px] border-[#0B6E4F]">
          <p>
            Explore our cases with a purpose, knowing that your choice not only
            protects your device but also extends a helping hand to those in
            need.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8 mt-20 ">
        <ProgramItem />
        <ProgramItem />
        <ProgramItem />
      </div>

      <div className=" text-center mt-10 w-full ">
        <p className=" flex items-center justify-center gap-2 cursor-pointer">Give a helping hand ? <span className=" text-colorPrimary underline ">View All Cause</span> <span><IoArrowForwardCircleOutline color="#2708A5" size={20} /></span></p>
      </div>
    </section>
  );
};

export default Programs;
 