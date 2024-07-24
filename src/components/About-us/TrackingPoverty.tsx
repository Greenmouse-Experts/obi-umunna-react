export default function TrackingPoverty() {
  return (
    <section className="">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="border-4 border-greenPrimary px-6 py-8 flex gap-3 relative overflow-hidden">
          <div className="bg-greenPrimary rounded-full p-4 w-fit mb-2 absolute -top-4 -right-4 border border-bluePrimary">
            <img src="/icons/mission.svg" alt="" className="h-16 w-16 " />
          </div>
          <div className="pt-5">
            <h6>Become a Sponsor</h6>
            <p className="mt-3">
              Our mission is the heartbeat of our existence, the guiding star
              that illuminates our path. It embodies our purpose, our values,
              and our aspirations. With unwavering dedication, we strive to make
              a meaningful impact, to inspire positive change, and to leave a
              lasting legacy.
            </p>
          </div>
        </div>

        <div className="border-4 border-[#2708A5] px-6 py-8 flex gap-3 relative overflow-hidden">
          <div className="bg-[#2708A5] rounded-full p-4 w-fit mb-2 absolute -top-4 -right-4 border border-bluePrimary">
            <img src="/icons/vision.svg" alt="" className="h-16 w-16 " />
          </div>
          <div className="pt-5">
            <h6>Our Vision</h6>
            <p className="mt-3">
              Our vision is the heartbeat of our existence, the guiding star
              that illuminates our path. It embodies our purpose, our values,
              and our aspirations. With unwavering dedication, we strive to make
              a meaningful impact, to inspire positive change, and to leave a
              lasting legacy.
            </p>
          </div>
        </div>

        <div className="border-4 border-[#A47449] px-6 py-8 flex gap-3 relative overflow-hidden">
          <div className="bg-[#A47449] rounded-full p-4 w-fit mb-2 absolute -top-4 -right-4 border border-bluePrimary">
            <img src="/icons/impact.svg" alt="" className="h-16 w-16 " />
          </div>
          <div className="pt-5">
            <h6>Our Impact</h6>
            <p className="mt-3">
              Our Impact is the heartbeat of our existence, the guiding star
              that illuminates our path. It embodies our purpose, our values,
              and our aspirations. With unwavering dedication, we strive to make
              a meaningful impact, to inspire positive change, and to leave a
              lasting legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
