import { ReactNode } from "react";

interface IBtnCta {
    children: ReactNode;
    outline?:boolean
}

const BtnCta = ({ children,outline }: IBtnCta) => {
  return (
    <button className={`${outline ? "border-2 border-colorPrimary text-black" :"text-white bg-colorPrimary "} btn-green  w-fit  !px-8 !py-1 font-medium btn  rounded-xl transition-all text-base flex items-center gap-3`}>
      {children}
    </button>
  );
};

export default BtnCta;
