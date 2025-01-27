import Link from "next/link";
import React, { useState, useContext } from "react";
import { FormContext } from "./FormContext";

export default function FormPage3() {
  const { formData, setFormData } = useContext(FormContext);

  const handleValidation = () => {
    return formData.region && formData.name && formData.email;
  };

  const handleCheckboxChange = (topic) => {
    const selectedTopics = formData.selectedTopics.includes(topic)
      ? formData.selectedTopics.filter((item) => item !== topic)
      : [...formData.selectedTopics, topic];
    setFormData({ ...formData, selectedTopics });
  };

  const isFormValid = handleValidation();

  return (
    <div className="bg-[#F1F1F1] text-[#B99B5F] min-h-screen p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10">
        <div className="flex justify-between items-center w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white">
          <select
            className="w-full bg-transparent text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal"
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          >
            <option value="" disabled>
              Region
            </option>
            <option>Kanton Aargau</option>
            <option>Kanton Appenzell Ausserrhoden</option>
            <option>Kanton Appenzell Innerrhoden</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="w-[271px] h-[75px] px-[13px] py-[17px] text-[18px] border border-[#B7B6BA] rounded-lg bg-white text-[#1C1B1D] placeholder-[#1C1B1D]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-[271px] h-[75px] px-[13px] py-[17px] text-[18px] border border-[#B7B6BA] rounded-lg bg-white text-[#1C1B1D] placeholder-[#1C1B1D]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <h2 className="text-center text-[#B99B5F] font-[700] text-[24px] mt-[160px]">
        Ich interessiere mich für folgende Themen
      </h2>
      <div className="flex flex-col items-center mt-10">
        {[
          "Alltagsbegleitung und Besorgungen",
          "Freizeit und soziale Aktivitäten",
          "Gesundheitsfürsorge",
          "Haushaltshilfe und Wohnpflege​​",
        ].map((topic, index) => (
          <label key={index} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.selectedTopics.includes(topic)}
              onChange={() => handleCheckboxChange(topic)}
            />
            <span>{topic}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href={isFormValid ? "/Form-Page-4" : "#"}>
          <button
            disabled={!isFormValid}
            className={`${
              isFormValid ? "bg-[#04436F] text-[#F5F5F5]" : "bg-gray-400 text-gray-200"
            } px-8 py-4 rounded-full`}
          >
            Weiter geht's!
          </button>
        </Link>
      </div>
    </div>
  );
}
