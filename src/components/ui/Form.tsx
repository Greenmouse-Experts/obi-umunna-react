// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import NaijaStates from "naija-state-local-government";
import InputText from "./Input";
import SelectInput from "./Select";
import { useApply } from "../../service/useApply";

export default function Form({ programId, handleCloseModal }) {
  const { apply, isApplying } = useApply();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      profile_picture: null,
      phone: "",
      gender: "",
      residentialAddress: "",
      lga: "",
      state: "",
      country: "",
      levelOfEducation: "",
      educationCertificate: null,
      meansOfIdentification: "",
      uploadIdentification: null,
      nextOfKin: "",
      nextOfKinPhone: "",
      nextOfKinEmail: "",
      nextOfKinAddress: "",
      password: "",
    },
  });
  const [selectedState, setSelectedState] = useState("");
  const watchState = watch("state");

  useEffect(() => {
    if (watchState) {
      setSelectedState(watchState);
    }
  }, [watchState]);

  const onSubmit = (data) => {
    console.log(data);
 
    apply({ ...data, programId },
      {
        onSuccess: () => {
          handleCloseModal()
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

  return (
    <div className="apply-left-div text-black  shadow-lg p-5 rounded-lg max-w-[1000px] mx-auto">
      <h6 className="mb-4">Apply as Apprentice</h6>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 items-end"
      >
        <InputText
          id="name"
          textLabel="Full Name"
          type="text"
          setValue={(value) => setValue("name", value)}
          value={watch("name")}
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name", { required: "Full Name is required" })}
        />
        <div className="flex flex-col">
          <label htmlFor="profile_picture" className="mb-1 text-base font-medium">
            Photo
          </label>
          <input
            type="file"
            id="profile_picture"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "profile_picture")}
            className="w-full py-3 px-4 h-16 outline-none  bg-[#F4F4F4] rounded-md text-base"
          />
          {errors.profile_picture && (
            <span className="text-red-500 text-base">
              {errors.profile_picture.message}
            </span>
          )}
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
        <SelectInput
          id="gender"
          label="Gender"
          items={["Male", "Female"]}
          handleChange={(e) => setValue("gender", e.target.value)}
          value={watch("gender")}
          placeholder="Select your gender"
          error={errors.gender?.message}
          {...register("gender", { required: "Gender is required" })}
        />
        <InputText
          id="residentialAddress"
          textLabel="Residential Address"
          type="text"
          setValue={(value) => setValue("residentialAddress", value)}
          value={watch("residentialAddress")}
          placeholder="Enter your residential address"
          error={errors.residentialAddress?.message}
          {...register("residentialAddress", {
            required: "Residential Address is required",
          })}
        />
        <SelectInput
          id="country"
          label="Country"
          items={["Country 1", "Country 2", "Country 3", "Country 4"]}
          handleChange={(e) => setValue("country", e.target.value)}
          value={watch("country")}
          placeholder="Select your country"
          error={errors.country?.message}
          {...register("country", { required: "Country is required" })}
        />
        <SelectInput
          id="state"
          label="State"
          items={NaijaStates.states()}
          handleChange={(e) => setValue("state", e.target.value)}
          value={watchState}
          placeholder="Select your state"
          error={errors.state?.message}
          {...register("state", { required: "State is required" })}
        />
        <SelectInput
          id="lga"
          label="LGA, Village/town"
          items={selectedState ? NaijaStates.lgas(selectedState).lgas : []}
          handleChange={(e) => setValue("lga", e.target.value)}
          value={watch("lga")}
          placeholder="Select your LGA"
          error={errors.lga?.message}
          {...register("lga", { required: "LGA is required" })}
        />
        <SelectInput
          id="levelOfEducation"
          label="Level of Education"
          items={["Primary", "Secondary", "Tertiary"]}
          handleChange={(e) => setValue("levelOfEducation", e.target.value)}
          value={watch("levelOfEducation")}
          placeholder="Select your level of education"
          error={errors.levelOfEducation?.message}
          {...register("levelOfEducation", {
            required: "Level of Education is required",
          })}
        />
        <div className="flex flex-col">
          <label
            htmlFor="educationCertificate"
            className="mb-1 text-base font-medium"
          >
            Education Certificate
          </label>
          <input
            type="file"
            id="educationCertificate"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "educationCertificate")}
            className="w-full py-3 px-4 h-16 outline-none  bg-[#F4F4F4] rounded-md text-base"
          />
          {errors.educationCertificate && (
            <span className="text-red-500 text-base">
              {errors.educationCertificate.message}
            </span>
          )}
        </div>
        <SelectInput
          id="meansOfIdentification"
          label="Means of Identification"
          items={["NIN", "Voters card", "Drivers Licence"]}
          handleChange={(e) =>
            setValue("meansOfIdentification", e.target.value)
          }
          value={watch("meansOfIdentification")}
          placeholder="Select your means of identification"
          error={errors.meansOfIdentification?.message}
          {...register("meansOfIdentification", {
            required: "Means of Identification is required",
          })}
        />
        <div className="flex flex-col">
          <label
            htmlFor="uploadIdentification"
            className="mb-1 text-base font-medium"
          >
            Upload Identification
          </label>
          <input
            type="file"
            id="uploadIdentification"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "uploadIdentification")}
            className="w-full py-3 px-4 h-16 outline-none  bg-[#F4F4F4] rounded-md text-base"
          />
          {errors.uploadIdentification && (
            <span className="text-red-500 text-base">
              {errors.uploadIdentification.message}
            </span>
          )}
        </div>
        <InputText
          id="nextOfKin"
          textLabel="Next of Kin"
          type="text"
          setValue={(value) => setValue("nextOfKin", value)}
          value={watch("nextOfKin")}
          placeholder="Enter next of kin name"
          error={errors.nextOfKin?.message}
          {...register("nextOfKin", { required: "Next of Kin is required" })}
        />
        <InputText
          id="nextOfKinPhone"
          textLabel="Next of Kin Phone"
          type="tel"
          setValue={(value) => setValue("nextOfKinPhone", value)}
          value={watch("nextOfKinPhone")}
          placeholder="Enter next of kin phone number"
          error={errors.nextOfKinPhone?.message}
          {...register("nextOfKinPhone", {
            required: "Next of Kin Phone is required",
          })}
        />
        <InputText
          id="nextOfKinEmail"
          textLabel="Next of Kin Email"
          type="email"
          setValue={(value) => setValue("nextOfKinEmail", value)}
          value={watch("nextOfKinEmail")}
          placeholder="Enter next of kin email"
          error={errors.nextOfKinEmail?.message}
          {...register("nextOfKinEmail", {
            required: "Next of Kin Email is required",
          })}
        />
        <InputText
          id="nextOfKinAddress"
          textLabel="Next of Kin Address"
          type="text"
          setValue={(value) => setValue("nextOfKinAddress", value)}
          value={watch("nextOfKinAddress")}
          placeholder="Enter next of kin address"
          error={errors.nextOfKinAddress?.message}
          {...register("nextOfKinAddress", {
            required: "Next of Kin Address is required",
          })}
        />
        <InputText
          id="password"
          textLabel="Password"
          type="password"
          setValue={(value) => setValue("password", value)}
          value={watch("password")}
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />
        <button
          type="submit"
          className="px-4 py-2 mt-4 bg-colorPrimary text-white rounded hover:bg-blue-600 transition-colors duration-200"
          disabled={isApplying}
        >
          {isApplying ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
