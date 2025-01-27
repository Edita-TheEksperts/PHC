import Link from "next/link";
import { useState, useContext } from "react";
  import { FormContext } from "./FormContext";

export default function FormPage02() {
  const { formData, setFormData } = useContext(FormContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("region", formData.region);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("questions", formData.questions);
  
      // Kontrollo nëse skedari ekziston dhe shtoje në FormData
      if (formData.cv) {
        formDataToSend.append("cv", formData.cv, formData.cv.name); // Shto skedarin me emrin e tij
      }
  
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formDataToSend, // Dërgo të dhënat
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
  return (
    <div className="bg-[#F1F1F1] flex flex-col items-center justify-start p-4">
      <section className="lg:hidden block mt-[50px] ">
      <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto ">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
            Was wir bieten
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Wir bieten dir eine abwechslungsreiche Teilzeitbeschäftigung auf<br></br> Stundenlohnbasis. Du profitierst von viel Flexibilität, einem innovativen<br></br> Unternehmen mit modernen Strukturen, fortschrittlichen Anstellungsbedingungen, Unterstützung durch unser Backoffice<br></br> und einem angenehmen Arbeitsklima.<br></br> Dein Arbeitsort befindet sich immer in der Nähe deines Wohnortes.            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto mt-[35px]">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
            Was bringst du mit
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Als engagierte Persönlichkeit arbeitest du selbstständig und effizient und setzt die Firmenphilosophie konsequent um. Deine Fachkenntnisse ermöglichen es dir, auf die Bedürfnisse der Kunden einzugehen. Gute Deutschkenntnisse sind zwingend erforderlich. Ein eigenes Fahrzeug ist von Vorteil, aber keine Bedingung.            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto mt-[35px]">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
           Dein Aufgabenbereich
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Du betreust fest zugewiesene Privatkunden in deiner Region. Je nach Bedarf kann dein Arbeitsvolumen zwischen ca. 20 % und 100 % liegen. Die Betreuung der Kunden erfolgt in einem regelmässigen Rhythmus.</p>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center mt-[160px] gap-4">
        <h1
          className="text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[55px] leading-[55.2px] text-center"
          style={{
            letterSpacing: "-0.96px",
          }}
        >
          Hast du noch Fragen?
        </h1>
        <input
          type="text"
          placeholder="Deine Fragen eintippen"
          value={formData.questions}
        onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
          className="flex flex-col items-start self-stretch text-center border-[1px] rounded-[20px] border-[#B7B6BA6A] p-[20px] placeholder:text-[#04436F] text-[#04436F] font-metropolis text-[20px] font-light leading-[26px] w-full lg:w-[826px] bg-transparent focus:outline-none"
          />
<div className="container flex justify-center items-center">
      {!isSubmitted ? (
        <button
          type="button"
          className="bg-[#04436F] text-[#F5F5F5] font-metropolis font-bold text-[24px] lg:text-[32px] leading-[21.6px] rounded-[8px] lg:rounded-full px-8 py-4 mb-[150px]"
          onClick={handleClick} // Trigger state change on click
        >
          Senden
        </button>
      ) : (
        <p className="text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[50px] leading-[26.2px] lg:leading-[50.2px] text-center">
          Vielen Dank - Wir melden uns so schnell wie möglich!
        </p>
      )}
    </div>
      </div>
    </div>
  );
}
