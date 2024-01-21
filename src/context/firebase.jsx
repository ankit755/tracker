'use client'
import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyBxkOcOUuFZHa2vz8oOU-CKmrJiwPvh6TI",
  authDomain: "tracker-e219b.firebaseapp.com",
  projectId: "tracker-e219b",
  storageBucket: "tracker-e219b.appspot.com",
  messagingSenderId: "955618690691",
  appId: "1:955618690691:web:4ee31efcce0205f5677db6",
  databaseURL: 'https://tracker-e219b-default-rtdb.firebaseio.com/'
};
const firebaserApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaserApp)
const database = getDatabase(firebaserApp);

export const FireBaseContext = createContext(null);
export const useFirebase = () => useContext(FireBaseContext);

const googleProvider = new GoogleAuthProvider()
export const FireBaseProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  const signUpWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
  }
  const putData = (key, data) => {
    set(ref(database, key), {
      data
    })
  }
  const signIn = async (email, password) => {
    let result = null;
   await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(value => { result = value })
      .catch(err => { result = err })

    return result;
  }
  const singOutUser = () => {
    signOut(firebaseAuth);
  }
  const updateUserProfile = async(name) =>{
    await updateProfile(firebaseAuth.currentUser, { displayName: name }).catch(
      (err) => console.log(err)
    );
  }
  return <FireBaseContext.Provider value={{ signupUserWithEmailAndPassword, putData, signUpWithGoogle,
   signIn, singOutUser,isLoggedIn, setIsLoggedIn,updateUserProfile,
   userData, setUserData }}>
    {props.children}
  </FireBaseContext.Provider>
}