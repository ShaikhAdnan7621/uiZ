import React, { useState } from 'react';

/**
 * @typedef {Object} ScrollPosition
 * @property {number} top - The vertical scroll position.
 * @property {number} left - The horizontal scroll position.
 */

/**
 * A React component that provides a scrollable area for its children.
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the scrollable area.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the scrollable area.
 * @param {'horizontal'|'vertical'|'both'} [props.orientation='horizontal'] - The scrolling orientation. 
 *   - `horizontal`: Allows horizontal scrolling.
 *   - `vertical`: Allows vertical scrolling.
 *   - `both`: Allows both horizontal and vertical scrolling.
 * @param {function(ScrollPosition)} [props.onScroll] - A callback function that is triggered when the scroll position changes. 
 *   The callback receives an object containing the current `top` and `left` scroll positions.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <ScrollArea>
 *   <div style={{ width: '2000px' }}>Long content here...</div>
 * </ScrollArea>
 * 
 * @example
 * // Vertical scrolling with custom height
 * <ScrollArea className="h-64" orientation="vertical">
 *   <div style={{ height: '1000px' }}>Tall content here...</div>
 * </ScrollArea>
 */

function ScrollArea({ children, className = '', orientation = 'horizontal', onScroll }) {
    const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });

    const handleScroll = (event) => {
        const { scrollTop, scrollLeft } = event.target;

        setScrollPosition({
            top: scrollTop,
            left: scrollLeft
        });

        // Call the onScroll prop if provided
        if (onScroll) {
            onScroll({
                top: scrollTop,
                left: scrollLeft
            });
        }
    };

    // Class to handle different scrolling orientations
    const orientationClasses = {
        horizontal: 'overflow-x-scroll',
        vertical: 'overflow-y-scroll',
        both: 'overflow-scroll'
    };

    const scrollClass = orientationClasses[orientation] || 'overflow-x-scroll';

    return (
        <>
            <style>
                {`
                /* Custom Scrollbar Styles */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                    height: 12px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background-color: #e0e0e0;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #888;
                    border-radius: 10px;
                    border: 2px solid #f4f4f4;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #555;
                }

                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #888 #e0e0e0;
                }
                `}
            </style>
            <div
                className={`custom-scrollbar ${scrollClass} ${className}`}
                onScroll={handleScroll}
            >
                {children}
            </div>
        </>
    );
}

export default ScrollArea;
