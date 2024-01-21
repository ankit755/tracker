'use client'

import { FireBaseContext, FireBaseProvider, firebaseAuth, useFirebase } from '../context/firebase';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Authentication from './auth/page';
import { useRouter } from 'next/navigation';

export default function Home() {

  return (
    <FireBaseProvider>
      <App />
    </FireBaseProvider>
  );
}
const App = () => {
  const {userData,isLoggedIn, setIsLoggedIn} = useContext(FireBaseContext)
  const firebase = useFirebase();
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) setIsLoggedIn(true)
      else setIsLoggedIn(false)
    })
  }, [])

  return (
    <main>
      {isLoggedIn ?
       router.push('/home')
        : <Authentication
          firebase={firebase}
        />}
    </main>
  );
} 