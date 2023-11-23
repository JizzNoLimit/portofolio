"use client"
import logo from '@/assets/jizznolimit-logo.svg'
import logo_dark from '@/assets/jizznolimit-logo-dark.svg'
import Image from 'next/image'
import ThemeSwitcher from './ThemeSwitcher'
import { Bars2Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Navbar = () => {

    const [clickMenu, setClickMenu] = useState<boolean>(false)

    const onClickMenu = () => {
        setClickMenu(!clickMenu)
    }

    return (
        <>
        <nav className="sticky top-4 lg:top-5 w-full max-w-[1180px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0 z-50">
            <div className="flex justify-between px-7 pt-6 pb-5 lg:px-10 lg:pt-6 lg:pb-5 bg-secondary-bg dark:bg-secondary-bg-dark rounded-xl">
                {/* Main Logo: Jizznolimit. */}
                <div>
                    {/* Logo: white, if theme light then hidden */}
                    <Image 
                        src={logo} 
                        width={125} 
                        height={30}
                        className='hidden dark:block w-[80%] lg:w-full' 
                        alt='logo'
                        placeholder='blur'
                        blurDataURL='../assets/jizznolimit-logo.svg'
                    /> 
                    {/* Logo: dark, if theme dark then hidden */}
                    <Image 
                        src={logo_dark} 
                        width={125} 
                        height={30} 
                        className='dark:hidden w-[80%] lg:w-full' 
                        alt='logo' 
                        placeholder='blur'
                        blurDataURL='../assets/jizznolimit-logo-dark.svg'
                    />
                </div>

                {/* Menu btn */}
                <div className='flex lg:hidden gap-6'>
                    <div className='relative -mt-1'>
                        <div className='absolute inset-0 m-auto w-4 h-4 bg-[#ffba3a] dark:bg-[#25a1e0] blur-md z-0'></div>
                        <ThemeSwitcher />
                    </div>
                    <button 
                        className='-mt-2'
                        onClick={() => onClickMenu()}
                    >
                        <Bars2Icon className='w-7 h-7' />
                    </button>
                </div>

                {/* Link list & theme toggle */}
                <div className='hidden lg:flex gap-8'>
                    <ul className='flex gap-8'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className='relative px-5 after:absolute after:inset-y-0 after:left-0 after:content-[""] after:w-[3px] after:h-[80%] after:bg-[#e5e5e6] after:dark:bg-[#bfc0c4] after:rounded-full '>
                        <div className='absolute inset-0 m-auto w-4 h-4 bg-[#ffba3a] dark:bg-[#25a1e0] blur-md z-0'></div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>

        {/* Link list Mobile */}
        <div className={`fixed lg:hidden ${clickMenu ? 'top-[98px]' : 'top-4'} w-full px-4 transition-all duration-500 z-40`}>
                <div className={`w-full h-auto px-7 ${clickMenu ? 'py-6' : 'py-4 transition-all delay-200'} bg-secondary-bg dark:bg-secondary-bg-dark rounded-xl`}>
                <ul className='flex justify-between font-semibold'>
                    <li onClick={() => onClickMenu()}><a href="#">Home</a></li>
                    <li onClick={() => onClickMenu()}><a href="#about">About</a></li>
                    <li onClick={() => onClickMenu()}><a href="#project">Project</a></li>
                    <li onClick={() => onClickMenu()}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar