import React, { useState } from 'react';

/**
 * A basic input component for text and other input types.
 * 
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.id - The ID attribute for the input element.
 * @param {string} [props.error] - An error message to display below the input.
 * @param {string} [props.type='text'] - The type attribute for the input element.
 * @param {string} [props.className] - Additional CSS classes to apply to the input element.
 * @param {string} [props.value] - The value of the input element.
 * @param {string} [props.placeholder] - The placeholder text for the input element.
 * @param {boolean} [props.disabled=false] - Whether the input element is disabled.
 * @param {function} [props.onChange] - A callback function triggered when the input value changes.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<input>` element.
 * 
 * @example
 * // Basic usage
 * <Input id="name" placeholder="Enter your name" />
 * 
 * @example
 * // With error message
 * <Input id="email" type="email" error="Invalid email address" />
 * 
 * @example
 * // Controlled input
 * <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
                className={`mt-1 p-2 block w-full rounded-md placeholder:text-gray-400 bg-gray-900 border  border-gray-500 shadow-sm sm:text-sm focus:border  disabled:bg-gray-900/90 disabled:cursor-not-allowed hover:bg-opacity-70 ${error ? 'border-red-500' : ''}  ${className}`}
                disabled={disabled}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </>
    );
};

export default Input;
