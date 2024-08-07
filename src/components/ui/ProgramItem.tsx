import { useState } from "react";
import BtnCta from "../Buttons/BtnCta";
import Modal from "../Modal";
import Form from "./Form";
// import DonorForm from "./DonorForm";
import ViewMore from "./ViewMore";
// import { NavLink } from "react-router-dom";
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
        className="p-0 h-[34rem] bg-no-repeat bg-center bg-cover rounded-md place-content-end card-shadow w-full"
      >
        <div className="bg-white p-5 flex flex-col gap-4 justify-end rounded-md mt-auto ">
         <div>
         <p className="font-semibold">{program.name}</p> 
         
         <div className="bg-gray-300 w-full rounded-3xl overflow-hidden h-[7px] mt-4">
                <div className="bg-green-600 w-2/3 h-full rounded-3xl"></div>
              </div>
        <div className="flex justify-between">
        <p className="font-semibold">{formatAsNgnMoney(program.budgetAmount)}</p>
        <p>75%</p>
        </div>
         </div>
          <p className="text-base">
            {program.description.slice(0, 50)}...{" "}
            {/* <NavLink to={`/program/${program.id}`}>
              <span className="font-semibold text-lg cursor-pointer">Read More</span>
            </NavLink> */}
          </p>

          <div className="flex flex-col justify-between gap-4 items-center mt-2">
          <BtnCta link={`/program/${program.id}`} styles={{width:"100%", textAlign:"center", display:"block", }}>Read More</BtnCta >
            <BtnCta link="/sponsor" styles={{width:"100%", textAlign:"center", display:"block", backgroundColor:'#2708A5'  }}>Sponsor</BtnCta >
            
            <BtnCta  styles={{width:"100%", textAlign:"center", display:"block",  backgroundColor:'#0B6F4F'  }} link="/apply">
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
