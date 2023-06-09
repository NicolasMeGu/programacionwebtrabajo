import React from 'react'
import '../styles/RecoveryPassword.css'

function RecoveryPassword() {
  return (
    <div className="login">
    <div className="form-container">

      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <button className="primary-button login-button">Login</button>

      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}

export default RecoveryPassword
