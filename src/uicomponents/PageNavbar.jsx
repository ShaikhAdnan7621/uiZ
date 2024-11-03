"use client"
import Navbar, { NavFoot, NavGroup, NavHead, NavLink } from '@/Component/Navbar'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

function PageNavbar() {
    const currentPath = usePathname();
    const [showNavGroup, setShowNavGroup] = useState(false);

    const toggleNavGroup = () => {
        setShowNavGroup(!showNavGroup);
    };

    return (
        <header className='h-[52px] bg-stone-950 rounded-md'>
            <Navbar className={" justify-between "}>
                <NavHead>
                    <NavLink href={"/"} className=' text-white text-xl font-semibold w-36'>uiZ</NavLink>
                </NavHead>
                 <NavGroup className={" gap-3 hidden md:flex "}>
                    <NavLink
                        href={"/components/"}
                        className="text-3xl"
                        active={currentPath.startsWith("/components")}
                    >
                        Components
                    </NavLink>
                    <NavLink
                        href={"/chat"}
                        className="text-3xl"
                        active={currentPath.startsWith("/chat")}
                    >
                        Ai Chat
                    </NavLink>
                </NavGroup>

                <NavFoot className=' grow-0 gap-3 md:grow py-0 md:hidden flex'>
                    <button
                        className='py-1.5 px-2.5 rounded-md text-2xl text-white'
                        onClick={toggleNavGroup}
                    >
                        ☰
                    </button>
                </NavFoot>
            </Navbar>
            {/* Mobile NavGroup (Popup) */}
            {showNavGroup && (
                <Navbar className={" "}>
                    <NavGroup className="fixed top-1/2 left-1/2 -translate-x-1/2 z-10 -translate-y-1/2 bg-stone-800 w-72 md:hidden flex flex-col gap-3 py-3 px-6 rounded-md shadow-lg">
                        <NavLink
                            href={"/components/"}
                            className="text-2xl text-white  min-w-52"
                            active={currentPath.startsWith("/components")}
                            onClick={toggleNavGroup} // Close on link click
                        >
                            Components
                        </NavLink>
                        <NavLink
                            href={"/chat"}
                            className="text-2xl text-white min-w-52"
                            active={currentPath.startsWith("/chat")}
                            onClick={toggleNavGroup} // Close on link click
                        >
                            Ai Chat
                        </NavLink>
                    </NavGroup>
                </Navbar>
            )}
        </header>
    )
}

export default PageNavbar
