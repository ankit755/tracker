'use client'

import { FireBaseContext, useFirebase } from '@/context/firebase';
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const router = useRouter()
  const {}= useContext(FireBaseContext)
  const {setIsLoggedIn,setUserData} = useContext(FireBaseContext)
  const UserSignIn = async () => {
    try {
      const result = await firebase.signIn(email, password);
      setUserData(result?.user)
      if(result?.user){ setIsLoggedIn(true); router.push('/')}
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  }
  
  return (
  <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        Tracker
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign In Your account
          </h1>
          {/* Sign up Form */}
          <div className="space-y-4 md:space-y-6" >
           
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>

            <button onClick={() => UserSignIn()}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign In
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <a href="/auth/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create here</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default SignIn