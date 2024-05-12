import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { itemsData } from "../data/items-data";
import './items-style.css';

function Organic() {
  return (
    <>
      <div className='vegetable-div'>
        <div className=''>
          <h1 className='text-4xl'>Vegetable</h1>
          <p className='p-2 ml-14 text-m text-green-800'><a href='/'>Home</a>| <a href='/shop'>Shop</a> | Vegetable</p>
        </div>
      </div>

      <div className='vegetable-icerik'>
        <div className='vegetable-cart'>
          <button>< FaRegHeart className='text-2xl ml-56 text-green-800' /></button>
          {itemsData.map(item => (
            <div key={item.id} className='item'>
              <img src={item.img1} alt="cart-image-1" />
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className='vegetable-cart'>
          <button>< FaRegHeart className='text-2xl ml-56 text-green-800' /></button>
          {itemsData.map(item => (
            <div key={item.id} className='item'>
              <img src={item.img1} alt="cart-image-1" />
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Organic