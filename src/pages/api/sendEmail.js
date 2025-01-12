import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Kontrollo nëse të gjitha fushat janë plotësuar
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ type: "error", message: "All fields are required!" });
    }

    // Krijo përmbajtjen e mesazhit (si në PHP)
    const emailTo = "granitsalihu9@gmail.com"; // Vendos adresën që do të marrë email-et
    const emailFrom = email;
    const body = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    // Logiko për simulimin e dërgimit të email-it
    console.log(`
      Simulated Email Sent!
      ---------------------
      To: ${emailTo}
      From: ${emailFrom}
      Subject: ${subject}
      Message: ${body}
    `);

    // Përgjigje suksesi si në PHP
    return res.status(200).json({
      type: "success",
      message: "Mail Sent. Thank you, we will contact you shortly.",
    });
  } else {
    return res.status(405).json({ type: "error", message: "Method not allowed" });
  }
}
