// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMAo6inT0duM1QyY-IfC7qJHZHYB-2mzA",
  authDomain: "react-dashboard-aad2f.firebaseapp.com",
  projectId: "react-dashboard-aad2f",
  storageBucket: "react-dashboard-aad2f.firebasestorage.app",
  messagingSenderId: "931688888495",
  appId: "1:931688888495:web:d5d1a6cdb4d46a149b7c5a",
  measurementId: "G-Q6G34GYSDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;