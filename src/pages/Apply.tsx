

import Breadcrumb from "../components/ui/Breadcrumb";
import Form from "../components/ui/Form";


const Apply = () => {

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Programs"
      />

      <section>
        <div className=" mx-auto xl:w-[60%] w-full">
        <Form  />
          
        </div>
      </section>
    </>
  );
};

export default Apply;
