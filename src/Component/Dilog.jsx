/**
 * @file Provides a set of components for creating context menus (right-click menus).
 *
 * This module offers a way to easily implement context menus within your application.
 * It includes components for the container, menu content, menu groups, and individual menu items.
 *
 * @example
 * // Basic usage:
 * <DilogContener rightclick={() => console.log('Menu clicked!')}>
 *   <DilogContent>
 *     <span>Right-click me</span>
 *   </DilogContent>
 *   <DilogMenuContent>
 *     <DilogMenuGroup title="Actions">
 *       <DilogMenuList>Option 1</DilogMenuList>
 *       <DilogMenuList>Option 2</DilogMenuList>
 *     </DilogMenuGroup>
 *   </DilogMenuContent>
 * </DilogContener>
 */
import React, { useEffect, useRef, useState } from 'react';

/**
 * The main container component for the context menu.
 *
 * This component wraps the main content and the context menu content.
 * It handles the right-click event and displays the menu at the appropriate position.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} [props.className] - Additional CSS classes to apply to the container.
 * @param {function} [props.rightclick] - A callback function triggered when the container is right-clicked.
 * @param {React.ReactNode} props.children - The content of the container.
 *   This should be two children: the main content wrapped in `DilogContent` and 
 *   the context menu content wrapped in `DilogMenuContent`.
 */
export default function DilogContener({ className, rightclick, children }) {
    const [DilogIsOpen, setdilogisopen] = useState(false);
    const [dilogPosition, setDilogPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    /**
     * Handles the right-click event on the container.
     *
     * @param {MouseEvent} e - The MouseEvent object.
     */
    const handleRightClick = (e) => {
        e.preventDefault(); // Prevent default right-click menu
        rightclick && rightclick(); // Execute the provided callback
        setdilogisopen(!DilogIsOpen); // Toggle menu visibility
        const rect = e.target.getBoundingClientRect(); // Get container's position

        // Set menu position relative to the container
        setDilogPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    /**
     * Handles clicks outside of the context menu.
     *
     * @param {MouseEvent} event - The MouseEvent object.
     */
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setdilogisopen(false); // Close the menu if clicked outside
        }
    };

    // Attach and detach the click outside event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            onContextMenu={handleRightClick}
            className={`relative ${className}`}
        >
            {children[0]} {/* Render the main content */}
            {DilogIsOpen && (
                <div
                    ref={menuRef}
                    style={{ top: `${dilogPosition.y}px`, left: `${dilogPosition.x}px` }}
                    className="absolute transform z-10 "
                >
                    {children[1]} {/* Render the context menu content */}
                </div>
            )}
        </div>
    );
}

/**
 * A wrapper component for the context menu content.
 *
 * This component provides basic styling for the menu.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the menu.
 * @param {string} [props.className] - Additional CSS classes to apply to the menu content.
 */
export const DilogMenuContent = ({ children, className }) => {
    return (
        <div className={`rounded-md border border-gray-500 bg-gray-900 ${className} `}>
            {children}
        </div>
    );
};

/**
 * A component to group menu items within the context menu.
 *
 * This component allows you to visually group related menu items and provide a title for the group.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The menu items to group.
 * @param {string} [props.title] - The title for the group.
 * @param {string} [props.className] - Additional CSS classes to apply to the group.
 */
export const DilogMenuGroup = ({ children, title, className }) => {
    return (
        <div className={`w-full p-2 flex flex-col gap-1 mb-1 ${className}`}>
            <div className='flex items-center gap-1'>
                <span className='text-gray-500 my-2'>
                    {title}
                </span>
                <hr className='flex-grow border-t border-gray-500' />
            </div>
            {children}
        </div>
    );
};

/**
 * A component for individual menu items within the context menu.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the menu item.
 * @param {string} [props.className] - Additional CSS classes to apply to the menu item.
 */
export const DilogMenuList = ({ children, className }) => {
    return (
        <div className={`hover:bg-gray-800 w-full px-1 py-0.5 rounded-sm flex justify-between ${className}`}>
            {children}
        </div>
    );
};

/**
 * A wrapper component for the main content within the `DilogContener`.
 *
 * This component helps to separate the main content from the context menu content.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The main content to display.
 * @param {string} [props.className] - Additional CSS classes to apply to the content.
 */
export const DilogContent = ({ children, className }) => {
    return (
        <div className={`w-full h-full ${className}`}>
            {children}
        </div>
    );
};
