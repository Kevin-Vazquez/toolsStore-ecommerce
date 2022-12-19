import Link from 'next/link'
import React from 'react'

export default function ProductItem({ products }) {
  return (
    <div className='card'>
      <Link href={`/product/${products.slug}`}>
        <img 
        src={products.image}
        alt={products.name}
        className="rounded shadow"
        />
      </Link>
      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${products.slug}`}>
            <h2 className='text-lg'></h2>
        </Link>
        <p className='mb-2'>{products.brand}</p>
        <p>${products.price}</p>
        <button className='primary-button' type='button'>
            Add to cart
        </button>
      </div>
    </div>
  )
}
