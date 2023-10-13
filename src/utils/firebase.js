// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-apps-nextjs.firebaseapp.com",
  projectId: "blog-apps-nextjs",
  storageBucket: "blog-apps-nextjs.appspot.com",
  messagingSenderId: "215072137580",
  appId: "1:215072137580:web:a76111bad29d5fb60f1349"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);