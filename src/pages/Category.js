import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

export default function Category() {
  let query = new URLSearchParams(window.location.search);
  let category = query.get('id_category')

  const [products, setProducts] = useState([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data =>{
        let x = data.filter(item => item.id_category == category)
        setProducts(x)
        if (x.length > 0) {
          setTitle(x[0].category.title)
        }
      })
      .catch(err => console.error(err))
  },[])
  console.log(products);
  return (
    <div>
      <Header />
      <main>
        <h1 className='mx-3 my-4 text-capitalize'>{title}</h1>
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4'>
          {
            products.map((item, i)=>  
              <div className='col' key={i} >
                <Card product={item} />
              </div>
            )
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}
