# 🌐 Personal Portfolio Website

A modern and responsive full-stack portfolio website showcasing my projects, experience, certifications, and technical skills. Built with a clean UI, animated components, dark mode support, interactive certificate gallery, and a functional contact form powered by Node.js and Nodemailer.

**HTML • CSS • JavaScript • Node.js • Express • Nodemailer**

---

## ✨ Features

### 🎨 Modern UI & Smooth Animations

* Elegant and responsive design.
* Scroll reveal animations.
* Interactive hover effects.
* Professional typography and layout.

### 🌙 Dark Mode Support

* Toggle between light and dark themes.
* Theme preference stored using Local Storage.
* Smooth color transitions.

### 🖼️ Certificate Gallery

* Clickable certification cards.
* Full-screen modal preview.
* Zoom animation and click-outside closing support.

### 📩 Contact Form with Backend Integration

* Built using Express.js and Nodemailer.
* Sends messages directly to email.
* Form validation and error handling.
* Real-time success and failure feedback.

### 📱 Fully Responsive Design

* Mobile-friendly navigation.
* Adaptive layouts for tablets and desktops.
* Smooth user experience across devices.

### 🚀 Interactive Sections

* Hero section with animated data-network graphics.
* Timeline-based experience section.
* Project cards with hover effects.
* Skills and technology tags.

---

## 🏗️ Project Architecture

```text
Portfolio Website
        │
        ▼
Frontend (HTML + CSS + JavaScript)
        │
        ▼
Contact Form
        │
        ▼
Express Backend
        │
        ▼
Nodemailer
        │
        ▼
Gmail Inbox
```

---

## 📂 Project Structure

```text
Portfolio Website
│
├── index.html
├── style.css
├── script.js
├── shrijita.png
│
├── certificates
│   ├── java.jpg
│   ├── oracle.jpg
│   ├── python.jpg
│   └── ai-builder.jpg
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm
* Gmail account
* App Password for Gmail

---

### 1. Clone the Repository

```bash
git clone https://github.com/ctrl-shrijita/portfolio-website.git

cd portfolio-website
```

---

### 2. Install Backend Dependencies

```bash
cd backend

npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_app_password
```

---

### 4. Start the Backend Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

### 5. Launch the Frontend

Open:

```text
index.html
```

or use VS Code Live Server.

---

## ⚙️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome

### Backend

* Node.js
* Express.js
* Nodemailer
* dotenv
* CORS

---

## 🎯 Key Sections

### Home

Professional introduction and social links.

### About

Education, technical skills, and career interests.

### Experience

Timeline-based work experience and training.

### Projects

Featured software and machine learning projects.

### Certifications

Interactive certificate gallery with image preview.

### Contact

Functional contact form with email integration.

---

## 🔒 Security Notes

* Environment variables are stored separately using `.env`.
* Sensitive credentials are excluded using `.gitignore`.
* Backend APIs use JSON request validation.

---

## 🔮 Future Improvements

* Deploy frontend on Vercel.
* Deploy backend on Render.
* Add typing animation.
* Add project screenshots.
* Add GitHub contribution statistics.
* Add visitor counter.
* Integrate MongoDB for storing messages.
* Add blog section.
* Add custom domain.

---

## 👩‍💻 Author

### Shrijita Ghosh

**Pre-Final Year B.Tech CSE (Data Science)**
Haldia Institute of Technology

🔗 GitHub: https://github.com/ctrl-shrijita

🔗 LinkedIn: https://linkedin.com/in/shrijita-ghosh-024843251

---

⭐ If you found this project useful, consider giving it a star!
