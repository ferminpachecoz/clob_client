import React from 'react';
import './ProductForm.css';
import { useState, useEffect } from 'react';

export default function ProductForm({click, title, btn, purl, selected}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [collection, setCollection] = useState('');
  const [discount, setDiscount] = useState('');
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('')
  const [sproduct, setSProduct] = useState();
  const [allCategory, setAllCategory] = useState();
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(selected){
      let data ={
        id: selected
      }
  
      let reqData={
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
  
      fetch('http://localhost:3001/edit/selected', reqData)
        .then(res => res.json())
        .then(data => setSProduct(data))
        .catch(err => console.error(err))
    }
  },[])
  useEffect(()=>{
    fetch('http://localhost:3001/category')
      .then(res => res.json())
      .then(data => setAllCategory(data))
      .catch(err => console.error(err))
  },[])
    
  const handleCreate = e =>{
    e.preventDefault();
    const data = new FormData();
    if(purl == 'edit' && selected){
      data.append("id", selected)
    }
    if(name){
      data.append("name", name)
    }
    if(price){
      data.append("price", price)
    }
    if(description){
      data.append('description', description)
    }
    if(collection){
      data.append("collection", collection)
    }
    if(discount){
      data.append("discount", discount)
    }
    if(category){
      data.append("id_category", category)
    }
    for (let i=0; i<files.length; i++){
      data.append(`fieldname`, files[i])
    }
    const request={
      method:"POST",
      body: data
    }
    fetch(`http://localhost:3001/${purl}`, request)
      .then(res => res.json())
      .then(a => console.log(a))
      .catch(err => console.error(err))
  }
  return (
    <div className='form-container p-1'>
      <h3>{title}</h3>
      <a href="#" className='close-icon'>
        <i className="bi bi-x" onClick={()=>click(0)}></i>
      </a>
      <hr/>
      <div>
        <form className='form-product' onSubmit={e => handleCreate(e)}>
          <div>
            <label>Nombre:</label>
            <input type="text" name='name' defaultValue={sproduct?sproduct.name:""} onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <label>Precio:</label>
            <input type="text" name='price' defaultValue={sproduct?sproduct.price:""} onChange={e => setPrice(e.target.value)}/>
            {error.price &&
              <p className='validation-text'>{error.price.msg}</p>
            }
          </div>
          <div>
            <label>Descripcion</label>
            <textarea cols="30" rows="3" defaultValue={sproduct?sproduct.description:""} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div>
            <label>Categoría</label>
            <select name='category' defaultValue={sproduct?sproduct.category:""} onChange={e => setCategory(e.target.value)}>
              <option value="" key="5">Seleccione una categoria</option>
              {allCategory &&
                allCategory.map((item, i)=>
                  <option value={item.id} key={i}>{item.title}</option>
                )
              }
            </select>
            <p className='form-comment'>*Si no se modifica este campo entonces tomará el valor previo</p>
          </div>
          <div>
            <label>Colección</label>
            <select name='collection' defaultValue={sproduct?sproduct.collection:""} onChange={e => setCollection(e.target.value)}>
              <option value="" key="3">Seleccione una coleccion</option>
              <option value="invierno" key="1">Invierno</option>
              <option value="verano" key="2">Verano</option>
            </select>
            <p className='form-comment'>*Si no se modifica este campo entonces tomará el valor previo</p>
          </div>
          <div>
            <label>Descuento(%)</label>
            <input type="text" name='discount' defaultValue={sproduct?sproduct.discount:""} placeholder='Ingrese un porcentaje...' onChange={e => setDiscount(e.target.value)} />
          </div>
          <div>
            <label>Fotos del producto:</label>
            <input type="file" name='images' multiple onChange={e => setFiles(e.target.files)} />
            <p className='form-comment'>*Si no se modifica este campo entonces tomará el valor previo</p>
          </div>
          {error &&
            <div>
              <p className='validation-text'>Hubo un error, por favor verifique que todos los campos con el signo "*" esten completos.</p>
            </div>
          }
          <div className='button-container'>
            <button className='button bg-green-gradient' type='submit'>{btn}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
