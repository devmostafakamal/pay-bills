// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAKPALQoe2q6lElh-Ji0qIq7heQFDP9us",
  authDomain: "paybill-8b421.firebaseapp.com",
  projectId: "paybill-8b421",
  storageBucket: "paybill-8b421.firebasestorage.app",
  messagingSenderId: "261904342489",
  appId: "1:261904342489:web:fd0edb21fb6eedc9e80dc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
