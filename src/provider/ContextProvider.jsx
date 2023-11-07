import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig/FirbaseConfig";
import axios from "axios";

const provider = new GoogleAuthProvider();
export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [featureFoods, setFeatureFoods] = useState([])
    const [requestFoods, setRequestFoods] = useState([])
    const [count, setCount] = useState('')
    const [manageFoods, setManageFoods] = useState([])


    // available foods count
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/availableFoodsCount')
            .then(res => {
                console.log(res.data);
                setCount(res.data)
            })
    }, [])

    // available foods
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/availableFoods')
            .then(res => {
                console.log(res.data);
                setManageFoods(res.data)
            })
    }, [])

    // faetureFoods
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/featureFood')
            .then(res => {
                console.log(res.data);
                setFeatureFoods(res.data)
            })
    }, [])

// requested foods
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/requestedFoodDisplayed')
            .then(res => {
                console.log(res.data);
                setRequestFoods(res.data)
            })
    }, [])

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
        featureFoods,
        requestFoods,
        count,
        manageFoods
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;