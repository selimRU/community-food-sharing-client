import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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