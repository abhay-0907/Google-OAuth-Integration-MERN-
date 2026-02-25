Google OAuth 2.0 Integration (MERN Stack)
A full-stack implementation of Google Authentication using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates a secure way to authenticate users using Google’s OAuth 2.0 endpoints, allowing users to sign in with their Google accounts seamlessly.

🚀 Features
Google One-Tap/Social Login: Quick and secure user authentication.

JWT Authorization: Secure communication between Frontend and Backend using JSON Web Tokens.

Persistent Sessions: User data is stored in MongoDB upon first login.

Clean Architecture: Separated concerns with Controllers, Services, and Routes in the Backend.

Vite-Powered Frontend: Fast development and optimized production builds.

🛠️ Tech Stack
Frontend: React.js, Vite, Axios

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: Google OAuth 2.0, JWT (jsonwebtoken)

### 📂 Project Structure

```text
.
├── Backend/
│   ├── src/
│   │   ├── config/       # Database connection
│   │   ├── controllers/  # Logic for Auth handling
│   │   ├── models/       # User Schema (Google ID, Email, etc.)
│   │   ├── routes/       # Auth API endpoints
│   │   ├── services/     # Business logic for OAuth
│   │   └── utils/        # Google API configuration
└── Frontend/
    ├── src/
    │   ├── components/   # Auth Wrappers
    │   ├── pages/        # Home, Auth, and NotFound pages
    │   └── lib/          # API/Axios configuration
