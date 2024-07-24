
import ProgramItem from "../ui/ProgramItem";
import { usePrograms } from "../../service/useProgram";
import { ProgramType } from "../types/program.types";
import BtnPrimary from "../Buttons/BtnPrimary";

const Programs = () => {
  const {programs} = usePrograms()

  console.log(programs)


  return (
    <section>
      <div className="flex justify-between items-center lg:flex-row flex-col gap-10 ">
        <div className=" w-full">
       
          <h3 className=" mt-3 lg:text-left text-center ">
          Our Featured Causes
          </h3>
        </div>

        <div className="">
        <BtnPrimary link="">
        View All Causes
          
        </BtnPrimary>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 mt-14 ">
        {programs?.map((program:ProgramType) => (
          <ProgramItem key={program.id} program={program} />
        ))}
      
      </div>

    </section>
  );
};

export default Programs;
 