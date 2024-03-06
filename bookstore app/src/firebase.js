// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-bookstore-43673.firebaseapp.com",
  projectId: "mern-bookstore-43673",
  storageBucket: "mern-bookstore-43673.appspot.com",
  messagingSenderId: "21035021568",
  appId: "1:21035021568:web:2f6130239ed7aacc282fe5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);