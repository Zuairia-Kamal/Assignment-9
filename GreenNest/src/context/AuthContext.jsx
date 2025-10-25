import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  


  const userSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const updateProfileFunc = (updatedData) => {
   
    return updateProfile(auth.currentUser, updatedData).then(() => {
     
      setUser({ ...auth.currentUser });
    });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        userSignin,
        updateProfileFunc,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

