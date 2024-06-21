import React, { useState } from 'react'
import { TbArrowWaveRightUp } from "react-icons/tb";
import { TbLineDashed } from "react-icons/tb";
import './style.css';
import VegetableItems from './FarmFreshItems/vegetable/VegetableItems';
import FruitsItems from './FarmFreshItems/fruits/FruitsItems';



function Home() {
    const [showComponents, setShowComponents] = useState(false);

    const handleClickFruits = () => {
        setShowComponents(!showComponents);
    }

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
                            <a href='/organic' className='text-lg'>Organic Vegetables</a>
                        </div>
                        <span className='flex justify-center items-center ml-8'>More than 20 different types of vegetables.</span>
                        {/* Fresh Fruit */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="37" height="50" src="https://img.icons8.com/plasticine/100/grapes.png" alt="grapes" />
                            <a className='text-lg ml-1' href='/fresh'>Fresh Fruit</a>
                        </div>
                        <span className='flex justify-center items-center ml-0'>More than 20 different types of fuits.</span>
                        {/* Drinks and Juices */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="45" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-juices-dieting-flaticons-flat-flat-icons.png" alt="juices-drink" />
                            <a className='text-lg' href='/drinks'>Drinks and Juices</a>
                        </div>
                        <span className='flex justify-center items-center ml-5'>Fruit juices and carbonated soft drinks</span>
                        {/* Frozen Fish */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img width="45" height="40" src="https://img.icons8.com/fluency/48/perch.png" alt="frozen-fish" />
                            <a className='text-lg ml-1' href='/frozen'>Frozen Fish</a>
                        </div>
                        <span className='flex justify-center items-center ml-6'>Get the freshest salmon and ocean trout</span>
                        {/* Bee Product */}
                        <div className='flex justify-start font-bold items-center mt-9'>
                            <img className='ml-2' width="40" height="64" src="https://img.icons8.com/external-flat-icons-pause-08/64/external-bee-farm-and-garden-flat-icons-pause-08.png" alt="bee-product" />
                            <a className='text-lg ml-2' href='/bee'>Bee Product</a>
                        </div>
                        <span className='flex justify-center items-center ml-0'>Get the bee salmon and ocean trout</span>
                    </div>
                </div>
                {/* Tanıtım Kısmı */}
                <div className='bg-gray-100 border w-full p-2 m-2 rounded-xl  categories-right'>
                    <div className='right-title'>
                        <h5>Fresh Food</h5>
                        <h1>Menemen</h1>
                    </div>
                    <p className='right-text'>Menemen is a traditional Turkish dish made with simple yet flavorful ingredients. It typically consists of eggs, tomatoes, peppers, and spices, all cooked together in a skillet. This hearty breakfast or brunch dish is loved for its rich flavors and satisfying texture.  </p>
                </div>
            </div>
            <div className='farm-fresh'>
                {/* Farm Fresh Products */}
                <div className='flex justify-center items-center m-10'>
                    <div>
                        <h2 className='text-3xl'>Farm Fresh Products</h2>
                        <span className='flex justify-center text-2xl text-green-800'><TbLineDashed /> <TbLineDashed />  <TbLineDashed /> <TbLineDashed /> </span>
                        <div className='flex justify-center'>
                            <a className='vegetable m-7 font-bold'>Vegetable</a>
                            <a className='fruits m-7 font-bold' onClick={handleClickFruits}>Fruits</a>
                            {showComponents && (
                                <div>
                                    <FruitsItems />
                                </div>
                            )}
                            <a className='drink m-7 font-bold' href='#'>Drink</a>
                            <a className='bee m-7 font-bold' href='#'>Bee</a>
                        </div>
                    </div>
                </div>
                <VegetableItems />




            </div>
        </>
    )
}

export default Home