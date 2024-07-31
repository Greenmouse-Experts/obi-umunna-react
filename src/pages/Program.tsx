import { useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import Breadcrumb from "../components/ui/Breadcrumb";
import { formatAsNgnMoney, formatDate } from "../components/utils/helpers";
import { useProgram } from "../service/useProgram";
import LoaderBig from "../components/ui/LoaderBig";
import { IoIosShareAlt } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const Program = () => {

    const {id} = useParams()
  const { program, isLoading } = useProgram(id);
 
  const [isCopied, setIsCopied] = useState(false);

  const navigate = useNavigate()


 
  const handleShareClick = () => {
    const shareUrl = window.location.href; // Get current page URL
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Program"
      />

  {isLoading ? <LoaderBig/> :      <section className="bg-[#f4f4f4] ">
        <h4>{program?.name}</h4>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10 mt-4">
          <div className="col-span-2">
            <img
              src={program?.supportBanner}
              alt=""
              className="w-full h-[25rem] object-cover object-center rounded-3xl "
            />
            <div className="flex justify-between items-center mt-5">
              <div className="flex sm:flex-row flex-col gap-2">
                <p className="font-semibold">Start Date:</p>
                <p className="flex items-center text-base gap-3">
                  <span>
                    <MdOutlineAccessTime />
                  </span>
                  {formatDate(program?.startDate)}
                </p>
              </div>
              <div className="flex sm:flex-row flex-col  gap-2">
                <p className="font-semibold">End Date:</p>
                <p className="flex items-center text-base gap-3">
                  <span>
                    <MdOutlineAccessTime />
                  </span>
                  {formatDate(program?.endDate)}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <p>{program?.description}</p>

              <div className="mt-3">
                <p className="font-semibold">Requirement Name </p>
                <p>{program?.requirements}</p>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <div className="sticky top-44 card-shadow bg-white rounded-3xl p-6">
              <p className="text-2xl font-medium">
                {formatAsNgnMoney(program?.budgetAmount)}
                <span className="text-base text-gray-700 font-normal">
                  raised of {formatAsNgnMoney(8000000000)} goal
                </span>
              </p>

              <div className="bg-gray-300 w-full rounded-3xl overflow-hidden h-[6px] mt-4">
                <div className="bg-green-600 w-2/3 h-full rounded-3xl"></div>
              </div>
              <button
                type="button"
                onClick={() => navigate("/sponsor")}
                className="px-4 py-4 w-full mt-4 bg-colorPrimary text-white rounded font-medium transition-colors duration-200"
              >
                Donate
              </button>

              <div className="relative">
                <p
                  className="text-xl font-medium border-2 rounded mt-5 cursor-pointer border-black text-center px-4 py-4 w-full flex items-center justify-center"
                  onClick={handleShareClick}
                >
                  Share <span><IoIosShareAlt size={25} /></span>
                </p>
                {isCopied && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-700 text-white text-sm rounded">
                    Link copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>}
     
    </>
  );
};

export default Program;
