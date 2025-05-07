import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword,  } from "firebase/auth";
import { auth } from '../FireBase/Firebase_init';
export const AuthContext = createContext();

const GoogleContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [photoUrl, setPhotoUrl] = useState("");
    const [name, setName] = useState("");


    
    const signInEmailPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    
      

    const login = (email, password) => {
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
       return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])


    const info = {
        signInEmailPassword,
        setUser,
        user,
        login,
        isLoading,
        resetPassword,
        setPhotoUrl,
        setName,
        photoUrl,
        name,
        setIsLoading,
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default GoogleContext;