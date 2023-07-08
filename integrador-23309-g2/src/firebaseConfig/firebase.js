// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk8o1aroIWdSLuui_9zzm3cNJ0O0kDyFc",
  authDomain: "crud-react-23309.firebaseapp.com",
  projectId: "crud-react-23309",
  storageBucket: "crud-react-23309.appspot.com",
  messagingSenderId: "716198988824",
  appId: "1:716198988824:web:46ce918ae2ab3e8ea2076d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)