import React, { useState } from 'react'
import "./signUp.css"

function SignUp() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='signup'>
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
        
        <input onChange={e => setUsername(e.target.value)} type="username" placeholder='username' value={username} />
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' value={email} />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} />
        <button>Sign Up</button>
    </div>
  )
}

export default SignUp
