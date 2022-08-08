import React from 'react';
import './ChartDesign.css';

export default function ChartDesign() {
  return (
    <div>
      <div className='row row-height'>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6 bg-image' style={{backgroundImage: 'url("prenda4.jpg")'}}>
          <a href="/categoria?id_category=1">
            <div className='shadow-container'>
              <h2>Sacos</h2>
            </div>
          </a>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
          <div className='row row-cols-2 section-container'>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda6.jpg")'}}>
              <a href="/categoria?id_category=2" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Sweaters</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda1.jpg")'}}>
              <a href="/categoria?id_category=3" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Remeras</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda3.jpg")'}}>
              <a href="/categoria?id_category=4" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Camisas</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda2.jpg")'}}>
              <a href="/categoria?id_category=5" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Zapatos</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
