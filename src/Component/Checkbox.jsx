"use client";

import React, { useState } from 'react';

/**
 * @typedef {Object} CheckboxProps
 * @property {boolean} [checked=false] - Whether the checkbox is checked or not.
 * @property {function} [onChange] - A callback function triggered when the checkbox's checked state changes.
 * @property {string} [id] - The ID attribute for the checkbox element.
 * @property {string} [className] - Additional CSS class names to apply to the checkbox container.
 * @property {'default'|'outline'|'secondary'|'danger'|'warning'|'info'} [variant='default'] - The visual variant of the checkbox.
 * @property {'xs'|'sm'|'md'|'lg'|'xl'} [size='md'] - The size of the checkbox.
 * 
 * A customizable checkbox component with various visual variants and sizes.
 * 
 * @param {CheckboxProps} props - The properties for the checkbox component.
 * @returns {JSX.Element} The rendered checkbox component.
 * 
 * @example
 * // Basic usage
 * <Checkbox />
 * 
 * @example
 * // Controlled checkbox with a change handler
 * <Checkbox checked={isChecked} onChange={(checked) => setIsChecked(checked)} />
 * 
 * @example
 * // Checkbox with a specific variant and size
 * <Checkbox variant="danger" size="lg" />
 */
const Checkbox = ({
    checked = false,
    onChange,
    id,
    className,
    variant = 'default',
    size = 'md',
    ...rest
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        setIsChecked(!isChecked);
        onChange && onChange(!isChecked);
    };

    const variants = {
        default: {
            unchecked: 'focus:ring-blue-500',
            checked: 'bg-blue-600 border-transparent focus:ring-blue-500 text-white' 
        },
        outline: {
            unchecked: 'focus:ring-gray-400',
            checked: 'bg-gray-800 border-gray-500 focus:ring-gray-400 text-white'
        },
        secondary: {
            unchecked: 'focus:ring-gray-600',
            checked: 'bg-gray-600 border-transparent focus:ring-gray-600 text-white'
        },
        danger: {
            unchecked: 'focus:ring-red-500',
            checked: 'bg-red-600 border-transparent focus:ring-red-500 text-white'
        },
        warning: {
            unchecked: 'focus:ring-yellow-400',
            checked: 'bg-yellow-400 border-transparent focus:ring-yellow-400 text-black' 
        },
        info: {
            unchecked: 'focus:ring-blue-400',
            checked: 'bg-blue-400 border-transparent focus:ring-blue-400 text-white'
        },
    };

    const sizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-7 h-7'
    };
    const svgsizes = {
        xs: 'w-2 h-2 ',
        sm: 'w-3 h-3 ',
        md: 'w-4 h-4 ',
        lg: 'w-5 h-5 ',
        xl: 'w-6 h-6 ',
    };

    
    const currentVariant = variants[variant] || variants.default;

    return (
        <div className={`flex items-center ${className} `} {...rest}>
            <button
                onClick={handleClick}
                className={` rounded-[4px] mr-2 border ${currentVariant[isChecked ? 'checked' : 'unchecked']} ${sizes[size]} flex items-center justify-center transition duration-200 ease-in-out`}
                aria-checked={isChecked}
                role="checkbox"
                id={id}
            >
                {isChecked && (
                    <svg
                        className={`flex items-center justify-center w-3 h-3 ${svgsizes[size]} `}
                        viewBox="0 0 12 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M1 4l4 4L11 1" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Checkbox;
