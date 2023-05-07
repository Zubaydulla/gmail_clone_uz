import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByeXpE9MP5SJv2rvnXSnVxGccC_goXYCQ",
  authDomain: "clone-oz.firebaseapp.com",
  projectId: "clone-oz",
  storageBucket: "clone-oz.appspot.com",
  messagingSenderId: "251902205739",
  appId: "1:251902205739:web:0a41954b507d86500b2f6e",
  measurementId: "G-3ST0TSXQHX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = firebase.auth();
const auth = getAuth(app);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
