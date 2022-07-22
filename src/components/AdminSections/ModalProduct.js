import React from 'react';
import './ModalProduct.css';

export default function ModalProduct({children}) {
  
  return (
    <div className='modal-container'>
      {children}
    </div>
  )
}
