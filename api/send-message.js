const SibApiV3Sdk = require('sib-api-v3-sdk');

async function getJsonBody(req) {
    if (req.body && typeof req.body === 'object') {
        return req.body;
    }

    const chunks = [];
    for await (const chunk of req) {
        chunks.push(chunk);
    }

    const rawBody = Buffer.concat(chunks).toString();
    if (!rawBody) {
        return {};
    }

    try {
        return JSON.parse(rawBody);
    } catch (error) {
        return {};
    }
}

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }

    const { name, email, message } = await getJsonBody(req);

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Missing name, email, or message'
        });
    }

    try {
        const client = SibApiV3Sdk.ApiClient.instance;
        const apiKey = client.authentications['api-key'];
        apiKey.apiKey = process.env.BREVO_API_KEY;

        const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

        await tranEmailApi.sendTransacEmail({
    sender: {
        email: 'shrijitaghosh7@gmail.com',
        name: 'Portfolio Website'
    },
    to: [
        {
            email: 'shrijitaghosh7@gmail.com',
            name: 'Shrijita Ghosh'
        }
    ],
    replyTo: {
        email: email,
        name: name
    },
    subject: 'New Portfolio Contact Message',
    htmlContent: `
        <h2>New Message From Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `
});

        return res.status(200).json({
            success: true
        });
    } catch (error) {
        console.error('Brevo send error:', error);
        return res.status(500).json({
            success: false,
            error: 'Unable to send message'
        });
    }
};