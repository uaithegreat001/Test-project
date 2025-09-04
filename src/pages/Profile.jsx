import { useState } from "react";
import { InputField } from "../Components/InputField";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert("Profile updated!");
  };

  return (
    <div className="p-5 ml-3 mt-15 max-w-md mx-auto flex flex-col gap-6 w-full items-start font-normal">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-900 w-full">Profile</h1>
      <p className="text-gray-600">Update your personal information below.</p>
      <form className="space-y-5 w-full" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          placeholder="e.g. +2348012345678"
          pattern="^\+234[0-9]{10}$"
        />
        <InputField
          label="Address"
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          autoComplete="street-address"
        />
        <div className="flex justify-end">
          <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition min-w-[120px]">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
