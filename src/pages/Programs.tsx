import { ProgramType } from "../components/types/program.types";
import Breadcrumb from "../components/ui/Breadcrumb";
import LoaderBig from "../components/ui/LoaderBig";
import ProgramItem from "../components/ui/ProgramItem";
import { usePrograms } from "../service/useProgram";

const Programs = () => {
  const { programs, isLoading } = usePrograms();
 
  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Programs"
      />
{
   isLoading ? <LoaderBig/> :     <section>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 mt-8 ">
          
          {programs?.map((program: ProgramType) => (
            <ProgramItem key={program.id} program={program} />
          ))}
        </div>
      </section>}
    </>
  );
};

export default Programs;
