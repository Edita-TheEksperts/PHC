import React, { useState } from "react";

export default function FormPage01() {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Për të treguar statusin e ngarkimit

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kontrollo nëse të gjitha fushat janë plotësuar
    if (!region || !name || !email || !message) {
      alert("Please fill out all the fields.");
      return;
    }

    const data = {
      name,
      email,
      subject: `Region: ${region}`, // Subjekti përfshin rajonin
      message,
    };

    try {
      setLoading(true); // Fillon ngarkimi
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Verifikon nëse përgjigja është në rregull
      if (!response.ok) {
        const errorResult = await response.json();
        alert(errorResult.message || "Failed to send the email.");
        return;
      }

      const result = await response.json();
      alert(result.message || "Form submitted successfully!");
      // Pastro fushat e formës pas dërgimit
      setRegion("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Përfundon ngarkimi
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="region">Region:</label>
        <select
          id="region"
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows="4"
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
