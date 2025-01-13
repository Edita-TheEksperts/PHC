import axios from 'axios';
import qs from 'querystring';

// Replace with your Azure AD credentials
const tenantId = '5e12d93e-3010-46f9-a55f-17db43b3fcc9';
const clientId = '6b3c8303-3397-46d6-bee8-49192f0ad4f0';
const clientSecret = '';

const getAccessToken = async () => {
    try {
        const tokenResponse = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            qs.stringify({
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
                scope: 'https://graph.microsoft.com/.default',
            })
        );
        return tokenResponse.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        throw new Error('Failed to fetch access token');
    }
};

const sendEmail = async (formData) => {
    try {
        const accessToken = await getAccessToken();

        const emailResponse = await axios.post(
            'https://graph.microsoft.com/v1.0/users/edita.latifi@the-eksperts.com/sendMail',
            {
                message: {
                    subject: `New Form Submission: ${formData.subject || 'No Subject'}`,
                    body: {
                        contentType: 'Text',
                        content: `You have received a new form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
                    },
                    toRecipients: [
                        {
                            emailAddress: {
                                address: 'edita.latifi@the-eksperts.com', // Replace with the recipient email
                            },
                        },
                        {
                            emailAddress: {
                                address: 'edita.latifi@the-eksperts.com', // Replace with the recipient email
                            },
                        },
                    ],
                },
                saveToSentItems: 'true',
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Email sent:', emailResponse.status);
        return emailResponse.status;
    } catch (error) {
        console.error('Error sending email:', error.response?.data || error.message);
        throw new Error('Failed to send email');
    }
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;
            const emailStatus = await sendEmail(formData);
            res.status(200).json({ message: 'Email sent successfully', status: emailStatus });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
