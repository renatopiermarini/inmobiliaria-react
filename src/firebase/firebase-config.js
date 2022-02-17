import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQGYmWfq4jCjQKlAcXqyJPK1aZ2fpCXpw",
  authDomain: "react-inmobiliaria-89bc3.firebaseapp.com",
  projectId: "react-inmobiliaria-89bc3",
  storageBucket: "react-inmobiliaria-89bc3.appspot.com",
  messagingSenderId: "425625322142",
  appId: "1:425625322142:web:b71607135a0fd6efc5b18f",
  measurementId: "G-JFWTEBJ4SW",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then((user) => {
    const userCred = user.user;
    return userCred;
  });
};

export { app, db, auth, login };
