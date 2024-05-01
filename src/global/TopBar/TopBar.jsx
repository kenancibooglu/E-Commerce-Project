import React from 'react'
import "./topbar.css";
import { HiChevronDown } from "react-icons/hi2";
import { LuShoppingBasket } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { Link } from '@mui/material';


const TopBar = () => {    
    return (
        // Navbar Header
        <nav className='p-5 shadow bg-green-950 md:flex md:items-center'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-[Poppins] cursor-pointer p-2'>
                    <img className='h-10 inline' src='https://botanica.risingbamboo.com/wp-content/themes/botanica/dist/images/logo/light.png' alt='project-topbar'></img>
                </span>  
            </div>
            {/* NavBar İçerik Kısmı Left */}
            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2'>Home</a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-3 md:flex items-center'>Shop<HiChevronDown /></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Product<HiChevronDown /></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Pages<HiChevronDown /></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Blog<HiChevronDown /></a>
                </li>

                {/* Search */}
                <form class="max-w-md mx-auto absolute end-56">
                    <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                    </div>
                </form>


                {/* Topbar Right */}
                <a href='/' className='absolute end-36 text-2xl text-white hover:bg-green-600 duration-700 border border-gray-500 rounded-3xl p-3'><LuUser2 /></a>
                <a href='/' className='absolute end-20 text-2xl text-white hover:bg-green-600 duration-700 border border-gray-500 rounded-3xl p-3'><FaHeart /><button className='property-price'>0</button></a>
                <a href='/' className='absolute end end-5 text-2xl text-white hover:bg-green-600 duration-700 border border-gray-500 rounded-3xl p-3'><LuShoppingBasket /><button className='property-price'>0</button></a>



            </ul>
        </nav>

    )
}

export default TopBar