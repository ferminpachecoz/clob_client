import React from 'react';
import ProductSection from './AdminSections/ProductSection';
import StatisticSection from './AdminSections/StatisticSection';

export default function Box({tab}) {
  return (
    <div className='col-8 col-sm-8 col-md-9 col-xl-10'>
      {tab === 0 && <ProductSection />}
      {tab == 2 && <StatisticSection />}
    </div>
  )
}
