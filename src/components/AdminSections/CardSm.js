import React from 'react';
import './CardSm.css';
import { useState, useEffect, useRef } from 'react';

export default function CardSm({click, product}) {
  let img = product.images[0];
  const card_cont = useRef();
  const [deleted, setDeleted] = useState();

  const handleDelete = ()=>{
    let check = window.confirm("Estas seguro que quieres borrar este producto?");
    if(check){
      let data = {
        id: product.id
      }
      let request = {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      fetch('http://localhost:3001/delete', request)
        .then(res => res.json())
        .then(data => setDeleted(data))
        .catch(err => console.error(err))
    }
  }
  useEffect(()=>{
    if(deleted === 1){
      card_cont.current.style.display = "none";
    }
  },[deleted])
  
  return (
    <div ref={card_cont} className='product-card-sm' style={{backgroundImage: `url("images/${img.path}")`}}>
      <div className='shadow-box d-flex justify-content-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='button-add' onClick={()=>click(1, product.id)}>Editar</button>
          <button className='button-delete' onClick={handleDelete} >Eliminar</button>
        </div>
      </div>
    </div>
  )
}
