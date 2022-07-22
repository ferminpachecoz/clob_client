import React, { useState } from 'react';
import Header from '../components/Header'
import MainBanner from '../components/MainBanner';
import Seccion from '../components/Seccion';
import Footer from '../components/Footer';
import ChartDesign from '../components/ChartDesign';
import { useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([])
  const [temporada, setTemporada] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  },[])
  useEffect(()=>{
    if(products.length>0){
      let x = products.filter(item => item.collection == "invierno")
      setTemporada(x)
    }
  },[products])
  return (
    <>
      <Header />
      <MainBanner />
      <ChartDesign />
      <Seccion title="Ofertas Off%" products={products} />
      <Seccion title="Temporada de Invierno" products={temporada} />
      <Seccion title="Mas Vendidos" products={products} />
      <Footer />
    </>
  )
}
