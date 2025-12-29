VEE — Real-Time Video Conferencing Platform
VEE is a high-performance, full-stack video communication platform built to handle real-time media streaming. By utilizing WebRTC and Socket.io, it provides a seamless experience for video calls, screen sharing, and instant messaging.

🔗 Live Links
Frontend: https://vee-voice-eye-expression-frontend.onrender.com

Backend: https://vee-voice-eye-expression-backend.onrender.com

🌟 Key Features
Peer-to-Peer Video Calling: Powered by WebRTC for ultra-low latency audio and video transmission directly between browsers.

Real-Time Signaling: Uses Socket.io to manage room coordination, allowing users to join rooms and exchange connection data (SDP and ICE candidates) instantly.

Screen Sharing: Integrated the getDisplayMedia API, allowing users to share their entire screen or specific windows during a call.

Media Controls: User-friendly toggles to mute/unmute microphones and enable/disable cameras for privacy management.

Live Chat: A persistent side-bar chat built for real-time text communication without disrupting the active video session.

Secure Authentication: User data is protected using Bcrypt for password hashing, with account and room data managed in MongoDB.

🛠️ Tech Stack
Frontend

Library: React 18

UI Framework: Material UI (MUI)

Real-time Media: WebRTC API

Communication: Socket.io-client, Axios

Backend

Framework: Node.js, Express.js

Database: MongoDB (Mongoose)

Signaling Server: Socket.io

Security: Bcrypt (Hashing), Crypto

📐 How it Works
The platform follows a standard WebRTC architecture to establish connections:

Signaling: Users connect to the Express server via Socket.io to find each other.

Handshake: Peers exchange SDP (Session Description Protocol) to agree on video/audio formats.

ICE Candidates: Browsers exchange network information to find the best path to connect through firewalls.

P2P Stream: Once connected, the video data travels directly between users, ensuring the server isn't bogged down by heavy video data.

⚙️ Installation & Setup
1. Clone the Repository
Bash

git clone https://github.com/GreyTheCoder/VEE.git
cd VEE
2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file with:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the server: npm start

3. Frontend Setup
Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the application: npm start

Visit http://localhost:3000 to start a call.

🧠 Technical Challenges & Learning
Network Traversal: Solved issues with users connecting from different networks by implementing ICE candidate exchange logic.

Media Stream Management: Learned how to dynamically add and remove "tracks" from a stream to handle muting and screen-sharing transitions smoothly.

Synchronous State: Managed complex React state to ensure the UI updates instantly when a peer joins or leaves a room.

👤 Author
Gaurav Singh

GitHub: @GreyTheCoder
