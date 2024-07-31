import { formatAsNgnMoney, formatDate } from "../utils/helpers";

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

const ViewMore = ({program}:{program:ProgramType}) => {
    console.log(program)
  return (
    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 text-black">
      <div>
        <p className="font-semibold">Program  Name </p>
        <p>{program.name}</p>
      </div>
     
      <div>
        <p className="font-semibold">Start Date</p>
        <p> {formatDate(program.startDate)}</p>
      </div>
      <div>
        <p className="font-semibold">End Date</p>
        <p> {formatDate(program.endDate)}</p>
      </div>
      <div>
        <p className="font-semibold">Budget Amount</p>
        <p> {formatAsNgnMoney(program.budgetAmount)}</p>
      </div>
      <div className="col-span-2">
        <p className="font-semibold">Requirement  Name </p>
        <p>{program.requirements}</p>
      </div>
    </div>
  )
}

export default ViewMore