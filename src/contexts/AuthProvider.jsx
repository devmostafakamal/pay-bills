import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("has currentUser", currentUser);
  //   } else {
  //     console.log(currentUser);
  //   }
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    loading,
    user,
    createUser,
    signInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
