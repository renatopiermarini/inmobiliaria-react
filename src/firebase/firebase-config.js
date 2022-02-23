import { initializeApp, getApps, getApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
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

const uploadProperty = async ({
  tipo,
  titulo,
  direccion,
  precio,
  descripcion,
  m2,
  habs,
  bans,
  carac1,
  carac2,
  carac3,
  carac4,
}) => {
  await addDoc(collection(db, "propiedades"), {
    tipo,
    titulo,
    direccion,
    precio: precio !== undefined ? precio : "",
    descripcion,
    m2: m2 !== undefined ? m2 : "",
    habs: habs !== undefined ? habs : "",
    bans: bans !== undefined ? bans : "",
    carac1: carac1 !== undefined ? carac1 : "",
    carac2: carac2 !== undefined ? carac2 : "",
    carac3: carac3 !== undefined ? carac3 : "",
    carac4: carac4 !== undefined ? carac4 : "",
    timestamp: serverTimestamp(),
  });
};

export { app, db, auth, login, uploadProperty };
