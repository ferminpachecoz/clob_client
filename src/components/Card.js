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
        <p className={`${product.discount!==null?'text-decoration-line-through text-muted mb-1':''}`}>${product.price}</p>
        {product.discount !== null &&
          <div className='d-flex justify-content-between'>
            <p>${product.price*((100-product.discount)/100)}</p>
            <p className='discount me-3'>{`${product.discount}%Off`}</p>
          </div>
        }
      </div>
    </div>
  )
}
