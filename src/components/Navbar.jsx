import { useState } from "react"

import { NavLink } from './Link'

import menuItems from '../constant/header.data'

import logo from '../assets/logo.png'

export function NavBar() {
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="fixed-nav navbar">
        <nav className="w-full bg-white-500">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <img className="w-40" src={logo} alt="ZanduGlobal" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-dark-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" sx={styles.navList}>
                            {menuItems.map(({ path, label }, i) => (
                                <li className="text-dark-500 hover:text-indigo-500" key={i}>
                                    <NavLink path={path} label={label} />
                                </li>
                            ))}
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <a
                        href="https://google.com"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign Up for Early Access
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="https://google.com"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign Up for Early Access
                    </a>
                </div>
            </div>
        </nav>
        </header>
    )
}

const styles = {
    navList: {
        '.nav-item': {
            cursor: 'pointer',
            fontWeight: 400,
            padding: 0,
            margin: [null, null, null, null, '0 20px']
        },
        '.active': {
            color: '#FF2156'
        }
    }
}