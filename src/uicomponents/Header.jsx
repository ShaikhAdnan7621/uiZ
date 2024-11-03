"use client";


import React from 'react'
import { usePathname } from 'next/navigation';
import Navbar, { NavFoot, NavGroup, NavHead, NavLink } from '@/Component/Navbar';
import ScrollArea from '@/Component/ScrollArea';
import { Breadcrumb, BreadcrumbDropdown, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/Component/Breadcrumb';

const pageLinks = [
    { href: "/components/button", name: "Button" },
    { href: "/components/tooltip", name: "Tooltip" },
    { href: "/components/alert", name: "Alert" },
    { href: "/components/accordion", name: "Accordion" },
    { href: "/components/badge", name: "Badge" },
    { href: "/components/breadcrumb", name: "Breadcrumb" },
    { href: "/components/calendar", name: "Calendar" },
    { href: "/components/checkbox", name: "Checkbox" },
    { href: "/components/dropdown", name: "Dropdown" },
    { href: "/components/command", name: "Command" },
    { href: "/components/dilog", name: "Dilog" },
    { href: "/components/input", name: "Input" },
    { href: "/components/datatable", name: "Datatable" },
    { href: "/components/scrollArea", name: "ScrollArea" },
    { href: "/components/progressbar", name: "Progressbar" },
    { href: "/components/mdview", name: "Mdview" },
    { href: "/components/rangeinput", name: "RangeInput" },
    { href: "/components/navbar", name: "Navbar" },
    { href: "/components/tabs", name: "Tabs" },
];

function Header() {
    const currentPath = usePathname();

    return (
        <>
            <div className='h-full hidden md:block'>
                <Navbar vertical className='h-full bg-stone-950 rounded-md py-1 shadow-white'>
                    <NavGroup className={"h-full overflow-auto moderscroller"} vertical>
                        {pageLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                className="text-3xl w-full"
                                active={currentPath === link.href}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </NavGroup>
                </Navbar>
            </div>
            <div className=' md:hidden block'>
                <Breadcrumb className="bg-stone-950 rounded-md p-2">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem> 
                    <BreadcrumbSeparator />
                    <BreadcrumbDropdown placeholder={pageLinks.find(link => link.href === currentPath)?.name || "Button"}>
                        {pageLinks.map((link) => (
                            <BreadcrumbItem key={link.href}>
                                <BreadcrumbLink href={link.href}>{link.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        ))}
                    </BreadcrumbDropdown>
                </Breadcrumb>
            </div>
        </>
    )
}

export default Header