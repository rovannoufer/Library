import { createContext, useEffect, useState, useContext } from "react";
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged,
     GoogleAuthProvider,
     signInWithPopup
} from 'firebase/auth';

import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
       const [user, setUser] = useState("");
       
       function signUp(email, password){
                return createUserWithEmailAndPassword(auth, email, password);
       }
       function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
       }
       function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

       useEffect(() => {
             const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
             });
             return () => {
                unsubscribe();
             }
       }, []);
       return(
        <userAuthContext.Provider value={{user, signUp, logIn, googleSignIn}}>
            {children}
        </userAuthContext.Provider>
       );
}


export function useUserAuth(){
    return useContext(userAuthContext);
}