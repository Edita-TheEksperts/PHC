import formidable from "formidable";
import fs from "fs";
import axios from "axios";
import qs from "querystring";

export const config = {
  api: {
    bodyParser: false, 
  },
};

// Funksioni për të marrë Access Token
const getAccessToken = async () => {
  try {
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/5e12d93e-3010-46f9-a55f-17db43b3fcc9/oauth2/v2.0/token`,
      qs.stringify({
        grant_type: "client_credentials",
        client_id: "6b3c8303-3397-46d6-bee8-49192f0ad4f0",
        client_secret: "",
        scope: "https://graph.microsoft.com/.default",
      })
    );
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    throw new Error("Failed to fetch access token");
  }
};

// Trajtimi i kërkesës POST
export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: "Error parsing form" });
      }

      console.log("Fields:", fields);
      console.log("Files:", files);

      try {
        // Përgatitni emailin
        const accessToken = await getAccessToken();
        const emailBody = {
          message: {
            subject: `Neues Formular wird eingereicht`,
            body: {
              contentType: "Text",
              content: `Sie haben eine neue Formularübermittlung erhalten:\n\nName: ${fields.name}\nEmail: ${fields.email}\nRegion: ${fields.region}\nQuestions: ${fields.questions}`,
            },
            toRecipients: [
              { emailAddress: { address: "edita.latifi@the-eksperts.com" } },
              { emailAddress: { address: "fisnik.salihu@the-eksperts.com" } },
            ],
          },
        };

        // Kontrollo nëse ekziston skedari CV dhe shtoje si bashkëngjitje
        if (files.cv && Array.isArray(files.cv) && files.cv[0]?.filepath) {
          const cvFile = files.cv[0]; // Merre elementin e parë të listës
          const cvFileContent = fs.readFileSync(cvFile.filepath, { encoding: "base64" });
          emailBody.message.attachments = [
            {
              "@odata.type": "#microsoft.graph.fileAttachment",
              name: cvFile.originalFilename,
              contentBytes: cvFileContent,
            },
          ];
        }

        const emailResponse = await axios.post(
          "https://graph.microsoft.com/v1.0/users/edita.latifi@the-eksperts.com/sendMail",
          emailBody,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Email sent:", emailResponse.status);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
