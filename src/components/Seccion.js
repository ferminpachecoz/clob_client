import React from 'react';
import './Seccion.css';
import Card from './Card';

export default function Ofertas({title, products}) {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='my-4'>{title}</h1>
      </div>
      <div className='row row-cols-4 g-1'>
        {
          products.map((item, i)=>
            <div className='col' key={i} >
              <Card product={item} />
            </div>
          )
        }
      </div>
    </div>
  )
}
