// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe_XGrzeubDQyHHge-ol-OfVv88ad5eZA",
  authDomain: "hack4good-33c99.firebaseapp.com",
  projectId: "hack4good-33c99",
  storageBucket: "hack4good-33c99.appspot.com",
  messagingSenderId: "876909787189",
  appId: "1:876909787189:web:1a1dcb627e896e46cd997c",
  measurementId: "G-RCS8X8QXQX"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_FS = getFirestore(FIREBASE_APP);