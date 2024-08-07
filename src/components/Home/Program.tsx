import ProgramItem from "../ui/ProgramItem";
import { usePrograms } from "../../service/useProgram";
import { ProgramType } from "../types/program.types";
import BtnPrimary from "../Buttons/BtnPrimary";
import Slider from "react-slick";
import { programSettings } from "../../helpers/settings";

const Programs = () => {
  const { programs } = usePrograms();

  return (
    <section>
      <div className="flex justify-between items-center lg:flex-row flex-col gap-10 ">
        <div className=" w-full">
          <h3 className=" mt-3 lg:text-left text-center ">
            Our Featured Causes
          </h3>
        </div>

        <div className="">
          <BtnPrimary link="/programs">View All Causes</BtnPrimary>
        </div>
      </div>
      <div className="mt-14 ">
        <Slider {...programSettings}>
          {programs?.map((program: ProgramType) => (
            <ProgramItem key={program.id} program={program} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Programs;
