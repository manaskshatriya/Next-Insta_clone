// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPIiTwWDxrTlkFuoFO_BXHSVsR3E7EJ0",
  authDomain: "insta-clone-c1a59.firebaseapp.com",
  projectId: "insta-clone-c1a59",
  storageBucket: "insta-clone-c1a59.appspot.com",
  messagingSenderId: "329841717753",
  appId: "1:329841717753:web:265e7d5265de3416610d28",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app , db, storage}; 