// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7bsl8RJ5l-p1aOxYqUmkS56fn-kDotpk",
  authDomain: "cprg306-assignments-2d741.firebaseapp.com",
  projectId: "cprg306-assignments-2d741",
  storageBucket: "cprg306-assignments-2d741.firebasestorage.app",
  messagingSenderId: "899343887889",
  appId: "1:899343887889:web:d5285c513696aaab44cbb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);