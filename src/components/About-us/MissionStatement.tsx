export default function MissionStatement() {
  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-10  items-center justify-between">
        <div className="lg:w-[35%] w-full">
          <img src="/img/about-img.png" alt="" className="w-full object-cover " />
        </div>
        <div className="lg:w-[50%] w-full">
          <p className=" uppercase font-semibold text-greenPrimary">About Us</p>
          <h3 className=" font-semibold font-syne text-black">
            Our Aim Is to Eradicate <br /> Poverty Worldwide
          </h3>
          <p className=" mt-3">
            Join us in our mission to end poverty across the globe. Through
            sustainable initiatives and compassionate action, we are committed
            to creating a future where every individual has access to
            opportunities and dignity. Together, we can empower the indigenous
            communities.
          </p>

          <div></div>
        </div>
      </div>
    </section>
  );
}
