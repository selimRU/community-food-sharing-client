import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig/FirbaseConfig";

const provider = new GoogleAuthProvider();
export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google login
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with pass and email
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // upadate profile
    const profileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // logOut 
    const logOut = () => {
        return signOut(auth)
    }
    // state Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe()

    }, [])

    const values = {
        loginWithGoogle,
        createUser,
        logIn,
        profileUpdate,
        logOut,
        user,
        loading,
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;