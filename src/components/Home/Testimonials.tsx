import Slider from "react-slick";
import { settings } from "../../helpers/settings";


interface TestimonialProps{
    color?: string; // green or white
}

const Testimonial = ({color}:TestimonialProps) => {
  return (
    <div className={`p-6 card-shadow2 rounded-lg ${color === "green" ? "bg-greenPrimary text-white" : "bg-white text-black"} `}>
      <div className="flex items-center gap-4">
        <img src="/img/avatar.png" alt="" />
        <div>
          <p className="font-semibold">Dave Jonah</p>
          <p>Volunteer</p>
        </div>
      </div>

      <p>
        Fundraisy is ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna undraisy is ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna undraisy is ipsum dolor sit amet.
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="">
      <h3 className=" text-center">Our Success Stories</h3>

   <div className="mt-14">
   <Slider {...settings}>
        <Testimonial />
        <Testimonial color="green" />
        <Testimonial />
      </Slider>
   </div>
    </section>
  );
};

export default Testimonials;
