import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import NaijaStates from "naija-state-local-government";
import InputText from "./Input";
import SelectInput from "./Select";

export default function Form() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [selectedState, setSelectedState] = useState("");
  const watchState = watch("state");

  useEffect(() => {
    if (watchState) {
      setSelectedState(watchState);
    }
  }, [watchState]);

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here, e.g., sending data to an API
  };

  return (
    <div className="apply-left-div text-black bg-gray-100 shadow-lg p-5 rounded-lg max-w-[1000px] mx-auto">
      <h6 className="mb-4">Apply as Apprentice</h6>
      <div className="apply-container mx-auto overflow-x-hidden max-w-[900px] rounded-lg overflow-y-auto h-[400px] pr-4">
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 items-end"
        >
          <InputText
            id="full_name"
            textLabel="Full Name"
            type="text"
            setValue={(value) => setValue("full_name", value)}
            value={watch("full_name")}
            placeholder="Enter your full name"
            error={errors.full_name?.message}
            {...register("full_name", { required: "Full Name is required" })}
          />
          <div className="flex flex-col">
            <label
              htmlFor="profile-picture"
              className="mb-1 text-sm font-medium"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profile_picture"
              accept="image/*"
              {...register("profile_picture", { required: "Profile Picture is required" })}
              className="w-full p-2 bg-white border border-gray-300 rounded-lg"
            />
            {errors.profile_picture && <span className="text-red-500 text-sm">{errors.profile_picture.message}</span>}
          </div>
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
          <InputText
            id="phone_number"
            textLabel="Phone Number"
            type="tel"
            setValue={(value) => setValue("phone_number", value)}
            value={watch("phone_number")}
            placeholder="Enter your phone number"
            error={errors.phone_number?.message}
            {...register("phone_number", { required: "Phone Number is required" })}
          />
          <InputText
            id="whatsapp_number"
            textLabel="WhatsApp Number (Optional)"
            type="tel"
            setValue={(value) => setValue("whatsapp_number", value)}
            value={watch("whatsapp_number")}
            placeholder="Enter your WhatsApp number"
            error={errors.whatsapp_number?.message}
            {...register("whatsapp_number")}
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
          <InputText
            id="id"
            textLabel="ID (NIN or international Passport)"
            type="text"
            setValue={(value) => setValue("id", value)}
            value={watch("id")}
            placeholder="Enter your ID (NIN or international Passport)"
            error={errors.id?.message}
            {...register("id", { required: "ID is required" })}
          />
          <InputText
            id="address"
            textLabel="Home Address"
            type="text"
            setValue={(value) => setValue("address", value)}
            value={watch("address")}
            placeholder="Enter your home address"
            error={errors.address?.message}
            {...register("address", { required: "Home Address is required" })}
          />
          <InputText
            id="occupation"
            textLabel="Occupation"
            type="text"
            setValue={(value) => setValue("occupation", value)}
            value={watch("occupation")}
            placeholder="Enter your occupation"
            error={errors.occupation?.message}
            {...register("occupation", { required: "Occupation is required" })}
          />
          <SelectInput
            id="skill"
            label="Type of skill you want to learn"
            items={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]}
            handleChange={(e) => setValue("skill", e.target.value)}
            value={watch("skill")}
            placeholder="Select the skill you want to learn"
            error={errors.skill?.message}
            {...register("skill", { required: "Skill is required" })}
          />
        
          <div className="flex w-full grid-cols-2">
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white transition-colors bg-[#2708A5] rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}
