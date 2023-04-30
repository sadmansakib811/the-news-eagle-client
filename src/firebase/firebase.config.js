// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOlmTzIRYBs0u5vXZRK9DIN8koG1gH5fY",
  authDomain: "the-news-eagle.firebaseapp.com",
  projectId: "the-news-eagle",
  storageBucket: "the-news-eagle.appspot.com",
  messagingSenderId: "143534581572",
  appId: "1:143534581572:web:8309198fc5cff397ca1911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;