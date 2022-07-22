import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
      <div className='d-flex justify-content-center align-items-center footer-container'>
        <div className='col-5'>
          <h4>Te gusta lo que ves?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <h5>11-6110-7112</h5>
          <p className='footer-email'>ferminpacheco87@gmail.com</p>
          <br/>
          <p>Escalada 1200, Tigre, Buenos Aires, Argentina</p>
          <div className='d-flex footer-icons justify-content-center'>
            <a href="#" className='mx-2'><i className="bi bi-facebook"></i></a>
            <a href="#" className='mx-2'><i className="bi bi-instagram"></i></a>
            <a href="#" className='mx-2'><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
  )
}
