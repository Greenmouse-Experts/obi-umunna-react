export default function Form() {
  return (
    <div className="w-[40%]">
      <div className="apply-left-div text-black bg-gray-100 shadow-lg p-8 rounded-lg max-w-[1000px] mx-auto">
        <h1 className="mb-4 text-xl font-semibold">Apply as Apprentice</h1>
        <div className="apply-container mx-auto overflow-x-hidden max-w-[900px] rounded-lg overflow-y-auto h-[400px] pr-4">
          <form className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
            <div className="flex flex-col ">
              <label htmlFor="full-name" className="mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="profile-picture"
                className="mb-1 text-sm font-medium"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profile-picture"
                name="profile-picture"
                accept="image/*"
                required
                className="w-full p-2 bg-white border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="country" className="mb-1 text-sm font-medium">
                Country
              </label>
              <select
                id="country"
                name="country"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
                <option value="country3">Country 3</option>
                <option value="country4">Country 4</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="state" className="mb-1 text-sm font-medium">
                State
              </label>
              <select
                id="state"
                name="state"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="" disabled selected>
                  Select your state
                </option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
                <option value="state4">State 4</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="town" className="mb-1 text-sm font-medium">
                LGA, Village/town
              </label>
              <select
                id="town"
                name="town"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="" disabled selected>
                  Select your town
                </option>
                <option value="town1">Town 1</option>
                <option value="town2">Town 2</option>
                <option value="town3">Town 3</option>
                <option value="town4">Town 4</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="phone-number"
                className="mb-1 text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Enter your phone number"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="whatsapp-number"
                className="mb-1 text-sm font-medium"
              >
                WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                id="whatsapp-number"
                name="whatsapp-number"
                placeholder="Enter your WhatsApp number"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end">
              <label htmlFor="email" className="mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="id" className="mb-1 text-sm font-medium">
                ID (NIN or international Passport)
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="1234567890"
                maxLength="10"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end">
              <label
                htmlFor="home-address"
                className="mb-1 text-sm font-medium"
              >
                Home Address
              </label>
              <input
                type="text"
                id="home-address"
                name="home-address"
                placeholder="Enter your home address"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end ">
              <label htmlFor="occupation" className="mb-1 text-sm font-medium">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Enter your occupation"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end">
              <label htmlFor="skill" className="mb-1 text-sm font-medium">
                Type of skill you want to learn
              </label>
              <select
                id="skill"
                name="skill"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="" disabled selected>
                  Select your skill
                </option>
                <option value="skill1">Skill 1</option>
                <option value="skill2">Skill 2</option>
                <option value="skill3">Skill 3</option>
                <option value="skill4">Skill 4</option>
                <option value="skill5">Skill 5</option>
              </select>
            </div>
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
    </div>
  );
}
