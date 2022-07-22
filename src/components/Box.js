import React from 'react';
import ProductSection from './AdminSections/ProductSection';
import StatisticSection from './AdminSections/StatisticSection';

export default function Box({tab}) {
  return (
    <div className='col-10'>
      {tab === 0 && <ProductSection />}
      {tab == 2 && <StatisticSection />}
    </div>
  )
}
