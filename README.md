<<<<<<< HEAD
# Modern Login with Google Sign-In

A premium, responsive login application built with HTML, CSS, JavaScript, and Node.js.

## Project Structure
- `/frontend`: Contains the UI (HTML, CSS, JS). Runs on port 3000.
- `/backend`: Node.js Express server handling OAuth. Runs on port 5000.

## Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- A Google Cloud Project for OAuth credentials.

### 2. Get Google OAuth Credentials
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Search for **APIs & Services** > **OAuth consent screen**. Set it up as "External".
4. Go to **Credentials** > **Create Credentials** > **OAuth client ID**.
5. Select **Web application**.
6. Add Authorized Redirect URIs: `http://localhost:5000/auth/google/callback`.
7. Copy your **Client ID** and **Client Secret**.

### 3. Configure Environment Variables
1. Open `backend/.env`.
2. Replace the placeholders with your actual credentials:
   ```env
   GOOGLE_CLIENT_ID=your_id_here
   GOOGLE_CLIENT_SECRET=your_secret_here
   ```

### 4. Run the Application
You will need two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- ✨ Glassmorphism UI Design
- 📱 Fully Responsive Layout
- 🔐 Secure Google OAuth 2.0 Integration
- 👤 Dynamic User Dashboard
=======
# login-page
>>>>>>> d3b56abf3eb7129eef3f72e3c713b1c9fb42aa67
