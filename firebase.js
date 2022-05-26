// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {...} from "firebase/auth";
import {...} from "firebase/database";
import {...} from "firebase/firestore";
import {...} from "firebase/functions";
import {...} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOIsm8AC-0hCWtvGjifEMU01lMq1GOrhg",
  authDomain: "signal-b7293.firebaseapp.com",
  projectId: "signal-b7293",
  storageBucket: "signal-b7293.appspot.com",
  messagingSenderId: "372481455570",
  appId: "1:372481455570:web:ae22faf4a2b133fad6440b",
};

// Initialize Firebase
let app;

if (firebaseConfig.app.length===0){
    const app = initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}

export {db, auth};