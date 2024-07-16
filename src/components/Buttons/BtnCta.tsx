import { ReactNode } from "react";

interface IBtnCta {
    children: ReactNode
}

const BtnCta = ({ children }: IBtnCta) => {
  return (
    <button className="  bg-colorPrimary btn-green text-white w-fit  px-10 py-2 font-medium btn  rounded-xl transition-all text-base flex items-center gap-3">
      {children}
    </button>
  );
};

export default BtnCta;
