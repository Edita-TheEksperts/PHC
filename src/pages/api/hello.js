import sendgrid from "@sendgrid/mail";

// Vendos API Key në variablat e mjedisit
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validimi i të dhënave të kërkesës
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const mailData = {
        to: "granitsalihu9@gmail.com", // Adresa ku dërgohen email-et
        from: email, // Adresa e dërguesit (duhet të jetë e verifikuar në SendGrid)
        subject: subject,
        text: message,
        html: `<p>${message}</p>`,
      };

      await sendgrid.send(mailData);
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    // Nëse metoda nuk është POST
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

