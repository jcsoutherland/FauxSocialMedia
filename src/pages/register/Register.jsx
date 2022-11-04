import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Name' />
            <input type='password' placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
        <div className='left'>
          <h1>Flynn Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            expedita repellat quas. Reiciendis omnis laudantium quaerat et vero
            soluta provident.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
