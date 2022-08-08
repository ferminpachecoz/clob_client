import React from 'react';
import './Login.css';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({})
  const setting = event =>{
    let name = event.target.name;
    let value = event.target.value;
    setUser(values => ({...values, [name]: value}))
  }
  const handleSubmit = e =>{
    e.preventDefault();
    const request = {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    }
    fetch('http://localhost:3001/users/create', request)
      .then(res => res.json())
      .then(data =>{
        if(data.email && data.password){
          sessionStorage.setItem("admin", true)
          window.location.replace('http://localhost:3000')
        }
      })
      .catch(err => console.error(err))
  }
  console.log(localStorage);
  return (
    <div className='register-container row justify-content-center align-items-center'>
      <div className='col-10 col-md-8 col-xl-6 form-register'>
        <div className='d-flex justify-content-center form-title p-3'>
          <h3>Iniciar Sesión</h3>
        </div>
        <form className='d-flex flex-column mt-3' onSubmit={e => handleSubmit(e)}>
          <input type="email" name='email' placeholder='Email' onChange={e => setting(e)}/>
          <input type="password" name='password' placeholder='Contraseña' onChange={e => setting(e)}/>
          <div className='d-flex btn-size-sm justify-content-center'>
            <button className='register-button' type='submit'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}
