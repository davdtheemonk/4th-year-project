import React, { useState, ChangeEvent } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Reporting = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    gender: "",
    incident: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div>
      <div className="my-1">
        <IoIosArrowBack className="w-8 h-8  text-white bg-maroon rounded-full p-2" />
      </div>

      <div className="bg-primary h-screen gap-8 flex justify-start items-center flex-col py-14">
        <input
          className="focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md p-3"
          placeholder="FirstName"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          className="focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md p-3"
          placeholder="LastName"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          className="focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md p-3"
          placeholder="PhoneNumber"
          type="number"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <select
          className="focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md px-2"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label
          htmlFor="incident"
          className="text-white w-[300px] h-[40px] mb-3"
        >
          Give an in-depth description of the incident including your location
          for assistance.
        </label>
        <textarea
          rows={4}
          cols={28}
          className="focus:border-blue focus:border-2 focus:border-solid rounded-md p-3"
          placeholder="Incident"
          id="incident"
          name="incident"
          value={formData.incident}
          onChange={handleChange}
        ></textarea>

        <button
          className="bg-maroon rounded-md w-[300px] h-[40px] text-white"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Reporting;
