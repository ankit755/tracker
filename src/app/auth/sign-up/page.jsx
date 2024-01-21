'use client'
import React, { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <div className='flex flex-col'>
      <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)
      } />
      <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => {
        firebase.signupUserWithEmailAndPassword(email, password)
        firebase.putData(`users/${name}`, { email, password })
      }
      }>Sign Up</button>
    </div>
  )
}

export default SignUp