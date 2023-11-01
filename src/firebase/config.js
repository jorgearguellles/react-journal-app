// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHwFkpG6HtsFsODPRDb-AjI6phcZo0NLY",
    authDomain: "react-journal-2023.firebaseapp.com",
    projectId: "react-journal-2023",
    storageBucket: "react-journal-2023.appspot.com",
    messagingSenderId: "881692695153",
    appId: "1:881692695153:web:c110471988a4fd06b419d0",
    measurementId: "G-9TBJGTH01R",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
