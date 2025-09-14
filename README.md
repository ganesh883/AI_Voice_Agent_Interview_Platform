# Prepwise - AI-Powered Interview Preparation Platform

![Project Banner]((https://img.icons8.com/fluency/96/000000/artificial-intelligence.png))  

**Prepwise** is a job interview preparation platform powered by **Vapi AI** voice agents, built to help users practice interviews, receive instant AI feedback, and track their progress. This project combines **Next.js**, **Tailwind CSS**, **Firebase**, and AI integrations for a modern and interactive experience.

---

## 🤖 Introduction
Prepwise allows users to simulate job interviews with AI-driven voice agents. Using Next.js for frontend and backend logic, Firebase for authentication and storage, Tailwind CSS for styling, and Vapi AI for conversation simulation, Prepwise provides:

- Real-time AI interview simulations  
- Instant feedback and transcript analysis  
- Modern, responsive UI/UX  

Join our **Discord community** for support, feedback, and discussions on project bugs or improvements.

---

## ⚙️ Tech Stack
- **Frontend & Backend:** Next.js  
- **Authentication & Database:** Firebase  
- **Styling:** Tailwind CSS, shadcn/ui  
- **AI & Voice Agents:** Vapi AI, Google Gemini  
- **Validation & Utilities:** Zod  

---

## 🔋 Features
- **Authentication:** Sign up and login with email/password via Firebase.  
- **Create AI Interviews:** Generate interview sessions using Vapi AI and Google Gemini.  
- **AI Feedback:** Get instant feedback from AI on your interview performance.  
- **Dashboard:** Track all interviews, transcripts, and feedback.  
- **Interview Page:** Conduct AI-driven interviews with voice agents and real-time responses.  
- **Modern UI/UX:** Clean, responsive, and user-friendly design.  
- **Code Reusability:** Structured architecture for scalable development.  

---

## 🤸 Quick Start

### Prerequisites
Make sure the following are installed:
- Git  
- Node.js  
- npm  

### Clone Repository
```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
```


###Install Dependencies
```bash
npm install
```

Set Up Environment Variables

Create a .env.local file in the project root and add your credentials:


```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Run Project

```bash
npm run dev
```
