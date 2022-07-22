import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <div className='nav-container'>
      <div className='logo-sm'></div>
      <ul className='nav-left'>
        <li><a href="/">Home</a></li>
        <li className='ul-container'>
          <div>Categorias</div>
          <ul className='category-container'>
            <li><a href="#">Sacos</a></li>
            <li><a href="#">Sweaters</a></li>
            <li><a href="#">Mitones</a></li>
          </ul>
        </li>
        <li><a href="#">Colecciones</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
      <ul className='nav-right'>
        <li><input type="text" className='search-bar' placeholder='Buscar producto...' /></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/register">Registrarse</a></li>
        <li><a href="#"><i className="bi bi-cart"></i></a></li>
      </ul>
    </div>
  )
}
