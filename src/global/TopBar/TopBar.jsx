import React from 'react'
import "./topbar.css";
import { HiChevronDown } from "react-icons/hi2";


const TopBar = () => {
    return (
         // Navbar Header
        <nav className='p-5 shadow bg-green-950 md:flex md:items-center'>
            <div>
                <span className='text-2xl font-[Poppins] cursor-pointer p-2'>
                    <img className='h-10 inline' src='https://botanica.risingbamboo.com/wp-content/themes/botanica/dist/images/logo/light.png' alt='project-topbar'></img>
                </span>
            </div>

            {/* NavBar İçerik Kısmı */}
            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                {/* hreflere yönlendirme yapacağız*/}
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2'>Home</a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-3 md:flex items-center'>Shop<HiChevronDown/></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Product<HiChevronDown/></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Pages<HiChevronDown/></a>
                </li>
                <li className='mx-4'>
                    <a href='#' className='text-white text-m hover:text-green-400 duration-500 p-2 md:flex items-center'>Blog<HiChevronDown/></a>
                </li>
                {/* Buraya Search gelecek */}
                <button className='bg-green-800 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-green-400 rounded border-2'>Get Started</button>
            </ul>
        </nav>

    )
}

export default TopBar