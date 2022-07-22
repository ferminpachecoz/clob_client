import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className='register-container row justify-content-center align-items-center'>
      <div className='col-5 form-register'>
        <div className='d-flex justify-content-center form-title p-3'>
          <h3>Registrarse</h3>
        </div>
        <form className='d-flex flex-column '>
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Contraseña'/>
          <p className='text-account'>Ya tienes una cuenta? <a href="/login">Log In</a></p>
          <div className='d-flex justify-content-center'>
            <button className='register-button' type='submit'>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
