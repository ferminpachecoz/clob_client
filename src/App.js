import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/producto/:id' element={<Product />} />
      <Route path='/categoria' element={<Category />} />
      <Route path='/contacto' element={<Contact />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
