const SibApiV3Sdk = require('sib-api-v3-sdk');

module.exports = async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false
        });
    }

    const { name, email, message } = req.body;

    try {

        const client = SibApiV3Sdk.ApiClient.instance;

        const apiKey = client.authentications['api-key'];

        apiKey.apiKey = process.env.BREVO_API_KEY;

        const tranEmailApi =
            new SibApiV3Sdk.TransactionalEmailsApi();

        await tranEmailApi.sendTransacEmail({

            sender: {
                email: "shrijitaghosh7@gmail.com",
                name: "Portfolio Website"
            },

            to: [
                {
                    email: "shrijitaghosh7@gmail.com"
                }
            ],

            subject: "New Portfolio Contact Message",

            htmlContent: `
                <h2>New Message From Portfolio</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `
        });

        res.status(200).json({
            success: true
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });
    }
}