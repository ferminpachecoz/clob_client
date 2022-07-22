import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Product.css';

export default function Product() {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')
  const [product, setProduct] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3001/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err))
  },[])
  console.log(product);
  let images = product.images?product.images:[];

  return (
    <div>
      <Header />
      <main className='row'>
        <div className='col-7'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner --container">
              {
                images.map((item, i)=>
                <div className="carousel-item active">
                  <img src='/prenda3.jpg' className="d-block w-100" alt="..." />
                </div>
                )
              }
              <div className="carousel-item active">
                <img src='/prenda3.jpg' className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/prenda1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/prenda2.jpg" className="d-block w-100" alt="..." />
              </div>
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
        <div className='col-5'>
          <h1 className='mt-3'>Lorem ipsum</h1>
          <h5>$18.000,00</h5>
          <hr/>
          <div className='d-flex align-items-center'>
            <p>Color:</p><i className="bi bi-circle-fill color"></i>
          </div>
          <div>
            <p>Medidas: 50cm cintura | 70cm pecho | 60cm manga</p>
          </div>
          <div>
            <p className='text-bold'>Detalle del producto</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <p className='text-bold'>Método de Envío</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='d-flex align-items-center'>
              <p className='me-2'>Envío Gratis a Partir de $18.000</p><i className="bi bi-truck truck-icon"></i>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='agregar-producto'>Agregar</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
