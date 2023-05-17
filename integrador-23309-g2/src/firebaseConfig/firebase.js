// Import the functions you need from the SDKs you need
import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQBU_WmcsE3Dd7zmdxLNETPpWAqLCsH9g",
  authDomain: "integrador-23309-g2.firebaseapp.com",
  projectId: "integrador-23309-g2",
  storageBucket: "integrador-23309-g2.appspot.com",
  messagingSenderId: "794001888434",
  appId: "1:794001888434:web:7230dc1445f5f6714565ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);