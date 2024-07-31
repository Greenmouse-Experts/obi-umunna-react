import { useState } from "react";
import BtnCta from "../Buttons/BtnCta";
import Modal from "../Modal";
import Form from "./Form";
// import DonorForm from "./DonorForm";
import ViewMore from "./ViewMore";
import { NavLink } from "react-router-dom";
import { formatAsNgnMoney } from "../utils/helpers";

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

const ProgramItem = ({ program }: { program: ProgramType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isOpenDonor, setisOpenDonor] = useState(false); // State for modal

  // const handleOpenDonor = () => {
  //   setisOpenDonor(true);
  // };

  const handleCloseDonor = () => {
    setisOpenDonor(false);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${program.supportBanner})` }}
        className="p-0 h-[30rem] bg-no-repeat bg-center bg-cover rounded-md place-content-end card-shadow w-full"
      >
        <div className="bg-white p-5 flex flex-col gap-4 justify-end rounded-md mt-auto ">
         <div>
         <p className="font-semibold">{program.name}</p> 
         <p className="font-semibold">{formatAsNgnMoney(program.budgetAmount)}</p>
         </div>
          <p className="text-base">
            {program.description.slice(0, 60)}...{" "}
            <NavLink to={`/program/${program.id}`}>
              <span className="font-semibold text-lg cursor-pointer">Read More</span>
            </NavLink>
          </p>

          <div className="flex justify-between mt-2">
            <BtnCta link="/sponsor">Sponsor</BtnCta>
            
            <BtnCta outline={true} link="/apply">
              Register
            </BtnCta>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenDonor} handleClose={handleCloseDonor}>
        <ViewMore program={program} />
      </Modal>
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        <Form />
      </Modal>
    </>
  );
};

export default ProgramItem;
