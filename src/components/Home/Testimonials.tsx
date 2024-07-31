import Slider from "react-slick";
import { settings } from "../../helpers/settings";
import { useTestimonials } from "../../service/testimonial";
import LoaderBig from "../ui/LoaderBig";
import { useState } from "react";
import Modal from "../Modal";

interface TestimonialProps {
  color?: string;
  item: TestimonialItemProp; // green or white
}

interface TestimonialItemProp {
  name: string;
  title: string;
  photo: string;
  message: string;
}

const Testimonial = ({ color, item }: TestimonialProps) => {

  const [isOpenDonor, setisOpenDonor] = useState(false); // State for modal

  const handleOpenDonor = () => {
    setisOpenDonor(true);
  };

  const handleCloseDonor = () => {
    setisOpenDonor(false);
  };

  return (
   <>
    <div
      className={`p-6 card-shadow2 rounded-lg ${
        color === "green" ? "bg-greenPrimary text-white" : "bg-white text-black"
      } `}
    >
      <div className="flex items-center gap-4">
        <img
          src={item?.photo}
          alt={item?.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <p className="font-semibold">{item?.name}</p>
          <p>{item?.title}</p>
        </div>
      </div>

      <p className="mt-3">{item?.message.slice(0, 220)} <span className="font-semibold cursor-pointer" onClick={handleOpenDonor} >Read More</span></p>
    </div>
    <Modal isOpen={isOpenDonor} handleClose={handleCloseDonor}>
      <p className="text-black">{item.message}</p>
     
    </Modal>
   </>
  );
};

const Testimonials = () => {
  const { testimonials, isLoading } = useTestimonials();

  console.log(testimonials);

  if (isLoading) return <LoaderBig />;
  return (
    <section className="">
      <h3 className=" text-center">Our Success Stories</h3>

      <div className="mt-14">
        <Slider {...settings}>
          {testimonials.map((item: TestimonialItemProp, index: number) => (
            <Testimonial
              item={item}
              key={index}
              color={index % 2 !== 0 ? "green" : ""}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
