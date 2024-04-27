import React from 'react'
import "./topbar.css";


const TopBar = () => {
    return (
        // TopBar Left
        <div class="flex-1 flex flex-col">
            <nav class="px-4 flex justify-between h-16 border-b-2 bg-lime-950">
                <ul class="flex items-center">
                    <li class="h-10 w-22 m-8">
                        <img
                            class="h-full w-full mx-auto"
                            src="https://botanica.risingbamboo.com/wp-content/themes/botanica/dist/images/logo/light.png"
                            alt="svelte logo" /> 
                    </li>
                </ul>

                {/* TopBar Main */}
                <ul className='flex items-center text-white'>
                    <li>
                        <h3>Home</h3>
                    </li>
                </ul>
                

               {/* TopBar Right */}
                <ul class="flex items-center">
                    <li class="pr-8">
                    <svg className='text-white border-2 rounded-xl hover:bg-green-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </li>
                    <li class="h-10 w-10">
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default TopBar