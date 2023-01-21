import React from 'react'
import './form.scss'

const LoginForm = () => {
  return (
    <form className="login-form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm