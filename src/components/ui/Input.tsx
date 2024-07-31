import React from "react";

interface InputProps {
  textLabel: string;
  error: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  placeholder: string;
}

const InputText: React.FC<InputProps> = React.forwardRef(({
  textLabel,
  error,
  value,
  type,
  setValue,
  id,
  placeholder,
  ...rest
}, ref) => {
  return (
    <div className="w-[100%]  relative flex items-start flex-col">
      <label htmlFor={id} className="text-base font-medium text-black">{textLabel}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        ref={ref}
        id={id}
        className="w-full py-3 px-4 h-16 outline-none  bg-[#F4F4F4] rounded-md text-base"
        {...rest}
      />
      {error && <p className="text-red-500 text-base">{error}.</p>}
    </div>
  );
});

InputText.displayName = "InputText";
export default InputText;
