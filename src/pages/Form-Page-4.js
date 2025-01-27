import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext"; // Përdor kontekstin për Form-Page-3 dhe Form-Page-4
import Link from "next/link";

const FormPage4 = () => {
  const { formData, setFormData } = useContext(FormContext); // Merr të dhënat nga FormContext
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, additionalQuestion: e.target.value }); // Ruaj pyetjen shtesë
  };

  const handleClick = async () => {
    try {
      const response = await fetch("/api/send3-4email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Dërgo të dhënat e formës në API
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqData = [
    {
      question: "Stundenweise Seniorenbetreuung: Was bedeutet das?",
      answer: (
        <div className="text-[16px] font-[300] leading-[26px] text-[#B99B5F]">
          <p>
            Stundenweise Seniorenbetreuung bezieht sich auf eine Art von
            Pflege- und Unterstützungsdienst, bei dem Betreuungspersonen für
            eine bestimmte Anzahl von Stunden pro Tag oder Woche bei
            hilfsbedürftigen Menschen zu Hause im Einsatz sind.
          </p>
          {/* Pjesa e detajuar e pyetjes */}
        </div>
      ),
    },
    {
      question: "Besteht die Option, das Betreuungspersonal selbst zu wählen?",
      answer:
        "Leider nein, aber wir legen sehr grossen Wert darauf, die passenden Mitarbeiter für Ihre Bedürfnisse zu finden.",
    },
    {
      question:
        "Können die Betreuungszeiten individuell und bedarfsorientiert festgelegt werden?",
      answer:
        "Ja, die Betreuungszeiten können online angepasst und ausgewählt werden.",
    },
    {
      question:
        "Wann ist eine stundenweise Betreuung ratsam und für wen ist sie besonders geeignet?",
      answer:
        "Eine stundenweise Betreuung ist ratsam, wenn nur zeitweise Unterstützung benötigt wird.",
    },
    {
      question: "Wann reicht eine stundenweise Betreuung nicht mehr aus?",
      answer:
        "Eine stundenweise Betreuung reicht nicht mehr aus, wenn ein Senior umfassendere Unterstützung benötigt.",
    },
  ];

  return (
    <div className="bg-[#F1F1F1] text-[#B99B5F] min-h-screen p-4">
      <section className="flex flex-col justify-center items-center lg:pt-[110px] text-center">
        <p className="text-[#B99B5F] font-metropolis lg:font-bold lg:text-[48px] text-[32px] font-semibold">
          Vielen Dank!
        </p>
        <p className="text-[#B99B5F] font-metropolis lg:font-bold lg:text-[48px] text-[32px] font-semibold">
          Wir melden uns so schnell wie möglich
        </p>
      </section>
      <section className="mt-[50px] mb-[160px]">
        <h2 className="text-center mb-8 text-[#B99B5F] font-metropolis font-semibold text-[55px]">
          FAQ
        </h2>
        <div className="space-y-4 lg:max-w-[790px] mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b p-[20px] rounded-[20px] bg-white flex flex-col items-start"
            >
              <div className="flex justify-between w-full items-center">
                <p className="font-semibold text-[#B99B5F] text-[20px]">
                  {faq.question}
                </p>
                <span
                  className="text-[#B99B5F] font-semibold text-[25px] cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {openFAQ === index ? "-" : "+"}
                </span>
              </div>
              {openFAQ === index && (
                <p className="text-[#B99B5F] font-light text-[16px] pt-[16px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="text-center mb-[160px]">
        <h2 className="text-[#B99B5F] text-center font-metropolis text-[24px] lg:text-[55px] font-semibold">
          Haben Sie noch weitere Fragen?
        </h2>
        <input
          type="text"
          value={formData.additionalQuestion} // Merr pyetjen nga FormContext
          onChange={handleInputChange} // Përditëso FormContext
          placeholder="Hier Ihre Fragen eintippen"
          className="text-center focus:outline-none text-[#B99B5F] w-full lg:w-[890px] px-4 py-4 border rounded-[20px] mb-4 placeholder:text-[#B99B5F]"
        />
        <br />
        <div className="lg:min-w-[1280px] flex justify-center items-center">
          {!isSubmitted ? (
            <button
              type="button"
              className="bg-[#B99B5F] text-[#F5F5F5] font-metropolis font-bold text-[24px] px-8 py-4 rounded-[8px]"
              onClick={handleClick} // Dërgo të dhënat në API
            >
              Senden
            </button>
          ) : (
            <p className="text-[#B99B5F] font-metropolis font-[600] text-[24px] text-center">
              Vielen Dank - Wir melden uns so schnell wie möglich!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FormPage4;
