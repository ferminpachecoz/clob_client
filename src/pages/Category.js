import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Category() {
  let query = new URLSearchParams(window.location.search);
  let category = query.get('name')
  return (
    <div>
      <Header />
      <main>
        <h1 className='mx-3 my-4 text-capitalize'>{category}</h1>
        <div className='row row-cols-4 g-4'>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
