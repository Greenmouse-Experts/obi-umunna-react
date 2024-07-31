import { useState } from "react";

import Modal from "../Modal";
import Form from "./Form";

import { BlogType } from "../types/program.types";
import BtnCta from "../Buttons/BtnCta";

const PostItem = ({ post }: { post: BlogType }) => {
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
        style={{ backgroundImage: `url(${post.image})` }}
        className="p-0 h-[30rem] bg-no-repeat bg-center bg-cover rounded-md place-content-end card-shadow"
      >
        <div className="bg-white p-5 flex flex-col gap-4 justify-end rounded-md mt-auto ">
          <p className="font-semibold">{post.title}</p>
          <p className="text-base">{post.description.slice(0, 60)}...</p>

          <div className="flex justify-between mt-2">
            {/* <button onClick={handleOpenDonor}>Read More</button> */}
            <BtnCta outline={true} link={`/blog/${post.id}`}>Read More</BtnCta>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenDonor} handleClose={handleCloseDonor}>
        <p className="text-black ">{post.description}</p>
      </Modal>
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        <Form />
      </Modal>
    </>
  );
};

export default PostItem;
