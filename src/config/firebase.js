// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtP7q4hzrX2GWV8kpbP_zPCKnivCO3IMQ",
  authDomain: "bboy-creative-d14df.firebaseapp.com",
  projectId: "bboy-creative-d14df",
  storageBucket: "bboy-creative-d14df.appspot.com",
  messagingSenderId: "635293309401",
  appId: "1:635293309401:web:3ed99e1fa7553570a621c8",
  measurementId: "G-76X4Y1LH9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);