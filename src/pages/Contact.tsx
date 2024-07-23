// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useForm } from "react-hook-form";
import { useState } from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import InputText from "../components/ui/Input";
import { ImMobile2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/contact-banner.png"
        breadcrumbText="Contact Us"
      />
      <section className="flex lg:flex-row flex-col-reverse form-shadow">
        <div className=" bg-colorPrimary lg:w-1/2 w-full flex flex-col  justify-between p-[10%] ">
          <div className="flex items-start gap-8 text-white">
            <ImMobile2 size={40} />
            <div>
              <p className="text-xl font-semibold">Phone</p>
              <p> +234 23456789</p>
            </div>
          </div>

          <div className="flex items-start gap-8 text-white">
            <MdOutlineEmail size={40} />
            <div>
              <p className="text-xl font-semibold">Email</p>
              <p> info@companyemail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-8 text-white">
            <GrLocation size={40} />
            <div>
              <p className="text-xl font-semibold">Address</p>
              <p> No 0, company address</p>
            </div>
          </div>
        </div>

        <div className="bg-bluePrimary text-white px-8 py-10 lg:w-[50%] w-full md:ml-3 ml-0 shadow-md">
          <form
            className="flex flex-col 2xl:gap-8 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex lg:flex-row flex-col justify-between gap-8">
              <InputText
                id="full_name"
                textLabel="Full Name"
                type="text"
                setValue={(value) => setValue("full_name", value)}
                value={watch("full_name")}
                placeholder="Enter your full name"
                error={errors.full_name?.message}
                {...register("full_name", {
                  required: "Full Name is required",
                })}
              />
              <InputText
                id="phone"
                textLabel="Phone Number"
                type="tel"
                setValue={(value) => setValue("phone", value)}
                value={watch("phone")}
                placeholder="Enter your phone number"
                error={errors.phone?.message}
                {...register("phone", {
                  required: "Phone Number is required",
                })}
              />
            </div>
            <InputText
              id="email"
              textLabel="Email"
              type="email"
              setValue={(value) => setValue("email", value)}
              value={watch("email")}
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email", { required: "Email is required" })}
            />
            <InputText
              id="subject"
              textLabel="Subject"
              type="text"
              setValue={(value) => setValue("subject", value)}
              value={watch("subject")}
              placeholder="Enter your subject"
              error={errors.subject?.message}
              {...register("subject", { required: "subject is required" })}
            />
            <div>
              <label htmlFor="message" className="text-black">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 mt-2 bg-[#F4F4F4] rounded-md"
                rows="5"
                placeholder="Enter your message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-colorPrimary btn btn-green !rounded-md text-white  !py-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
