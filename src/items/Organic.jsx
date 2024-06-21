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
    </>
  )
}

export default Organic