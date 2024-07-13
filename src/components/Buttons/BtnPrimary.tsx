import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface IBtn {
  color?: string;
  link: string;
  icon?: boolean;
  children: ReactNode;
}

function BtnPrimary({ color, link, icon, children }: IBtn) {
  return (
    <NavLink
      to={link}
      className={`
        
           bg-colorPrimary btn-green text-white
        
       w-fit mt-10 px-10 py-3 font-medium btn  rounded-xl transition-all text-lg flex items-center gap-3`}
    >
      {children}
      {icon && (
        <span>
          <MdArrowOutward size={20} />
        </span>
      )}
    </NavLink>
  );
}

export default BtnPrimary;
