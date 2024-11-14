import Link from 'next/link';
import React from 'react';

/**
 * Represents a navigation bar component.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The children of the navbar.
 * @param {string} [props.className] - Additional CSS classes to apply to the navbar.
 * @param {boolean} [props.vertical=false] - Whether the navbar should be displayed vertically.
 * @returns {JSX.Element} The rendered navbar component.
 */
export default function Navbar({ children, className, vertical = false }) {
	const navStyle = `flex ${vertical ? 'flex-col w-52' : 'flex-row items-center max-h-28'} gap-2 justify-between`;
	return (
		<nav className={`${className} ${navStyle}`}>
			{children}
		</nav>
	);
}

/**
 * Represents a navigation link within a navbar.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The text content of the link.
 * @param {string} [props.className] - Additional CSS classes to apply to the link.
 * @param {string} props.href - The URL or route to navigate to when the link is clicked.
 * @param {boolean} [props.active=false] - Whether the link is currently active.
 * @returns {JSX.Element} The rendered navigation link.
 */
export function NavLink({ children, className, href, active = false, ...rest }) {
	return (
		<Link
			href={href}
			{...rest}
			className={`text-sm font-medium text-white hover:bg-gray-900 px-3 py-2 rounded-md ${className} ${active ? 'bg-gray-900' : ''}`}
		>
			{children}
		</Link>
	);
}

/**
 * Represents a group of navigation links within a navbar.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The navigation links to be grouped.
 * @param {string} [props.className] - Additional CSS classes to apply to the group.
 * @param {boolean} [props.vertical=false] - Whether the group should be displayed vertically.
 * @returns {JSX.Element} The rendered navigation group.
 */
export function NavGroup({ className, children, vertical = false }) {
	const navGroupStyle = `flex ${vertical ? 'flex-col w-52' : 'flex-row'} text-white px-3 py-2 gap-1 items-center justify-start`;
	return (
		<ul className={`${className} ${navGroupStyle}`}>
			{children}
		</ul>
	);
}

/**
 * Represents a header section within a navbar.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the header section.
 * @param {string} [props.className] - Additional CSS classes to apply to the header.
 * @returns {JSX.Element} The rendered header section.
 */
export function NavHead({ className, children }) {

	return (
		<div className={`text-lg font-bold px-4 py-3  text-white text-left ${className}`}>
			{children}
		</div>
	);
}

/**
 * Represents a footer section within a navbar.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the footer section.
 * @param {string} [props.className] - Additional CSS classes to apply to the footer.
 * @param {boolean} [props.vertical=false] - Whether the footer should be displayed vertically.
 * @returns {JSX.Element} The rendered footer section.
 */
export function NavFoot({ className, children, vertical = false }) {
	const navFootStyle = `flex ${vertical ? 'flex-col w-52 ' : 'flex-row items-center justify-start'} text-white px-4 py-3 `;
	return (
		<div className={`${className} ${navFootStyle}`}>
			{children}
		</div>
	);
}
