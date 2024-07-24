import { useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface AccodionProps {
  title: string;
  answer: string | JSX.Element;
  open: boolean;
  toggleAccordion: (index: number) => void;
  index: number;
  from?: string;
}

const FaqAccordion = ({ index, title, answer, open, toggleAccordion, from }: AccodionProps) => {
 

  useEffect(() => {
    toggleAccordion(0)
  }, []);

  return (
    <>
    <div
      className={`py-4 px-5 2xl:py-5 rounded-lg ${
        open ? `bg-colorPrimary  mb-5` : ` mb-5 ${from === "home" ? "bg-white" : " bg-[#EBEDEF]"}`
      }`}
      onClick={() => toggleAccordion(index)}
    >
      <button className={`flex justify-between w-full items-center !bg-inherit  ${
          open ? "text-white" : "text-black"
        }`}>
        <span
          className={`font-sora 2xl:text-lg 2xl:font-[400] text-[14px] font-normal  ${
            open ? "white" : "black"
          }`}
        >
          {title}
        </span>
        {open ? <span><IoMdArrowDropup /></span> : <span><IoMdArrowDropdown /></span>}
       
      </button>
    </div>
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
        open
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div
        className={`overflow-hidden text-black ${
          open ? "mb-6" : ""
        }`}
      >
       <p className="leading-[30px]"> {answer}</p>
      </div>
    </div>
  </>
  );
};

export default FaqAccordion;
