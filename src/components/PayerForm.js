import React from 'react';
import { useState } from 'react';

export default function PayerForm({funcion, product}) {
  const [input, setInput] = useState(product)

  const setting = e =>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  const handleSubmit = e =>{
    e.preventDefault();
    let request = {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(input)
    }
    fetch('http://localhost:3001/payment/create', request)
      .then(res => res.json())
      .then(a =>{
        if(a){
          window.location.replace(a.init_point)
        }
      })
      .catch(err => console.error(err))
  }
  
  return (
    <div>
      <div>
        <h4 className='me-5'>Complete la compra con sus datos</h4>
        <a href="#" className='close-icon'>
          <i className="bi bi-x" onClick={()=>funcion(0)}></i>
        </a>
      </div>
      <hr/>
      <form className='form-container' onSubmit={e => handleSubmit(e)}>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Nombre</label>
          <input type="text" name='first_name' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Apellido</label>
          <input type="text" name='lastname' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Email</label>
          <input type="email" name='email' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Codigo Postal</label>
          <input type="text" name='zip_code' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Calle</label>
          <input type="text" name='street' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex flex-column mb-3'>
          <label className='me-3'>Numero de calle</label>
          <input type="text" name='street_number' onChange={e => setting(e)}/>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='button bg-blue-gradient' type='submit'>Continuar</button>
        </div>
      </form>
    </div>
  )
}
