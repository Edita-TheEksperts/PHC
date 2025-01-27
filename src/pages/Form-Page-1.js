import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormContext";

export default function FormPage01() {
  const { formData, setFormData } = useContext(FormContext);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validimi i të dhënave
  const validateForm = () => {
    return (
      formData.region &&
      formData.name &&
      emailRegex.test(formData.email) &&
      formData.cv
    );
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, cv: file });
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  return (
    <div className="bg-[#F1F1F1] flex flex-col items-center justify-center p-4">
      <div
        className="flex flex-col lg:flex-row justify-between items-center gap-[11px] w-full lg:w-[1027px] h-auto"
        style={{ opacity: 1 }}
      >
        {/* Dropdown për Region */}
        <div
          className="flex justify-between items-center w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white"
          style={{
            border: "1px solid #B7B6BA",
            borderRadius: "8px",
          }}
        >
          <select
            className="w-full bg-transparent text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal"
            value={formData.region || ""}
            onChange={(e) =>
              setFormData({ ...formData, region: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Region
            </option>
            {/* Opsionet */}
            <option value="Kanton Aargau">Kanton Aargau</option>
            <option value="Kanton Zürich">Kanton Zürich</option>
            <option value="Kanton Bern">Kanton Bern</option>
            {/* Shto të tjera sipas nevojës */}
          </select>
        </div>

        {/* Input për Name */}
        <input
          type="text"
          placeholder="Name"
          required
          className="w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal placeholder-[#1C1B1D]"
          style={{
            border: "1px solid #B7B6BA",
            borderRadius: "8px",
          }}
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        {/* Input për Email */}
        <input
          type="email"
          placeholder="E-Mail"
          required
          className="w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal placeholder-[#1C1B1D]"
          style={{
            border: "1px solid #B7B6BA",
            borderRadius: "8px",
          }}
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        {/* Input për CV */}
        <div
          className="flex flex-col justify-between items-start w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white"
          style={{
            border: "1px solid #B7B6BA",
            borderRadius: "8px",
          }}
        >
          <p className="text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal">
            Lebenslauf
          </p>
          <span className="text-[#1C1B1D] font-metropolis text-[10px] leading-[20px] font-normal">
            Zwingend
          </span>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="cv-upload"
          />
          <label htmlFor="cv-upload" className="cursor-pointer">
            {formData.cv ? (
              <p className="text-[#1C1B1D] font-metropolis text-[14px] leading-[22px]">
                {formData.cv.name}
              </p>
            ) : (
              <p className="text-[#1C1B1D] font-metropolis text-[14px] leading-[22px]">
                Upload CV
              </p>
            )}
          </label>
        </div>
      </div>

      {/* Butoni për kalim në faqen tjetër */}
      <Link href={isFormValid ? "/Form-Page-2" : "#"}>
        <button
          type="button"
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? "bg-[#04436F] text-[#F5F5F5]"
              : "bg-gray-400 text-gray-200"
          } font-metropolis font-[700] text-[24px] md:text-[36px] leading-[21.6px] rounded-[8px] md:rounded-full mt-[50px]`}
          style={{
            display: "inline-flex",
            padding: "18px 50px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "21.6px",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          Weiter geht's!
        </button>
      </Link>
    </div>
  );
}
