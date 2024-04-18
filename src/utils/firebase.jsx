// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTGYENBpu3VqJy6ifhKCNRuaMO3CaYUU",
  authDomain: "animegpt-8e04e.firebaseapp.com",
  projectId: "animegpt-8e04e",
  storageBucket: "animegpt-8e04e.appspot.com",
  messagingSenderId: "212752617707",
  appId: "1:212752617707:web:5844a1d9485cf6cf122eae",
  measurementId: "G-8VP93SDY5E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);



export const auth = getAuth();
