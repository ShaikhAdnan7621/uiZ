"use client";

import React, { useState } from 'react';



/**
 * @typedef {Object} DropdownProps
 * @property {string} [className] - Additional CSS class names to apply to the dropdown container.
 * @property {React.ReactNode} children - The dropdown items to be displayed.
 * @property {string|number} [value] - The currently selected value (for single selection).
 * @property {function} [onChange] - A callback function that is triggered when the selected value changes.
 * @property {string} [placeholder] - The placeholder text to display when no value is selected.
 * @property {boolean} [multiple] - Whether to allow multiple selections. Defaults to false.
 * A customizable dropdown component for selecting single or multiple values.
 * @param {DropdownProps} props - The properties for the dropdown component.
 * @returns {JSX.Element} The rendered dropdown component.
 */
export default function Dropdown({ className, children, value, onChange, placeholder = "Select an option", multiple = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [multipleSelection, setMultipleSelection] = useState([]); // Corrected typo

    // Use the provided 'onChange' function to update the parent component's state
    const handleChange = (newValue) => {
        if (onChange && multiple) {
            if (!multipleSelection.includes(newValue)) {
                setMultipleSelection([...multipleSelection, newValue]);
                onChange([...multipleSelection, newValue]);
            } else {
                // Remove the element if it exists in the array
                setMultipleSelection(multipleSelection.filter(item => item !== newValue));
                onChange(multipleSelection.filter(item => item !== newValue));
            }
        } else if (onChange) {
            onChange(newValue);
            setIsOpen(false); // Close dropdown after single selection
        }
    };

    const filteredChildren = (React.Children.count(children) > 5) ? children.filter(child => {
        const content = child.props.value || child.props.children;
        return content.toLowerCase().includes(search.toLowerCase());
        // Simplified filtering logic
    }) : children;

    return (
        <div className={` bg-gray-900 relative mt-1 ${className}`}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className=" cursor-pointer p-2 border rounded-md relative w-full flex items-center justify-between">
                {/* Display selected value(s) or placeholder */}
                <div className='flex items-center gap-1 flex-wrap'>
                    {multiple && multipleSelection.length > 0 ? (
                        (multipleSelection.map((item, index) => (
                            <span key={index} className='px-2 py-1 bg-slate-500/90 text-sm rounded-md'>{item}</span>
                        )))
                    ) : value ? (
                        <span>{value}</span>
                    ) : (
                        <span className="text-gray-500">{placeholder}</span>
                    )}
                </div>
                <svg
                    className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : '' }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute top-full z-10 border rounded-md overflow-hidden shadow-md mt-3 w-full">
                    <ul className="py-1 flex flex-col gap-1 bg-gray-900">
                        {(React.Children.count(children) > 5) && (
                            <div className="px-2 py-1 ">
                                <input
                                    type="text"
                                    className="border bg-black rounded-md px-1 py-1 w-full"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                />
                            </div>
                        )}

                        {/* Render filtered children */}
                        {filteredChildren.map((child, index) => (
                            <li
                                key={index}
                                onClick={() => handleChange(child.props.value || child.props.children)}
                                className={`px-2 py-2 cursor-pointer hover:bg-gray-800/90 ${multipleSelection.includes(child.props.value || child.props.children) ? "bg-gray-800/90" : " "}`}
                            >
                                {child}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


/**
 * @typedef {Object} DropdownItemProps
 * @property {React.ReactNode} children - The content of the dropdown item.
 * @property {string|number} [value] - The value associated with the dropdown item.
 * @param {DropdownItemProps} props - The properties for the dropdown item.
 * @returns {JSX.Element} The rendered dropdown item.
 */
export const DropdownItem = ({ children, value }) => {
    return (
        <div value={value || children}>{children}</div>
    );
};
