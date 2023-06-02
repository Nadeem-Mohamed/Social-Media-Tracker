// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDInyKoK-oESCtWYVUNhKiTBPmPcJPQqXM",
  authDomain: "social-media-tracker-b7c95.firebaseapp.com",
  projectId: "social-media-tracker-b7c95",
  storageBucket: "social-media-tracker-b7c95.appspot.com",
  messagingSenderId: "572924099123",
  appId: "1:572924099123:web:c6ce98b913be8e8dfe0146",
  measurementId: "G-LS6XMG3KX9"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);