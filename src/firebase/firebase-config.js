import { initializeApp, getApps, getApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

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
const storage = getStorage();
const auth = getAuth();
const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then((user) => {
    const userCred = user.user;
    return userCred;
  });
};

const uploadProperty = async ({
  imagenPrincipal,
  imagen7,
  operacion,
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
  const docRef = await addDoc(collection(db, "propiedades"), {
    operacion,
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
  const imageRefPropiedad = ref(storage, `propiedades/${docRef.id}/image`);
  uploadString(imageRefPropiedad, imagenPrincipal, "data_url").then(
    async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRefPropiedad);
      await updateDoc(doc(db, "propiedades", docRef.id), {
        image: downloadURL,
      });
    }
  );
  for (let i = 0; i < imagen7.length; i++) {
    const photoActual = `imagen${i}`;
    const imageRefPropiedad7 = ref(
      storage,
      `propiedades/${docRef.id}/${photoActual}`
    );
    uploadString(imageRefPropiedad7, imagen7[i][0], "data_url").then(
      async () => {
        const downloadURL = await getDownloadURL(imageRefPropiedad7);
        await updateDoc(doc(db, "propiedades", docRef.id), {
          [photoActual]: downloadURL,
        });
      }
    );
  }
};

export { app, db, auth, login, uploadProperty, storage };
