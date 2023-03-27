import React from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdNightlight } from 'react-icons/md'

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
        <header className="py-2 px-10 bg-gray-100 dark:bg-zinc-800 dark:text-gray-100 shadow-md fixed left-0 right-0 z-40">
            <div className="container flex justify-between items-center mx-auto">
                <div className='flex items-center space-x-5'>
                    <h1 className='flex items-center text-5xl font-extrabold text-head'>Cong Tu</h1>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex space-x-3 relative">
                    <button className="header-btn" onClick={changeTheme}>{theme === "dark" ? <MdNightlight /> : <MdLightMode />}</button>
                </div>
            </div>
        </header>
    )
}

export default Header