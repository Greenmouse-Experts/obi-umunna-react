import React from "react";

interface ButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
  target: string;
}

const Button: React.FC<ButtonProps> = ({ text, isActive, onClick, target }) => {
  return (
    <button
      className={`py-3 px-2 md:px-8 rounded-md border-b-4 border-[#A4744966] ${
        isActive ? "bg-[#2708A5] text-white" : " text-black"
      } hover:bg-blue-600 hover:text-white transition-colors duration-300`}
      onClick={onClick}
      data-target={target}
    >
      {text}
    </button>
  );
};

export default Button;
