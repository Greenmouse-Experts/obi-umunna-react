import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IBtnCta {
    children: ReactNode;
    outline?:boolean
    link:string
    styles?:object
}

const BtnCta = ({ children,outline, link, styles }: IBtnCta) => {
  return (
    <NavLink to={`${link}`} style={{...styles}} className={`${outline ? "border-2 border-colorPrimary place-items-center bg-white text-black" :"text-white bg-colorPrimary "} btn-green  w-fit  !px-8 !py-1 font-medium btn  rounded-xl transition-all text-base flex items-center gap-3`}>
      {children}
    </NavLink>
  );
};

export default BtnCta;
