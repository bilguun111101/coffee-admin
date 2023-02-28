import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTRYuz3WBhrtrbJzt-wQU1r-IYo0YeBcg",
    authDomain: "coffee-app-ded58.firebaseapp.com",
    projectId: "coffee-app-ded58",
    storageBucket: "coffee-app-ded58.appspot.com",
    messagingSenderId: "1093842468152",
    appId: "1:1093842468152:web:cfc5f1bbed47b654ed15cd",
    measurementId: "G-DG6LXNPT4Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

