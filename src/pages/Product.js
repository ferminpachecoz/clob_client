import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import PayerForm from '../components/PayerForm';
import './Product.css';

export default function Product() {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring);
  const id = params.get('id');
  const [product, setProduct] = useState({});
  const truck = useRef();
  const [modal, setModal] = useState(0)

  useEffect(()=>{
    fetch(`http://localhost:3001/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err))
  },[])
  let images = product.images?product.images:[];
  const handleOver = ()=>{
    truck.current.style.transform = 'translate(150px, 0px)';
  }

  const handleClick = num =>{
    setModal(num)
  }

  return (
    <div>
      <Header />
      <main className='row'>
        <div className='col-12 col-sm-12 col-md-7 col-xl-7'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner --container">
              {
                images.map((item, i)=>
                <div className={`carousel-item ${i==0?'active':''}`} key={i} >
                  <img src={`/images/${item.path}`} className="d-block w-100" alt="..." />
                </div>
                )
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-xl-5'>
          <h1 className='mt-3'>{product.name}</h1>
          <h5 className={product.discount!==null?'text-decoration-line-through text-muted':''}>${product.price}</h5>
          {product.discount!==null &&
            <div>
              <h5>${product.price*((100-product.discount)/100)}</h5>
              <h5 className='discount'>{product.discount}%Off</h5>
            </div>
          }
          <hr/>
          <div>
            <p>Medidas: 50cm cintura | 70cm pecho | 60cm manga</p>
          </div>
          <div>
            <p className='text-bold'>Detalle del producto</p>
            <p>{product.description}</p>
          </div>
          <div>
            <p className='text-bold'>Método de Envío</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='d-flex align-items-center'>
              <p className='me-2'>Envío Gratis a Partir de $18.000</p><i ref={truck} className="bi bi-truck truck-icon"></i>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='agregar-producto' onMouseOver={handleOver} onClick={()=>handleClick(1)} >Agregar</button>
          </div>
        </div>
      </main>
      {modal == 1 &&
        <Modal>
          <PayerForm funcion={handleClick} product={product} />
        </Modal>
      }
      <Footer />
    </div>
  )
}
