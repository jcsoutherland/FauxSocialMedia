import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  const slideRight = () => {
    $('.picture-card').toggleClass('move-right')
    $('.register-info').toggleClass('visible')
    $('.register-info').toggleClass('hidden')
    $('.login-info').toggleClass('visible')
    $('.login-info').toggleClass('hidden')
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='picture-card'>
          <div className='info-container'>
            <h1>Flynn Social.</h1>
            <div className='register-info visible'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores expedita repellat quas. Reiciendis omnis laudantium
                quaerat et vero soluta provident.
              </p>
              <span>Don't you have an account?</span>
              <button onClick={slideRight}>Register</button>
            </div>
            <div className='login-info hidden'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores expedita repellat quas. Reiciendis omnis laudantium
                quaerat et vero soluta provident.
              </p>
              <span>Do you have an account?</span>
              <button onClick={slideRight}>Login</button>
            </div>
          </div>
        </div>
        <div className='left-register'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Name' />
            <input type='password' placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
        <div className='right-login'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
