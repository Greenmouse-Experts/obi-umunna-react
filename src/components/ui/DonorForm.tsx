// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputText from "./Input";
import SelectInput from "./Select";
import { useDonate } from "../../service/useApply";
import PaystackPaymentButton from "./PaystackButton";
import { usePrograms } from "../../service/useProgram";

export default function DonorForm() {
  const { donate, isDonating } = useDonate();
  const { programs } = usePrograms();
  let programId;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
      email: "",
      recognitionPreferences: "",
      fullName: "",
      typeOfSponsorship: "",
      homeAddress: "",
      companyName: "",
      companyLogo: "",
      companyAddress: "",
    },
  });

  const [selectedState, setSelectedState] = useState("");
  const [selectedSponsor, setSelectedSponsor] = useState("");
  const [paystackRef, setPaystackRef] = useState(null);
  const [formData, setFormData] = useState(null);

  const watchState = watch("recognitionPreferences");
  const watchSponsor = watch("typeOfSponsorship");

  useEffect(() => {
    if (watchState) {
      setSelectedState(watchState);
    }
  }, [watchState]);

  useEffect(() => {
    if (watchSponsor) {
      setSelectedSponsor(watchSponsor);
    }
  }, [watchSponsor]);

  const watchProgram = watch("program");
  useEffect(() => {
    if (watchProgram) {
      programId = programs.find((program) => program.name === watchProgram)?.id;
    }
    console.log(programId);
  }, [watchProgram, programs]);

  const handleFormSubmit = (data) => {
    console.log("Form data:", data); // Debug log
    setFormData(data);
  };

  const handlePaymentSuccess = (reference) => {
    console.log("Payment successful, reference:", reference, paystackRef); // Debug log
    setPaystackRef(reference);
    donate(
      { ...formData, programId, refId: reference },
      {
        onSuccess: () => {
          console.log("Donation successful"); // Debug log
          handleCloseModal();
        },
        onError: (error) => {
          console.error("Donation error:", error); // Debug log
        },
      }
    );
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue(fieldName, reader.result, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };
  const programNames = programs.map((program) => program.name);
  return (
    <div className="apply-left-div text-black shadow-lg p-5 rounded-lg max-w-[1000px] mx-auto">
      <h6 className="mb-4">Sponsor a Program</h6>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="">
        <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 items-end">
          <div className="col-span-2">
            <SelectInput
              id="program"
              label="Available Programs"
              items={programNames}
              handleChange={(e) => setValue("program", e.target.value)}
              value={watch("program")}
              placeholder="Select program"
              error={errors.program?.message}
              {...register("program", { required: "program is required" })}
            />
          </div>
          <InputText
            id="amount"
            textLabel="Amount"
            type="number"
            setValue={(value) => setValue("amount", value)}
            value={watch("amount")}
            placeholder="Enter your full amount"
            error={errors.amount?.message}
            {...register("amount", { required: "Amount is required" })}
          />

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
          <div className="col-span-2">
            <SelectInput
              id="recognitionPreferences"
              label="Recognition Preferences"
              items={["Anonymous", "Public acknowledgment"]}
              handleChange={(e) =>
                setValue("recognitionPreferences", e.target.value)
              }
              value={watch("recognitionPreferences")}
              placeholder="Select recognitionPreferences"
              error={errors.recognitionPreferences?.message}
              {...register("recognitionPreferences", {
                required: "Recognition Preferences is required",
              })}
            />
          </div>
        </div>

        {selectedState === "Public acknowledgment" && (
          <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 items-end">
            <InputText
              id="fullName"
              textLabel="Full Name"
              type="text"
              setValue={(value) => setValue("fullName", value)}
              value={watch("fullName")}
              placeholder="Enter your full name"
              error={errors.fullName?.message}
              {...register("fullName", { required: "Full Name is required" })}
            />

            <InputText
              id="homeAddress"
              textLabel="Home Address"
              type="text"
              setValue={(value) => setValue("homeAddress", value)}
              value={watch("homeAddress")}
              placeholder="Enter your residential address"
              error={errors.homeAddress?.message}
              {...register("homeAddress", {
                required: "Residential Address is required",
              })}
            />
            <div className="col-span-2">
              <SelectInput
                id="typeOfSponsorship"
                label="Type of Sponsorship"
                items={["Corporate", "Individual"]}
                handleChange={(e) =>
                  setValue("typeOfSponsorship", e.target.value)
                }
                value={watch("typeOfSponsorship")}
                placeholder="Select type of sponsorship"
                error={errors.typeOfSponsorship?.message}
                {...register("typeOfSponsorship", {
                  required: "Type of Sponsorship is required",
                })}
              />
            </div>
          </div>
        )}

        {selectedSponsor === "Corporate" &&
          selectedState === "Public acknowledgment" && (
            <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 items-end">
              <InputText
                id="companyName"
                textLabel="Company Name"
                type="text"
                setValue={(value) => setValue("companyName", value)}
                value={watch("companyName")}
                placeholder="Enter company name"
                error={errors.companyName?.message}
                {...register("companyName", {
                  required: "Company Name is required",
                })}
              />

              <div className="flex flex-col">
                <label
                  htmlFor="companyLogo"
                  className="mb-1 text-sm font-medium"
                >
                  Company Logo
                </label>
                <input
                  type="file"
                  id="companyLogo"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "companyLogo")}
                  className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-sm"
                />
                {errors.companyLogo && (
                  <span className="text-red-500 text-sm">
                    {errors.companyLogo.message}
                  </span>
                )}
              </div>

              <InputText
                id="companyAddress"
                textLabel="Company Address"
                type="text"
                setValue={(value) => setValue("companyAddress", value)}
                value={watch("companyAddress")}
                placeholder="Enter company address"
                error={errors.companyAddress?.message}
                {...register("companyAddress", {
                  required: "Company Address is required",
                })}
              />
            </div>
          )}

        {!formData && !isDonating ? (
          <button
            type="submit"
            className="px-8 py-2 mt-4 bg-colorPrimary text-white rounded hover:bg-blue-600 transition-colors duration-200"
            disabled={isDonating}
          >
            {isDonating ? "Submitting..." : "Proceed to Payment"}
          </button>
        ) : (
          <PaystackPaymentButton
            email={watch("email")}
            amount={watch("amount") * 100} // Amount in kobo
            onSuccess={handlePaymentSuccess}
            onClose={() => console.log("Payment closed")}
          />
        )}
      </form>
    </div>
  );
}
