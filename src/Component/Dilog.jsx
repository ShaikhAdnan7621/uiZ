import React, { useEffect, useRef, useState } from 'react';

/**
 * A container component that displays a context menu on right-click.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the container.
 * @param {function} [props.rightclick] - A callback function triggered when the container is right-clicked.
 * @param {React.ReactNode} props.children - The content of the container. 
 *   This should be two children: the main content and the context menu content.
 *
 * @example
 * // Basic usage with a simple menu
 * <DilogContener rightclick={() => console.log('Menu clicked!')}>
 *   <span>Right-click me</span>
 *   <DilogMenuContent>
 *     <DilogMenuList>Option 1</DilogMenuList>
 *     <DilogMenuList>Option 2</DilogMenuList>
 *   </DilogMenuContent>
 * </DilogContener>
 */
export default function DilogContener({ className, rightclick, children }) {
    const [DilogIsOpen, setdilogisopen] = useState(false);
    const [dilogPosition, setDilogPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    const handleRightClick = (e) => {
        e.preventDefault();
        rightclick && rightclick();
        setdilogisopen(true);
        const rect = e.target.getBoundingClientRect();

        setDilogPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setdilogisopen(false);
        }
    };

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
            {children[0]}
            {DilogIsOpen && (
                <div
                    ref={menuRef}
                    style={{ top: `${dilogPosition.y}px`, left: `${dilogPosition.x}px` }}
                    className="absolute transform z-10 "
                >
                    {children[1]}
                </div>
            )}
        </div>
    );
}

/**
 * A component to wrap the content of the context menu.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the menu.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the menu content.
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
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The menu items to group.
 * @param {string} [props.title] - The title for the group.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the group.
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
 * @param {string} [props.className=''] - Additional CSS classes to apply to the menu item.
 */
export const DilogMenuList = ({ children, className }) => {
    return (
        <div className={`hover:bg-gray-800 w-full px-1 py-0.5 rounded-sm flex justify-between ${className}`}>
            {children}
        </div>
    );
};

/**
 * A component to wrap the main content within the DilogContener.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The main content to display.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the content.
 */
export const DilogContent = ({ children, className }) => {
    return (
        <div className={`w-full h-full ${className}`}>
            {children}
        </div>
    );
};
