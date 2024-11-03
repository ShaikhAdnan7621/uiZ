"use client";

import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

const DropdownContext = createContext();

/**
 * @typedef {Object} DropdownProps
 * @property {string} [className] - Additional CSS class names to apply to the dropdown container.
 * @property {React.ReactNode} children - The dropdown items to be displayed.
 * @property {string|number} [value] - The currently selected value (for single selection).
 * @property {function} [onChange] - A callback function that is triggered when the selected value changes.
 * @property {string} [placeholder] - The placeholder text to display when no value is selected.
 * @property {boolean} [multiple] - Whether to allow multiple selections. Defaults to false.
 * 
 * A customizable dropdown component for selecting single or multiple values.
 * 
 * @param {DropdownProps} props - The properties for the dropdown component.
 * @returns {JSX.Element} The rendered dropdown component.
 */
export default function Dropdown({ className, children, value, onChange, placeholder = "Select an option", multiple = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [multipleSelection, setMultipleSelection] = useState([]);
    const [positionUpwards, setPositionUpwards] = useState(false);
    const dropdownRef = useRef(null);

    // Context value to share state with DropdownItem
    const contextValue = { handleChange, multipleSelection, multiple };

    // Determine dropdown positioning (upward or downward)
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setPositionUpwards(window.innerHeight - rect.bottom < 200); // Open upwards if not enough space below
        }
    }, [isOpen]);

    /**
     * Handles changes in the selected value(s).
     * 
     * @param {string|number} newValue - The new selected value.
     */
    function handleChange(newValue) {
        if (onChange && multiple) {
            if (!multipleSelection.includes(newValue)) {
                const newSelection = [...multipleSelection, newValue];
                setMultipleSelection(newSelection);
                onChange(newSelection);
            } else {
                const filteredSelection = multipleSelection.filter(item => item !== newValue);
                setMultipleSelection(filteredSelection);
                onChange(filteredSelection);
            }
            setSearch("");
        } else if (onChange) {
            onChange(newValue);
            setIsOpen(false);
            setSearch("");
        }
    }

    // Filter children for search if there are more than 5 items
    const filteredChildren = React.Children.count(children) > 5
        ? React.Children.toArray(children).filter(child => {
            const content = child.props.value || child.props.children;
            return content.toLowerCase().includes(search.toLowerCase());
        })
        : children;

    return (
        <DropdownContext.Provider value={contextValue}>

            <style>
                {`
                /* Custom Scrollbar Styles */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 10px;
                    height: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background-color: #333;
                    border-radius: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #555;
                    border-radius: 8px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #444;
                }

                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #555 #333;
                    scrollbar-gutter: stable;
                }
                `}
            </style>
            <div className={`relative mt-1 ${className}`} ref={dropdownRef}>
                <div onClick={() => setIsOpen(!isOpen)}
                    className="placeholder:text-gray-400 hover:bg-opacity-70 bg-gray-900 cursor-pointer p-2 border rounded-md relative w-full flex items-center justify-between border-gray-500 shadow-sm sm:text-sm focus:border disabled:bg-gray-900/90 disabled:cursor-not-allowed"
                >
                    <div className='flex items-center gap-1 flex-wrap'>
                        {multiple && multipleSelection.length > 0 ? (
                            multipleSelection.map((item, index) => (
                                <span key={index} className='px-2 py-1 bg-slate-500/90 text-sm rounded-md'>{item}</span>
                            ))
                        ) : value ? (
                            <span>{value}</span>
                        ) : (
                            <span className="text-gray-500">{placeholder}</span>
                        )}
                    </div>
                    <svg
                        className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <div className={`absolute z-10 border rounded-md overflow-hidden  shadow-md mt-1 w-full ${positionUpwards ? 'bottom-full mb-1' : 'top-full mt-1'}`}>
                        <ul className="max-h-80 overflow-auto custom-scrollbar py-1 flex flex-col gap-1 bg-gray-900">
                            {(React.Children.count(children) > 5) && (
                                <div className="px-2 py-1">
                                    <input
                                        type="text"
                                        className="border bg-black rounded-md px-1 py-1 w-full"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search..."
                                    />
                                </div>
                            )}
                            {filteredChildren.map((child, index) => (
                                <li key={index}>{child}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </DropdownContext.Provider>
    );
}

/**
 * @typedef {Object} DropdownItemProps
 * @property {React.ReactNode} children - The content of the dropdown item.
 * @property {string|number} [value] - The value associated with the dropdown item.
 * 
 * @param {DropdownItemProps} props - The properties for the dropdown item.
 * @returns {JSX.Element} The rendered dropdown item.
 */
export const DropdownItem = ({ children, value }) => {
    const { handleChange, multipleSelection, multiple } = useContext(DropdownContext);

    return (
        <div
            onClick={() => handleChange(value || children)}
            className={`px-2 py-2 cursor-pointer hover:bg-gray-800/90 ${multiple && multipleSelection.includes(value || children) ? "bg-gray-800/90" : ""}`}
        >
            {children}
        </div>
    );
};
