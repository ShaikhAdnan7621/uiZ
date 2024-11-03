import React from 'react'

/**
 * A simple label component for form elements.
 * 
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.htmlFor - The ID of the form element the label is associated with.
 * @param {React.ReactNode} props.children - The content of the label.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the label.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<label>` element.
 * 
 * @example
 * // Basic usage
 * <Label htmlFor="name">Name:</Label>
 * <input type="text" id="name" />
 */
export default function Label({ htmlFor, children, className, ...rest }) {
    return (
        <label
            htmlFor={htmlFor} 
            className={`block text-sm text-gray-400 ${className}`}
            {...rest}
        >
            {children}
        </label>
    )
}
