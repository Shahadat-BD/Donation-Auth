import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.int';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const googleSignIn = () =>{
    setLoading(true)
  return  signInWithPopup(auth,googleProvider)

}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return () =>{
        unSubscribe()
    }
},[])

const logOut = () =>{
    setLoading(true)
  return signOut(auth)
}

    const userInfo = {
          googleSignIn,
          user,
          setUser,
          logOut,
          loading
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;