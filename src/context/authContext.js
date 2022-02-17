// import { useContext, useState, useEffect, createContext } from "react";
// import { auth } from "../firebase/firebase-config";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   const login = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password).then((user) => {
//       const userCred = user.user;
//       console.log(userCred);
//       return userCred;
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   function logout() {
//     return signOut();
//   }

//   const value = {
//     currentUser,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
