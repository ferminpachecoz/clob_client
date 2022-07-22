import React from 'react';
import './Register.css'

export default function Login() {
  return (
    <div className='register-container row justify-content-center align-items-center'>
      <div className='col-5 form-register'>
        <div className='d-flex justify-content-center form-title p-3'>
          <h3>Iniciar Sesión</h3>
        </div>
        <form className='d-flex flex-column mt-3'>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Contraseña'/>
          <p className='text-account'>No tienes una cuenta? <a href="/register">Registrarse</a></p>
          <div className='d-flex justify-content-center'>
            <button className='register-button' type='submit'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}
