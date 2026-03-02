import React from 'react'

const Login = () => {
  return (
    <main className='login-page'>
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='email' placeholder='enter email' />
          <label htmlFor="password">password</label>
          <input type="text" id='password' name='password' placeholder='enter password ' />
          <button className='btn'>Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login