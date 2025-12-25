let IS_PROD = true;
const server = IS_PROD ?
    "https://vee-voice-eye-expression-backend.onrender.com":

    "http://localhost:8000"


export default server;