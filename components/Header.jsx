import React from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdNightlight, MdCode } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { AiFillFolderOpen } from 'react-icons/ai'
import { animateScroll as scroll } from 'react-scroll'

function Header() {
    const { theme, setTheme } = useTheme()
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <header className="py-2 sm:px-10 px-2 bg-gray-100 dark:bg-zinc-800 dark:text-gray-100 shadow-md fixed w-full z-40">
            <div className="container flex justify-between items-center mx-auto">
                <div className='flex items-center space-x-5'>
                    <h1 className='flex items-center sm:text-5xl text-4xl font-extrabold text-head'>Cong Tu</h1>
                </div>
                <div className="items-center flex-shrink-0 flex space-x-2 relative">
                    <button className="header-btn cursor-pointer" onClick={changeTheme}>{theme === "dark" ? <MdNightlight /> : <MdLightMode />}</button>
                    <button className="header-btn cursor-pointer" onClick={() => scroll.scrollToBottom()}><MdCode /></button>
                    <button className="header-btn cursor-pointer" onClick={() => scroll.scrollToTop()}><FaUser /></button>
                    <button className="header-btn cursor-pointer" onClick={() => scroll.scrollTo(window.innerHeight)}><AiFillFolderOpen /></button>
                </div>
            </div>
        </header>
    )
}

export default Header