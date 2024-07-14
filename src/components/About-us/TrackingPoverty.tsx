import Form from "../ui/Form";
import aboutPageImage from "../../data/img/aboutpage2.png";
import imageBox1 from "../../data/img/Vector.png";


export default function TrackingPoverty() {
  return (
    <section
      className=" flex flex-col md:flex-row bg-cover  gap-16 text-white bg-center bg-no-repeat sm:px-20 py-24 lg:px-32 2xl:px-40 min-h-[300px]  md:min-h-[300px]"
      style={{ backgroundImage: `url(${aboutPageImage})` }}
    >
      <Form />


      
      <div className="flex flex-col w-[60%] ">
        <h4>
          We Have Been Tackling Poverty In Communities To Build Better Lives
        </h4>

        <div className="grid grid-cols-1 gap-4 px-4 py-4 xl:grid-cols-2">
          <div className="">
            <img src={imageBox1} alt="About Us Hands" className="w-8" />
            <h5>Pure Water</h5>
            <p>
              Pure water is the essence of life, a precious resource essential
              for our well-being and the health of our planet.
            </p>
          </div>
          <div className="">
            <img src={imageBox1} alt="About Us Hands" className="w-8" />
            <h5>Pure Water</h5>
            <p>
              Pure water is the essence of life, a precious resource essential
              for our well-being and the health of our planet.
            </p>
          </div>
          <div className="">
            <img src={imageBox1} alt="About Us Hands" className="w-8" />
            <h5>Pure Water</h5>
            <p>
              Pure water is the essence of life, a precious resource essential
              for our well-being and the health of our planet.
            </p>
          </div>
          <div className="">
            <img src={imageBox1} alt="About Us Hands" className="w-8" />
            <h5>Pure Water</h5>
            <p>
              Pure water is the essence of life, a precious resource essential
              for our well-being and the health of our planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
