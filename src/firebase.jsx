// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACHzFFypiwMD8mKSSi9PqI8KjkaGK8RYw",
  authDomain: "project3-bbc5f.firebaseapp.com",
  projectId: "project3-bbc5f",
  storageBucket: "project3-bbc5f.appspot.com",
  messagingSenderId: "604117798429",
  appId: "1:604117798429:web:f9661150a405a58f63c0f4",
  measurementId: "G-L1630C6VYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;