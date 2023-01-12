// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUmKv3Dh3ddMlBRGB0eZkHnYSAMpL9CSY",
  authDomain: "genius-car-services-aa57e.firebaseapp.com",
  projectId: "genius-car-services-aa57e",
  storageBucket: "genius-car-services-aa57e.appspot.com",
  messagingSenderId: "964508669122",
  appId: "1:964508669122:web:15af97629ea298c9f4d75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;