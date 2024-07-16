import BtnCta from "../Buttons/BtnCta";

const ProgramItem = () => {
  return (
    <div className="bg-[url('/img/program1.png')] p-7 h-[30rem] rounded-md  place-content-end">
      <div className="bg-white p-5 flex flex-col gap-4 justify-end rounded-md mt-auto ">
        <h6>Work in a laboratory</h6>
        <p className="text-base">
          Let's work together to ensure every community has safe.
        </p>
        <div className="bg-[#D9D9D9] w-full h-3 rounded-3xl">
          <div className=" bg-greenPrimary w-1/2 h-3 rounded-3xl"></div>
        </div>

        <BtnCta>Sponsor</BtnCta>
      </div>
    </div>
  );
};

export default ProgramItem;
