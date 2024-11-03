"use client";
import { useState } from 'react';


/**
 * @description A reusable Tooltip component that displays a tooltip on hover.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The children of the Tooltip component, which will trigger the tooltip.
 * @param {string} props.text - The text to display in the tooltip.
 * @param {React.ReactNode} [props.icon] - An optional icon to display in the tooltip.
 * @param {'top' | 'bottom' | 'left' | 'right'} [props.position='top'] - The position of the tooltip relative to the children.
 * @param {'xs' | 'sm' | 'md' | 'lg'} [props.size='md'] - The size of the tooltip.
 * @param {string} [props.className] - Additional CSS classes to apply to the tooltip.
 * 
 * @returns {JSX.Element} The rendered Tooltip component.
 * 
 * @example  <Tooltip text="This is a tooltip">Hover over me</Tooltip>
 */
export default function Tooltip({ children, text, icon, position = 'top', size = 'md', className }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const tooltipClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    };

    const sizeClasses = {
        xs: 'text-xs p-2',
        sm: 'text-sm px-2 py-1',
        md: 'text-base px-2.5 py-1.5 ',
        lg: 'text-lg px-3 py-2 ',
    };

    return (
        <div className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}>

            {children}

            {showTooltip && (
                <div className={`absolute z-10 bg-gray-800 text-white rounded-md  text-base px-2.5 py-1.5  shadow-lg ${tooltipClasses[position]} ${sizeClasses[size]} ${className}`}
                    role="tooltip">
                    <div className="flex items-center">
                        {icon && <div className="mr-2">{icon}</div>}
                        <span>{text}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
