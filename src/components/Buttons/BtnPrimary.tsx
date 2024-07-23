import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface IBtn {
  color?: string;
  link: string;
  icon?: boolean;
  children: ReactNode;
}

function BtnPrimary({  link, icon, children }: IBtn) {
  return (
    <NavLink
      to={link}
      className={`
        
           bg-colorPrimary btn-green text-white
        
       w-fit  font-medium btn  transition-all text-lg flex items-center gap-3`}
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
