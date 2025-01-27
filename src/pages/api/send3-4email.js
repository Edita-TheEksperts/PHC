import formidable from "formidable";
import fs from "fs";
import axios from "axios";
import qs from "querystring";

export const config = {
  api: {
    bodyParser: false, // Çaktivizo bodyParser për të përdorur formidable
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
        client_secret: "kq58Q~2_COSQYEL8ytpD83woX80WmYeLd-JGfcdI",
        scope: "https://graph.microsoft.com/.default",
      })
    );
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    throw new Error("Failed to fetch access token");
  }
};

// Funksioni kryesor për trajtimin e kërkesave
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
        const accessToken = await getAccessToken();

        // Përgatitni përmbajtjen e emailit
        let emailContent = `Sie haben eine neue Formularübermittlung erhalten:\n\n`;
        emailContent += `Name: ${fields.name || "N/A"}\n`;
        emailContent += `Email: ${fields.email || "N/A"}\n`;
        emailContent += `Region: ${fields.region || "N/A"}\n`;

        // Përfshi temat e zgjedhura nga Form-Page-3
        if (fields.selectedTopics) {
          const topics = Array.isArray(fields.selectedTopics)
            ? fields.selectedTopics.join(", ")
            : fields.selectedTopics;
          emailContent += `Selected Topics: ${topics}\n`;
        }

        // Përfshi pyetjen shtesë nga Form-Page-4
        emailContent += `Additional Question: ${fields.additionalQuestion || "N/A"}\n`;

        const emailBody = {
          message: {
            subject: `Neues Formular wird eingereicht`,
            body: {
              contentType: "Text",
              content: emailContent,
            },
            toRecipients: [
              { emailAddress: { address: "edita.latifi@the-eksperts.com" } },
              { emailAddress: { address: "fisnik.salihu@the-eksperts.com" } },

            ],
          },
        };

        // Kontrollo nëse ekziston ndonjë skedar për t'u bashkangjitur
        if (files.cv && Array.isArray(files.cv) && files.cv[0]?.filepath) {
          const cvFile = files.cv[0];
          const cvFileContent = fs.readFileSync(cvFile.filepath, { encoding: "base64" });
          emailBody.message.attachments = [
            {
              "@odata.type": "#microsoft.graph.fileAttachment",
              name: cvFile.originalFilename,
              contentBytes: cvFileContent,
            },
          ];
        }

        // Dërgo emailin
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
