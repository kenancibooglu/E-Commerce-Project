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
                        <span className='flex justify-center items-center ml-8'>More than 20 different types of vegetables.</span>
                        {/* Fresh Fruit */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="37" height="50" src="https://img.icons8.com/plasticine/100/grapes.png" alt="grapes" />
                            <a className='text-lg' href='/'>Fresh Fruit</a>
                        </div>
                        <span className='flex justify-center items-center ml-0'>More than 20 different types of fuits.</span>
                        {/* Drinks and Juices */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="45" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-juices-dieting-flaticons-flat-flat-icons.png" alt="juices-drink" />
                            <a className='text-lg' href='/'>Drinks and Juices</a>
                        </div>
                        <span className='flex justify-center items-center ml-5'>Fruit juices and carbonated soft drinks</span>
                        {/* Frozen Fish */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="45" height="40" src="https://img.icons8.com/fluency/48/perch.png" alt="frozen-fish" />
                            <a className='text-lg ml-1' href='/'>Frozen Fish</a>
                        </div>
                        <span className='flex justify-center items-center ml-6'>Get the freshest salmon and ocean trout</span>
                        {/* Bee Product */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img className='ml-2' width="40" height="64" src="https://img.icons8.com/external-flat-icons-pause-08/64/external-bee-farm-and-garden-flat-icons-pause-08.png" alt="bee-product" />
                            <a className='text-lg ml-2' href='/'>Bee Product</a>
                        </div>
                        <span className='flex justify-center items-center ml-0'>Get the bee salmon and ocean trout</span>
                    </div>
                </div>
                {/* Tanıtım Kısmı */}
                <div className='bg-gray-100 border w-full p-2 m-2 rounded-xl  categories-right'>
                    <div className='right-title'>
                        <h5>Fresh Food</h5>
                        <h1>Salmon Filled</h1>
                    </div>
                    <p className='right-text'>Salmon fillet, with its delicate flavor and flaky texture, is a culinary delight. This versatile fish can be prepared in various ways, from simple grilling to elegant poaching. </p>
                </div>
            </div>
        </>
    )
}

export default Home