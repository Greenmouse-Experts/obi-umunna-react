
import BtnCta from "../Buttons/BtnCta";
import { MdOutlineAccessTime } from "react-icons/md";
import { formatDate } from "../utils/helpers";

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

const ProgramItem2 = ({ program }: { program: ProgramType }) => {
    const today = new Date();
    const date = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
  return (
    <div className="card-shadow">
      <div className="pr-5">
        <img
          src={program.supportBanner}
          alt=""
          className="h-60 w-full object-cover object-center rounded-ee-[10rem] "
        />
      </div>
      <div className=" bg-white p-8">
        <div className="flex items-center gap-5 ">
        <div className="flex flex-col bg-black text-base text-white divide-y divide-white justify-center items-center p-1 px-2">
      <span>{date}</span>
      <span>{month}</span>
    </div>
          <div>
            <p className="font-semibold">{program.name}</p>
            <div className="flex gap-2">
              <p>Start Date:</p>
              <p className="flex items-center text-base gap-3">
                {" "}
                <span>
                  <MdOutlineAccessTime />
                </span>
                {formatDate(program.startDate)}
              </p>
            </div>
            <div className="flex gap-2">
              <p>End Date:</p>
              <p className="flex items-center text-base gap-3">
                {" "}
                <span>
                  <MdOutlineAccessTime />
                </span>
                {formatDate(program.endDate)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-base mt-4">
          {program.description}
        </p>
        <div className="flex justify-between mt-5">
          <BtnCta >Sponsor</BtnCta>
          <BtnCta >Register</BtnCta>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem2;
