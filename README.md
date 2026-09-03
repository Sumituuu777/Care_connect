# CareConnect

CareConnect is a web-based NGO support platform designed to connect people who need assistance with volunteers who can provide support. The platform allows users to submit support requests, register as volunteers, and helps NGO teams organize and prioritize incoming requests.

## 🚀 Features

* Submit support requests through a simple form
* Register as an NGO volunteer
* Store requests and volunteer information using MongoDB
* Dashboard for monitoring support requests and volunteers
* AI-powered support request priority classification
* AI-generated short summaries for NGO volunteers

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

### AI

* Google Gemini API
* Gemini 3.5 Flash-Lite

## 🤖 AI Idea

CareConnect uses AI to automatically analyze submitted support requests and classify their **priority as Low, Medium, or High**. It also generates a short summary of each request.

For example, a request describing an urgent need for essential medicines may be classified as **High Priority**, helping NGO volunteers identify important cases more quickly.

> **Note:** The AI is used only for support organization and prioritization. It does not provide medical diagnosis or medical advice.

## 🌍 NGO Use-Case

NGOs often receive many support requests and may have limited volunteers and resources. CareConnect helps NGO teams organize these requests and quickly identify higher-priority cases.

The dashboard provides an overview of:

* Total support requests
* High-priority requests
* Pending requests
* Registered volunteers
* Volunteer roles and availability

This can help NGOs coordinate volunteers more efficiently and respond to people who need support sooner.

## 📁 Project Structure

```text
CareConnect/
├── src/                 # React frontend
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
│
└── server/              # Node.js backend
    ├── config/
    ├── models/
    ├── routes/
    ├── services/
    └── server.js
```

## ▶️ Running Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside `server/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

## 🎯 Purpose

CareConnect demonstrates how modern web technologies and AI automation can be combined to support NGO operations, improve request organization, and help volunteers respond more effectively.
