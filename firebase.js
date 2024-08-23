// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW4qrFJPg4lgPKE3w7WUf7_xG41teB2bo",
  authDomain: "flashcard-saas-c7d4a.firebaseapp.com",
  projectId: "flashcard-saas-c7d4a",
  storageBucket: "flashcard-saas-c7d4a.appspot.com",
  messagingSenderId: "168375023195",
  appId: "1:168375023195:web:50d0a1ea13ec9194c0b17e",
  measurementId: "G-GH2ZPDH629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}
