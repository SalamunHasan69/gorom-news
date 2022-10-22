// import React, { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config"


// export const AuthContext = createContext();
// export const auth = getAuth(app);


// const UserContext = ({ children }) => {
//   const [user, setUSer] = useState(null);
//   const googleProvider = new GoogleAuthProvider();

//   const createUser = () => {
//     return signInWithPopup(auth, googleProvider)
//   }

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUSer(currentUser)
//     })
//     return () => {
//       unSubscribe();
//     }
//   }, [])

//   const authInfo = { user, createUser };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default UserContext;