import React from 'react';
import './ProductSection.css';
import CardSm from './CardSm';
import ModalProduct from './ModalProduct';
import ProductForm from './ProductForm';
import CategoryForm from './CategoryForm';
import { useState, useEffect } from 'react';

export default function ProductSection() {
  const [show, setShow] = useState(0);
  const [products, setProducts] = useState()
  const [selected, setSelected]= useState()
  const [category, setCategory] = useState()
  const handleClick = (estado, id) =>{
    setShow(estado)
    setSelected(id)
  }

  useEffect(()=>{
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  },[])

  return (
    <div className='container overflow-hidden admin-product-container'>
      {show == 1 &&
      <ModalProduct>
        <ProductForm click={handleClick} title="Editar Producto" btn="Editar" purl="edit" selected={selected} />
      </ModalProduct>
      }
      {show == 2 &&
        <ModalProduct>
          <ProductForm click={handleClick} title="Agregar Producto" btn="Agregar" purl="create"/>
        </ModalProduct>
      }
      {show == 3 &&
        <ModalProduct>
          <CategoryForm click={handleClick} />
        </ModalProduct>
      }
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h1 className='mx-3 my-3'>Todos los Productos</h1>
        <div>
          <button className='button bg-green-gradient me-3' onClick={()=>handleClick(2)}>Agregar producto</button>
          <button className='button bg-green-gradient' onClick={()=>handleClick(3)}>Agregar categoria</button>
        </div>
      </div>
      <div className='row row-cols-4 g-1 all-products'>
        {products &&
          products.map((item, i)=>  
            <div className='col' key={i}>
              <CardSm click={handleClick} product={item} />
            </div>
          )
        }
      </div>
    </div>
  )
}
