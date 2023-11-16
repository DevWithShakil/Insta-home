import React from 'react'
import "./Authentication.css"
import Login from './Login'
function Authentication() {
  return (
    <div className='authentication'>
      <div className="auth__left">
        <img src="https://i.ibb.co/ky65cGR/mobile.png" alt="" />
      </div>
      <div className="auth__right">
        <Login/>
      </div>
      <div className="auth__more">
        <span>Don't have an account? <button>Sign Up</button></span>
      </div>
    </div>
  )
}

export default Authentication
