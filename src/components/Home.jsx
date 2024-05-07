import React from 'react'
import { TbArrowWaveRightUp } from "react-icons/tb";
import './style.css';

function Home() {
    return (
        <>
            <div className='flex justify-between m-4'>
                {/* Top Categories */}
                <div className='categories-left'>
                    <h1 className='text-xl text-green-800 font-bold'>Top Categories</h1>
                    <div className='p-0'>
                        <span className='text-4xl flex justify-center text-green-800'><TbArrowWaveRightUp /></span>
                        {/* Organic Vegetables */}
                        <div className='flex justify-start font-bold items-center'>
                            <img className='transition' width="35" height="50" src="https://img.icons8.com/plasticine/100/broccoli.png" alt="broccoli" />
                            <a href='/' className='text-lg'>Organic Vegetables</a>
                        </div>
                        <span className='flex justify-center items-center ml-7'>More than 20 different types of vegetables.</span>
                        {/* Fresh Fruit */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                        <img width="37" height="50" src="https://img.icons8.com/plasticine/100/grapes.png" alt="grapes"/>
                            <a className='text-lg' href='/'>Fresh Fruit</a>
                        </div>
                        <span className='flex justify-center items-center ml-0'>More than 20 different types of fuits.</span>
                    </div>



                </div>
                {/* Tanıtım Kısmı */}
                <div className='bg-gray-100 border w-full p-2 m-2 rounded-xl text-center'>
                    <h1>We Procive Fresh Procey</h1>
                </div>
            </div>
        </>
    )
}

export default Home