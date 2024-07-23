import BtnCta from "../Buttons/BtnCta";

interface ProgramType {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  requirements: string;
  supportBanner: string;
  budgetAmount: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

const ProgramItem = ({program}:{program:ProgramType}) => {
  return (
    <div style={{ backgroundImage: `url(${program.supportBanner})` }} className="p-0 h-[30rem] bg-no-repeat bg-center bg-cover rounded-md place-content-end card-shadow">
      <div className="bg-white p-5 flex flex-col gap-4 justify-end rounded-md mt-auto ">
        <p className="font-semibold">{program.name}</p>
        <p className="text-base">
          {program.description.slice(0, 60)}
        </p>

     <div className="flex justify-between mt-2">
     <BtnCta>Sponsor</BtnCta>
     <BtnCta outline={true}>Register</BtnCta>
     </div>
      </div>
    </div>
  );
};

export default ProgramItem;
