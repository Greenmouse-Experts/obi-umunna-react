import React from "react";

interface SelectProps {
  id: string;
  items: string[];
  label: string;
  value: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

const SelectInput: React.FC<SelectProps> = React.forwardRef(({
  id,
  items,
  label,
  value,
  error,
  handleChange,
  placeholder,
  ...rest
}, ref) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-base font-medium text-[#1d2026] tracking-wide">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        ref={ref}
        className="block w-full py-1.5 text-base text-[#1c2125] px-4 h-16  bg-[#F4F4F4] border-0 outline-none ring-2 ring-inset ring-[#C3D4E9] placeholder:text-[#8C94A3] focus:ring-2 focus:ring-inset focus:ring-[#0675C1] rounded-md"
        {...rest}
      >
        <option value="">{placeholder}</option>
        {items.map((option: string, index: number) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-base">{error}</p>}
    </div>
  );
});

SelectInput.displayName = "SelectInput";
export default SelectInput;
