import React from 'react';
import './CategoryForm.css';
import { useRef, useState, useEffect } from 'react';

export default function CategoryForm({click}) {
  const edit = useRef();
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState('');
  const [finded, setFinded] = useState('');
  const [url, setUrl] = useState('create-category')

  const handleClick = (id, url) =>{
    edit.current.style.display = "block"
    setSelected(id)
    setUrl(url);
  }
  console.log(selected);

  const handleCreate = e =>{
    e.preventDefault();
    const data = new FormData();
    if(selected){
      data.append("id", selected)
    }
    if(title){
      data.append("title", title);
    }
    if(img){
      data.append("img_path", img)
    }

    let request = {
      method:"POST",
      body: data
    }

    fetch(`http://localhost:3001/${url}`, request)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  useEffect(()=>{
    fetch('http://localhost:3001/category')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(err => console.error(err))
  },[])

  useEffect(()=>{
    if(selected){
      let findex = category.find(element=> element.id === selected);
      setFinded(findex)
    }
  }, [selected])

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Categorias</h1>
        <div>
          <a href="#" className='close-icon'>
            <i className="bi bi-x" onClick={()=>click(0)}></i>
          </a>
          <button className='button bg-green-gradient me-5' onClick={handleClick}>Agregar</button>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row g-2'>
          {
            category.map((item, i)=>  
              <div className='col-2' key={i}>
                <div className='category-box'>
                  <p>{item.title}</p>
                  <div className='edit-button'><button className='bg-blue-gradient' onClick={() => handleClick(item.id, 'update-category')}>Editar</button></div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <form className='col-8 form-edit-category' ref={edit} onSubmit={e => handleCreate(e)} >
          <div className='d-flex flex-column'>
            <label>Titulo:</label>
            <input type="text" defaultValue={finded?finded.title:''} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className='d-flex flex-column mt-3'>
            <label>Foto de portada:</label>
            <input type="file" onChange={e => setImg(e.target.files[0])} />
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button className='button bg-blue-gradient' type='submit'>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
