"use client";

import React, { useState } from 'react';

/**
 * A customizable checkbox component with various variants and sizes.
 * 
 * @component
 * @param {Object} props - The component's props.
 * @param {boolean} [props.checked=false] - Whether the checkbox is checked by default.
 * @param {function} [props.onChange] - A callback function triggered when the checkbox's checked state changes. 
 *   Receives the new checked state as a boolean argument.
 * @param {string} [props.id] - The ID for the checkbox element.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the checkbox container.
 * @param {'default'|'outline'|'secondary'|'danger'|'warning'|'info'} [props.variant='default'] - The visual variant of the checkbox.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - The size of the checkbox.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<div>` container.
 * 
 * @example
 * // Basic usage
 * <Checkbox id="agreement" onChange={(checked) => console.log('Agreement checked:', checked)} />
 * <label htmlFor="agreement">Agree to terms</label>
 * 
 * @example
 * // With different variant and size
 * <Checkbox variant="danger" size="lg" id="important" checked />
 * <label htmlFor="important">Important option</label>
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
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };
    const svgsizes = {
        sm: 'w-3 h-3 ',
        md: 'w-4 h-4 ',
        lg: 'w-5 h-5 ',
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
