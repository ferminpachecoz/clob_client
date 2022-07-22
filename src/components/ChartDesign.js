import React from 'react';
import './ChartDesign.css';

export default function ChartDesign() {
  return (
    <div>
      <div className='row row-height'>
          <div className='col-6' style={{backgroundImage: 'url("prenda4.jpg")'}}>
            <a href="/categoria?name=blazers">
              <div className='shadow-container'>
                <h2>Blazers</h2>
              </div>
            </a>
          </div>
        <div className='col-6'>
          <div className='row row-cols-2 section-container'>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda6.jpg")'}}>
              <a href="/categoria?name=sacos" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Sacos</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda1.jpg")'}}>
              <a href="/categoria?name=sweaters" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Sweaters</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda3.jpg")'}}>
              <a href="/categoria?name=mitones" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Mitones</h2>
                </div>
              </a>
            </div>
            <div className='col-6 section-img d-flex justify-content-center align-items-center' style={{backgroundImage: 'url("prenda2.jpg")'}}>
              <a href="/categoria?name=sombreros" className='chart-link'>
                <div className='shadow-container'>
                  <h2>Sombreros</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
