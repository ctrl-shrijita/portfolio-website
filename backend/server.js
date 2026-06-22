const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
}
});

app.post("/send-message", async (req, res) => {

const { name, email, message } = req.body;

try {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,

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