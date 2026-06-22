const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(
cors({
    origin:
    "https://portfolio-website-r0e0w8379-ctrl-shrijitas-projects.vercel.app"
})
);
app.use(express.json());

const transporter = nodemailer.createTransport({
    
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS
    }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log("VERIFY ERROR:");
        console.log(error);
    } else {
        console.log("SMTP server is ready.");
    }
});

app.post("/send-message", async (req, res) => {

const { name, email, message } = req.body;

try {

    await transporter.sendMail({
    from: `"Portfolio Website" <shrijitaghosh7@gmail.com>`,
    to: "shrijitaghosh7@gmail.com",

    subject: "New Portfolio Contact Message",

    html: `
        <h2>New Message From Portfolio</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
    `
});

    res.status(200).json({
        success: true,
        message: "Message sent successfully"
    });

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: "Failed to send message"
    });
}

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});