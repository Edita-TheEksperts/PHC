import React, { useState } from "react";

export default function FormPage01() {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      subject: `Region: ${region}`, // Dërgon rajonin si pjesë të subjektit
      message,
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
        alert(result.message); // Tregon mesazhin e suksesit nga backend-i
      } else {
        alert(result.message); // Tregon mesazhin e gabimit nga backend-i
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
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

      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows="4"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
