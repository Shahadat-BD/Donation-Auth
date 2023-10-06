// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2SNOvM6_svAr7DuMjhN8Dzu5JGC32zM",
  authDomain: "donation-auth-831cc.firebaseapp.com",
  projectId: "donation-auth-831cc",
  storageBucket: "donation-auth-831cc.appspot.com",
  messagingSenderId: "343175240382",
  appId: "1:343175240382:web:e1692be3b8e3a421ff9cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app