import { NavLink } from "react-router-dom";

 


interface BreadcrumbProps {
  backgroundImage: string;
  breadcrumbText: string;
}

export default function Breadcrumb({
  backgroundImage,
  breadcrumbText,
}: BreadcrumbProps) {
  return (
    <section
      className=" relative text-white bg-cover bg-bottom bg-no-repeat  h-[200px]  md:h-[250px] xl:h-[350px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-1/2 left-[7%] transform ">
      <h3 className="font-bold">{breadcrumbText}</h3>
      <p className="mt-4 flex items-center">
        <span>
          <NavLink to="/" className="">
            Home {">"} &nbsp;
          </NavLink>{" "}
        </span>
        / &nbsp; {breadcrumbText} {">"}
      </p>

      </div>

    </section>
  );
}
