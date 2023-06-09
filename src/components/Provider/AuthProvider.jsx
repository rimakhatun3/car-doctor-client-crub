import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase_config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loadding,setLoadding] = useState(true)

const createUser =(email,password)=>{
    setLoadding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn=(email,password)=>{
    setLoadding(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut =()=>{
    return signOut(auth)
}

useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoadding(false)
    })
    return unsubscribe

},[])


const AuthInfo ={ 
user,
loadding,
createUser,
signIn,
logOut
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;