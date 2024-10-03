// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAGIw91GIeoPEtk5_A7b3PKFkgk7g8SpI",
  authDomain: "g-432-7ecf5.firebaseapp.com",
  projectId: "g-432-7ecf5",
  storageBucket: "g-432-7ecf5.appspot.com",
  messagingSenderId: "41974322636",
  appId: "1:41974322636:web:8e6dd586ff908954c37969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

