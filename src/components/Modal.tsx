// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md"; // Importing a close icon from react-icons

interface ModalComponentProps {
  isOpen: boolean;
  handleClose: () => void;

  children: React.ReactNode;
}

const Modal: React.FC<ModalComponentProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  return (
    <Dialog
      open={isOpen}
      handler={handleClose}
      className="overflow-y-scroll max-h-[95vh] relative"
    >
      <DialogHeader className="flex justify-between items-center relative ">

        <span className=" absolute right-5 top-3"  onClick={handleClose}>
          <MdClose className="h-5 w-5  " />
        </span>
      </DialogHeader>
      <DialogBody className="bg-white">{children}</DialogBody>
    </Dialog>
  );
};

export default Modal;
