'use client'

import { FireBaseContext, useFirebase } from '@/context/firebase';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const Home = () => {
  const firebase = useFirebase();
  const { userData,isLoggedIn, setIsLoggedIn } = useContext(FireBaseContext)
  const router = useRouter();
  function logOut() {
    firebase.singOutUser();
    setIsLoggedIn(false);
    router.push('/');
  }

  return (
    <div>
      <div className='flex justify-between'>
        <h1>Welcome {userData?.displayName}, to Tracker</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <div className='w-[100vw] h-[100vh]'>
        <h3 className='mx-auto'>Tracker is Currently Cooking something......</h3>
      </div>
    </div>
  )
}

export default Home