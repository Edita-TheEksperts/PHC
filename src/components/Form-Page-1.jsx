import React, { useState } from "react";

export default function FormPage01() {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      name: "Your Name",
      email: "example@example.com",
      subject: "Test Subject",
      message: "This is a test message",
    };
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Region:</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          required
        >
          <option value="">Select Region</option>
          <option value="Kanton Aargau">Kanton Aargau</option>
          <option value="Kanton Bern">Kanton Bern</option>
          {/* Shto opsione të tjera sipas nevojës */}
        </select>
      </div>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
