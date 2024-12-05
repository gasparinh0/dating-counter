// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1G7B_9N0O2jvICuc083hP49yXsj_QzA",
  authDomain: "dating-counter.firebaseapp.com",
  databaseURL: "https://dating-counter-default-rtdb.firebaseio.com",
  projectId: "dating-counter",
  storageBucket: "dating-counter.firebasestorage.app",
  messagingSenderId: "665099090633",
  appId: "1:665099090633:web:7570d551c9c6175d162b18",
  measurementId: "G-P6N064TC09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app