// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcJKNtiNtn0P8jYsaty6G_Y_T85qWVskY",
  authDomain: "contract-app-b2db0.firebaseapp.com",
  projectId: "contract-app-b2db0",
  storageBucket: "contract-app-b2db0.appspot.com",
  messagingSenderId: "535309291572",
  appId: "1:535309291572:web:ae5d48fb4c7c6fcabd7a61",
  measurementId: "G-JK8FTC4DPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
