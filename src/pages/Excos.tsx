
import Breadcrumb from "../components/ui/Breadcrumb";

const Excos = () => {
  return (
    <>
      <Breadcrumb
        backgroundImage="/img/excos-banner.png"
        breadcrumbText="Excos"
      />

      <section className="grid xl:grid-cols-2 grid-cols-1 justify-between">
        <div className="flex items-center md:flex-row flex-col gap-7">
          <img src="/img/excos-1.png" alt="" className="scale-90" />
          <div>
            <p className="text-xl font-semibold">
              MAZi Godwin Eziechina Chukwu
            </p>
           <div className="mt-3">
           <p>
              Position: <span>Founder</span>
            </p>
            <p>
              State of Origin: <span>Enugu State</span>
            </p>
            <p>
              Based In: <span>Italy</span>
            </p>
           </div>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col gap-7">
          <img src="/img/excos-2.png" alt="" className="scale-90" />
          <div>
            <p className="text-xl font-semibold">
            Ezeokeke Ebere Catherine
            </p>
            <div className="mt-3">
           <p>
              Position: <span>secretary</span>
            </p>
            <p>
              State of Origin: <span> Anambra State</span>
            </p>
            <p>
              Based In: <span>Switzerland</span>
            </p>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Excos;
