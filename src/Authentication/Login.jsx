import React from 'react'
import "./login.css"

function login() {
  return (
    <div className='login'>
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />

        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
    </div>
  )
}

export default login
