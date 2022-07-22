import React from 'react'
import './Card.css';

export default function Card({product}) {
  return (
    <div className='card-component'>
      <a href={`/producto/${product.id}?id=${product.id}`}>
        <div className='card-image' style={{backgroundImage: `url(images/${product.images[0].path})`}}></div>
      </a>
      <div className='card-content'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
      </div>
    </div>
  )
}
