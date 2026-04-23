import ProductCardSkeleton from '@/components/skeleton/ProductSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
      {[...Array(9).map((_,index)=>(
        <ProductCardSkeleton key={index}></ProductCardSkeleton>
      ))]}
    </div>
  )
}

export default loading
