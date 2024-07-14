import { Link } from "react-router-dom";
import dots from "../../data/img/breadcrembdots.png"; 


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
      className=" relative text-white bg-cover bg-bottom bg-no-repeat sm:px-20 py-24 lg:px-32 2xl:px-40  md:h-[250px] 2xl:h-[300px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold">{breadcrumbText}</h1>
      <p className="mt-4">
        <b>
          <Link to="/" className="underline hover:text-gray-300">
            Home
          </Link>{" "}
        </b>
        / {breadcrumbText}
      </p>

      <img
        src={dots}
        alt="dots"
        className=" hidden md:block absolute top right-20 m-4 w-[240px] h-auto"
      />
    </section>
  );
}
