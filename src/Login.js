import React from 'react'
import {useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }
  return (
    <div>
      <label htmlFor="">
        Username: <input type="text" name="" id="" onChange={(e) =>setUser(e.target.value)} />

      </label>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
