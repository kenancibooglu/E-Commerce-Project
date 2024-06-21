import React from 'react'
import "./style.css";
import { RiStarSLine } from "react-icons/ri";
import { PiBasketDuotone } from "react-icons/pi";
import { itemsData } from '../../../data/items-data';

export default function VegetableItems() {
  return (
    <div className='farm-fresh'>
      <ul className='flex justify-center items-center'>
        {itemsData.map(item => (
          <li className='farm-fresh-items-li' key={item.id}>
            <img src={item.img} alt='img' />
            <span className='flex items-center'><RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> (0)</span>
            <h2 className='m-5 font-bold'>{item.name}</h2>
            <h5 className='m-5 text-green-800 font-bold'>{item.price}$</h5>
            <span><PiBasketDuotone /></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
