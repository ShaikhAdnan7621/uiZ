import React, { useState } from 'react';

/**
 * A versatile input component for collecting user input.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} [props.id] - The ID for the input element.
 * @param {string} [props.error] - An error message to display below the input.
 * @param {string} [props.type='text'] - The type of input (e.g., 'text', 'email', 'password').
 * @param {string} [props.className=''] - Additional CSS classes to apply to the input.
 * @param {string} [props.value] - The current value of the input.
 * @param {string} [props.placeholder] - Placeholder text for the input.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {function} [props.onChange] - A function to call when the input value changes.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<input>` element.
 *
 * @example
 * // Basic usage
 * <Input placeholder="Enter your name" />
 *
 * @example
 * // With label and error message
 * <Input 
 *     id="name" 
 *     label="Name" 
 *     error="Please enter a valid name" 
 *     value={name} 
 *     onChange={(e) => setName(e.target.value)} 
 * />
 */
const Input = ({ id, error, type = 'text', className, value, placeholder, disabled = false, onChange, ...rest }) => {

    const handleChange = (e) => {
        onChange && onChange(e);
    };

    return (
        <>
            <input
                {...rest}
                id={id}
                value={value}
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
                className={`mt-1 p-2 block w-full rounded-md placeholder:text-gray-400 bg-gray-900 border  border-gray-500 shadow-sm sm:text-sm focus:border  disabled:bg-gray-900/90 disabled:cursor-not-allowed ${error ? 'border-red-500' : ''}  ${className}`}
                disabled={disabled}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </>
    );
};

export default Input;
