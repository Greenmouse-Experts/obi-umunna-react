

import Breadcrumb from "../components/ui/Breadcrumb";
import DonorForm from "../components/ui/DonorForm";



const Sponsor = () => {

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Programs"
      />

      <section>
        <div className=" mx-auto xl:w-[60%] w-full">
        <DonorForm />
          
        </div>
      </section>
    </>
  );
};

export default Sponsor;
