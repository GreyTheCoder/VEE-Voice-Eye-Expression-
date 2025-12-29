VEE — Voice, Eye, Expression AI Assistant
VEE is a sophisticated MERN stack application that bridges the gap between human-like interaction and AI. By leveraging the OpenAI API, it provides a seamless chat experience with real-time streaming, secure authentication, and persistent memory.

🔗 Live Links
Frontend: https://vee-voice-eye-expression-frontend.onrender.com

Backend: https://vee-voice-eye-expression-backend.onrender.com

🌟 Key Features
Real-Time AI Streaming: Integrated OpenAI's streaming API to deliver responses word-by-word, simulating a natural "typing" effect.

Live Communication: Powered by Socket.io for real-time bi-directional communication between the client and server.

Secure Authentication: Implemented user security using Bcrypt for password hashing and managed sessions to keep data private.

Persistent Conversations: All chat histories are stored in MongoDB, allowing users to resume their conversations across different sessions.

Rich UI Rendering: Built with Material UI (MUI) for a polished look, including full support for Markdown and syntax-highlighted code blocks.

🛠️ Tech Stack
Frontend

Framework: React 18

UI Components: Material UI (MUI), Emotion

Real-time: Socket.io-client

State & Routing: React Router DOM, Axios

Backend

Environment: Node.js, Express.js

Database: MongoDB via Mongoose

Security: Bcrypt (Hashing), Crypto

Real-time: Socket.io (Server)

AI Integration: OpenAI SDK

📐 System Architecture
⚙️ Installation & Setup
1. Clone the Repository
Bash

git clone https://github.com/GreyTheCoder/VEE.git
cd VEE
2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_key
Start the server: npm start (or npm run dev for nodemon)

3. Frontend Setup
Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the application: npm start

Access the app at http://localhost:3000

🧠 Key Learnings
Socket Management: Learned how to handle real-time events and maintain stable connections between the user and the AI.

Data Security: Focused on protecting user data using industry-standard hashing (Bcrypt) and secure environment variables for API keys.

UX Optimization: Balanced the speed of AI streaming with a clean, responsive interface using Material UI.

👤 Author
Gaurav Singh

GitHub: @GreyTheCoder

Role: Full Stack Developer
