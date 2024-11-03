"use client";
import React, { useState } from 'react';

/**
 * @component Breadcrumb - A React component for rendering breadcrumb navigation.
 *
 * @param {React.ReactNode} children - The child elements of the breadcrumb.
 * @param {string} [className] - Additional CSS classes to apply to the breadcrumb container.
 * @param {React.HTMLAttributes<HTMLDivElement>} [rest] - Additional props to spread to the breadcrumb container.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/about">About</BreadcrumbLink>
 *   </BreadcrumbItem>
 * </Breadcrumb>
 */

export const Breadcrumb = ({ children, className, ...rest }) => {
    return (
        <nav aria-label="Breadcrumb" className={className} {...rest}>
            <ol className="flex items-center space-x-1 md:space-x-2">
                {children}
            </ol>
        </nav>
    );
};

/**
 * @component BreadcrumbItem - A single item within a breadcrumb.
 *
 * @param {React.ReactNode} children - The child elements of the breadcrumb item.
 * @param {string} [className] - Additional CSS classes to apply to the breadcrumb item.
 * @param {React.HTMLAttributes<HTMLLIElement>} [rest] - Additional props to spread to the breadcrumb item.
 */
export const BreadcrumbItem = ({ children, className, ...rest }) => {
    return (
        <li className={className} {...rest}>
            {children}
        </li>
    );
};

/**
 * @component BreadcrumbLink - A breadcrumb item that functions as a link.
 *
 * @param {string} href - The URL to navigate to when the link is clicked.
 * @param {React.ReactNode} children - The text content of the link.
 * @param {string} [className] - Additional CSS classes to apply to the link.
 * @param {boolean} [active=false] - Whether the link is currently active.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} [rest] - Additional props to spread to the link.
 */
export const BreadcrumbLink = ({ href, children, className, active, ...rest }) => {
    return (
        <a
            href={href}
            className={`text-sm font-medium  ${active ? 'text-gray-100 dark:text-gray-100' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500'} ${className}`}
            {...rest}
        >
            {children}
        </a>
    );
};

/**
 * @component BreadcrumbSeparator - A separator between breadcrumb items.
 *
 * @param {React.ReactNode} [children] - Optional custom separator content.
 * @param {string} [className] - Additional CSS classes to apply to the separator.
 * @param {React.HTMLAttributes<HTMLSpanElement>} [rest] - Additional props to spread to the separator.
 */
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

/**
 * @component BreadcrumbEllipsis - An ellipsis icon used to indicate omitted breadcrumb items.
 *
 * @param {string} [className] - Additional CSS classes to apply to the ellipsis icon.
 * @param {React.SVGProps<SVGSVGElement>} [rest] - Additional props to spread to the ellipsis icon.
 */
export const BreadcrumbEllipsis = ({ className, ...rest }) => {
    return (
        <svg
            className={`h-4 w-4 text-gray-400 ${className}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...rest}
        >
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
        </svg>
    );
};

/**
 * @component BreadcrumbList - A container for rendering a list of breadcrumb items.
 *
 * @param {React.ReactNode} children - The child elements of the breadcrumb list.
 * @param {string} [className] - Additional CSS classes to apply to the breadcrumb list.
 * @param {React.HTMLAttributes<HTMLOListElement>} [rest] - Additional props to spread to the breadcrumb list.
 */
export const BreadcrumbList = ({ children, className, ...rest }) => {
    return (
        <ol className={`flex items-center space-x-1 md:space-x-2 ${className}`} {...rest}>
            {children}
        </ol>
    );
};

/**
 * @component BreadcrumbPage - A breadcrumb item that displays the current page name.
 *
 * @param {React.ReactNode} children - The text content of the page name.
 * @param {string} [className] - Additional CSS classes to apply to the page name.
 * @param {React.HTMLAttributes<HTMLSpanElement>} [rest] - Additional props to spread to the page name.
 */
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

/**
 * @component BreadcrumbDropdown - A breadcrumb item that displays a dropdown menu.
 *
 * @param {React.ReactNode} children - The child elements of the dropdown menu.
 * @param {string} [className] - Additional CSS classes to apply to the dropdown container.
 * @param {React.HTMLAttributes<HTMLLIElement>} [rest] - Additional props to spread to the dropdown container.
 */
export const BreadcrumbDropdown = ({ children, className, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`relative ${className}`} {...rest}>
            <div onClick={toggleDropdown} className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 flex items-center">
                Dropdown
                <svg
                    className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ' '}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 rounded-md shadow-lg border border-gray-500 ">
                    {React.Children.map(children, (child, index) => (
                        <li key={index} className="px-4 py-2 hover:shadow-md">
                            {child}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
