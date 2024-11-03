"use client";
import Link from 'next/link';
import React, { useState, createContext, useContext } from 'react';

// Create a context for the Breadcrumb
const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
    return (
        <BreadcrumbContext.Provider value={{}}>
            {children}
        </BreadcrumbContext.Provider>
    );
};

export const Breadcrumb = ({ children, className, ...rest }) => {
    return (
        <nav aria-label="Breadcrumb" className={className} {...rest}>
            <ol className="flex items-center space-x-1 md:space-x-2">
                {children}
            </ol>
        </nav>
    );
};

export const BreadcrumbItem = ({ children, className, ...rest }) => {
    return (
        <li className={className} {...rest}>
            {children}
        </li>
    );
};


export const BreadcrumbLink = ({ href, children, className, active, onClose, ...rest }) => {
    return (
        <Link
            href={href}
            className={`text-sm font-medium ${active ? 'text-gray-100 dark:text-gray-100' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500'} ${className}`}
            onClick={onClose} // Call onClose when the link is clicked
            {...rest}
        >
            {children}
        </Link>
    );
};

export const BreadcrumbSeparator = ({ children, className, ...rest }) => {
    return (
        <span
            className={`text-gray-500 dark:text-gray-400 mx-1 md:mx-2 text-sm ${className}`}
            {...rest}
        >
            {children ? children : '/'}
        </span>
    );
};


export const BreadcrumbEllipsis = ({ className, ...rest }) => {
    return (
        <li >
            <svg
                className={`h-4 w-4 text-gray-400 ${className}`}
                viewBox="0 0 24 24"
                fill="currentColor"
                {...rest}
            >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
        </li>
    );
};

export const BreadcrumbList = ({ children, className, ...rest }) => {
    return (
        <ol className={`flex items-center space-x-1 md:space-x-2 ${className}`} {...rest}>
            {children}
        </ol>
    );
};

export const BreadcrumbPage = ({ children, className, ...rest }) => {
    return (
        <span
            className={`text-sm font-medium text-gray-700 dark:text-gray-500 ${className}`}
            {...rest}
        >
            {children}
        </span>
    );
};

export const BreadcrumbDropdown = ({ children, className, placeholder, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <li className={`relative ${className}`} ref={dropdownRef} {...rest}>
            <div onClick={toggleDropdown} className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 flex items-center">
                {placeholder}
                <svg
                    className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <ul className="absolute z-50 bg-gray-900 text-gray-100 max-h-72 overflow-auto border border-gray-500 rounded-md shadow-lg mt-2"
                    style={{
                        top: dropdownRef.current.getBoundingClientRect().bottom > window.innerHeight ? '-auto' : 'auto',
                        bottom: dropdownRef.current.getBoundingClientRect().bottom > window.innerHeight ? '100%' : 'auto',
                        left: dropdownRef.current.getBoundingClientRect().right > window.innerWidth ? '-auto' : '0',
                        right: dropdownRef.current.getBoundingClientRect().right > window.innerWidth ? '100%' : 'auto',
                    }}>
                    {React.Children.map(children, (child, index) => (
                        <li key={index} className="px-4 py-2 hover:shadow-md">
                            {React.cloneElement(child, { onClose: closeDropdown })}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
