// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC3GP_4E0JGJiOKdKurNhGTaQJCRmI5b0",
  authDomain: "cn-firebase-project-4b6f9.firebaseapp.com",
  projectId: "cn-firebase-project-4b6f9",
  storageBucket: "cn-firebase-project-4b6f9.appspot.com",
  messagingSenderId: "844232068195",
  appId: "1:844232068195:web:c7a0ee5cd62803416a3c56",
  measurementId: "G-4ENJXR0ESE"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);